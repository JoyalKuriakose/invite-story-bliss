import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Heart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export function SlideRSVP() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [guests, setGuests] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async () => {
    setError(null);
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || attending === null) {
      setError("Please enter your name and select Yes or No.");
      return;
    }

    setSubmitting(true);

    try {
      // Determine guest count: if not attending, must be 0
      const guestCount = attending ? Math.max(1, guests) : 0;

      const { data, error: supabaseError } = await supabase
        .from("rsvps")
        .insert([
          {
            name: trimmedName,
            attending: attending,
            guests: guestCount,
            note: trimmedMessage || null,
          },
        ])
        .select();

      if (supabaseError) {
        console.error("Supabase error:", supabaseError);
        setError(`Database error: ${supabaseError.message}`);
        setSubmitting(false);
        return;
      }

      console.log("Successfully inserted:", data);
      setSubmitted(true);
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 max-w-sm w-full px-4">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xs tracking-[0.35em] uppercase font-serif font-bold"
        style={{ color: "#ffffff" }}
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

          <div className="flex gap-2">
            <button
              onClick={() => setAttending(true)}
              className="flex-1 px-4 py-3 rounded-lg text-xs font-serif tracking-wider uppercase transition-all"
              style={{
                background: attending === true ? "rgba(255,215,0,0.18)" : "rgba(255,255,255,0.05)",
                border: attending === true ? "1px solid rgba(255,215,0,0.5)" : "1px solid rgba(255,255,255,0.1)",
                color: "#ffffff",
              }}
            >
              Joyfully Accept
            </button>
            <button
              onClick={() => setAttending(false)}
              className="flex-1 px-4 py-3 rounded-lg text-xs font-serif tracking-wider uppercase transition-all"
              style={{
                background: attending === false ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#ffffff",
              }}
            >
              Regretfully Decline
            </button>
          </div>

          {attending && (
            <div
              className="rounded-lg px-4 py-3 flex items-center justify-between"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,215,0,0.2)",
                backdropFilter: "blur(3px)",
              }}
            >
              <span className="font-serif text-xs" style={{ color: "#f5e6c8" }}>
                Number of guests
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  className="w-7 h-7 rounded-full"
                  style={{ border: "1px solid rgba(255,215,0,0.4)", color: "#ffd700" }}
                >
                  −
                </button>
                <span className="font-serif text-base w-4 text-center" style={{ color: "#ffffff" }}>
                  {guests}
                </span>
                <button
                  onClick={() => setGuests((g) => Math.min(10, g + 1))}
                  className="w-7 h-7 rounded-full"
                  style={{ border: "1px solid rgba(255,215,0,0.4)", color: "#ffd700" }}
                >
                  +
                </button>
              </div>
            </div>
          )}

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
              backdropFilter: "blur(3px)",
            }}
          />

          {error && <p className="text-xs font-serif" style={{ color: "#ffb3b3" }}>{error}</p>}

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
          initial={{ opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-2xl px-8 py-9 flex flex-col items-center gap-3 w-full overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(255,215,0,0.14), rgba(0,0,0,0.55) 60%, rgba(255,215,0,0.10))",
            border: "1px solid rgba(255,215,0,0.45)",
            backdropFilter: "blur(8px)",
          }}
        >
          <p className="text-center" style={{ color: "#ffffff" }}>
            {attending ? "Thank you for accepting!" : "Thank you for letting us know."}
          </p>
        </motion.div>
      )}
    </div>
  );
}
