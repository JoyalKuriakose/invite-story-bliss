import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Loader2, Check, Heart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Rsvp = {
  id: string;
  name: string;
  attending: boolean;
  guests: number;
};

type Message = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};

export function SlideRSVP() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [guests, setGuests] = useState(1);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const [rsvps, setRsvps] = useState<Rsvp[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  // Load RSVPs
  const loadRsvps = async () => {
    const { data } = await supabase
      .from("rsvps")
      .select("id,name,attending,guests")
      .order("created_at", { ascending: false });

    if (data) setRsvps(data as Rsvp[]);
  };

  // Load Messages
  const loadMessages = async () => {
    const { data } = await supabase
      .from("messages")
      .select("id,name,message,created_at")
      .order("created_at", { ascending: false })
      .limit(20);

    if (data) setMessages(data as Message[]);
  };

  useEffect(() => {
    loadRsvps();
    loadMessages();

    const rsvpChannel = supabase
      .channel("rsvps-changes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "rsvps" },
        () => loadRsvps()
      )
      .subscribe();

    const messageChannel = supabase
      .channel("messages-changes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        () => loadMessages()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(rsvpChannel);
      supabase.removeChannel(messageChannel);
    };
  }, []);

  // Submit RSVP + Message
  const submit = async () => {
    setError(null);

    const trimmed = name.trim();
    const wish = message.trim();

    if (!trimmed || attending === null) {
      setError("Please enter your name and select Yes or No.");
      return;
    }

    setSubmitting(true);

    // Insert RSVP
    const { error: rsvpError } = await supabase.from("rsvps").insert({
      name: trimmed.slice(0, 100),
      attending,
      guests: attending ? guests : 0,
    });

    // Insert Message if entered
    if (wish) {
      await supabase.from("messages").insert({
        name: trimmed.slice(0, 100),
        message: wish.slice(0, 500),
      });
    }

    setSubmitting(false);

    if (rsvpError) {
      setError("Could not submit. Please try again.");
      return;
    }

    setSubmitted(true);
  };

  const totalAttending = rsvps
    .filter((r) => r.attending)
    .reduce((sum, r) => sum + (r.guests || 1), 0);

  return (
    <div className="flex flex-col items-center gap-5 max-w-sm w-full px-4">

      {/* Heading */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xs tracking-[0.35em] uppercase font-serif font-bold"
        style={{
          color: "#ffffff",
          // textShadow: "0 2px 8px rgba(0,0,0,0.85)",
        }}
      >
        RSVP & Wishes
      </motion.p>

      {!submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full flex flex-col gap-3"
        >

          {/* Name */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            placeholder="Your name"
            className="rounded-lg px-4 py-3 font-serif text-sm focus:outline-none"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,215,0,0.25)",
              color: "#ffffff",
              backdropFilter: "blur(3px)",
            }}
          />

          {/* Accept / Decline */}
          <div className="flex gap-2">

            <button
              onClick={() => setAttending(true)}
              className="flex-1 px-4 py-3 rounded-lg text-xs font-serif tracking-wider uppercase transition-all"
              style={{
                background:
                  attending === true
                    ? "rgba(255,215,0,0.18)"
                    : "rgba(255,255,255,0.05)",
                border:
                  attending === true
                    ? "1px solid rgba(255,215,0,0.5)"
                    : "1px solid rgba(255,255,255,0.1)",
                color: "#ffffff",
              }}
            >
              Joyfully Accept
            </button>

            <button
              onClick={() => setAttending(false)}
              className="flex-1 px-4 py-3 rounded-lg text-xs font-serif tracking-wider uppercase transition-all"
              style={{
                background:
                  attending === false
                    ? "rgba(255,255,255,0.12)"
                    : "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#ffffff",
              }}
            >
              Regretfully Decline
            </button>
          </div>

          {/* Guests */}
          {attending && (
            <div
              className="rounded-lg px-4 py-3 flex items-center justify-between"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,215,0,0.2)",
                backdropFilter: "blur(3px)",
              }}
            >
              <span
                className="font-serif text-xs"
                style={{ color: "#f5e6c8" }}
              >
                Number of guests
              </span>

              <div className="flex items-center gap-3">

                <button
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  className="w-7 h-7 rounded-full"
                  style={{
                    border: "1px solid rgba(255,215,0,0.4)",
                    color: "#ffd700",
                  }}
                >
                  −
                </button>

                <span
                  className="font-serif text-base w-4 text-center"
                  style={{ color: "#ffffff" }}
                >
                  {guests}
                </span>

                <button
                  onClick={() => setGuests((g) => Math.min(10, g + 1))}
                  className="w-7 h-7 rounded-full"
                  style={{
                    border: "1px solid rgba(255,215,0,0.4)",
                    color: "#ffd700",
                  }}
                >
                  +
                </button>
              </div>
            </div>
          )}

          {/* Wishes */}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={500}
            rows={3}
            placeholder="Send your wishes…"
            className="rounded-lg px-4 py-3 font-serif text-sm resize-none focus:outline-none"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,215,0,0.25)",
              color: "#ffffff",
              // textShadow: "0 2px 10px rgba(0,0,0,0.9)",
              backdropFilter: "blur(3px)",
            }}
          />

          {/* Error */}
          {error && (
            <p
              className="text-xs font-serif"
              style={{ color: "#ffb3b3" }}
            >
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            onClick={submit}
            disabled={submitting}
            className="rounded-full px-6 py-3 font-serif text-sm tracking-[0.15em] uppercase transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            style={{
              background: "rgba(255,215,0,0.18)",
              border: "1px solid rgba(255,215,0,0.4)",
              color: "#ffffff",
              backdropFilter: "blur(3px)",
            }}
          >
            {submitting ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <>
                <Heart size={14} style={{ color: "#ffd700" }} />
                Send RSVP
              </>
            )}
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-lg px-6 py-5 flex flex-col items-center gap-2 w-full"
          style={{
            background: "rgba(255,215,0,0.08)",
            border: "1px solid rgba(255,215,0,0.25)",
            backdropFilter: "blur(3px)",
          }}
        >
          <Check size={28} style={{ color: "#ffd700" }} />

          <p
            className="font-serif text-base"
            style={{ color: "#ffffff" }}
          >
            Thank you!
          </p>

          <p
            className="text-xs font-serif text-center"
            style={{ color: "#f5e6c8" }}
          >
            Your RSVP and wishes have been received.
          </p>
        </motion.div>
      )}

      {/* Total Attending */}
      <div
        className="rounded-lg px-5 py-2"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,215,0,0.2)",
          backdropFilter: "blur(3px)",
        }}
      >
        <p
          className="font-serif text-xs"
          style={{ color: "#ffffff" }}
        >
          Total attending:{" "}
          <span
            className="text-base font-bold"
            style={{ color: "#ffd700" }}
          >
            {totalAttending}
          </span>
        </p>
      </div>

      {/* Wishes List */}
      <div className="w-full max-h-[28vh] overflow-y-auto flex flex-col gap-2 pr-1">

        <p
          className="text-center font-serif uppercase tracking-[0.25em] text-xs mb-1"
          style={{
            color: "#ffffff",
            // textShadow: "0 2px 10px rgba(0,0,0,0.85)",
          }}
        >
          Wishes For The Couple
        </p>

        {messages.map((m) => (
          <div
            key={m.id}
            className="rounded-lg px-3 py-2 text-left"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,215,0,0.2)",
              backdropFilter: "blur(3px)",
            }}
          >
            <p
              className="font-serif italic leading-snug"
              style={{
                fontSize: "0.82rem",
                color: "#ffffff",
              }}
            >
              "{m.message}"
            </p>

            <p
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "1.2rem",
                color: "#ffd700",
                marginTop: "6px",
              }}
            >
              — {m.name}
            </p>
          </div>
        ))}

        {messages.length === 0 && (
          <p
            className="text-xs font-serif italic text-center"
            style={{
              color: "#f5e6c8",
            }}
          >
            Be the first to share a wish.
          </p>
        )}
      </div>
    </div>
  );
}