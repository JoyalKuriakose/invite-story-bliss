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

    const trimmed = name.trim();
    const wish = message.trim();

    if (!trimmed || attending === null) {
      setError("Please enter your name and select Yes or No.");
      return;
    }

    setSubmitting(true);

    const { error } = await supabase
  .from("rsvps")
  .insert({
    name: trimmed,
    attending,
    guests: attending ? Math.max(1, guests) : 1,
    note: wish || null,
  });

    setSubmitting(false);

    if (error) {
      console.error(error);
      setError(error.message);
      return;
    }

    setSubmitted(true);
  };

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
          initial={{ opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-2xl px-8 py-9 flex flex-col items-center gap-3 w-full overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,215,0,0.14), rgba(0,0,0,0.55) 60%, rgba(255,215,0,0.10))",
            border: "1px solid rgba(255,215,0,0.45)",
            backdropFilter: "blur(8px)",
            boxShadow:
              "0 0 28px rgba(255,215,0,0.22), 0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <span className="absolute top-3 left-3 text-[0.7rem]" style={{ color: "#ffd700", opacity: 0.7 }}>❦</span>
          <span className="absolute top-3 right-3 text-[0.7rem]" style={{ color: "#ffd700", opacity: 0.7 }}>❦</span>
          <span className="absolute bottom-3 left-3 text-[0.7rem]" style={{ color: "#ffd700", opacity: 0.7 }}>❦</span>
          <span className="absolute bottom-3 right-3 text-[0.7rem]" style={{ color: "#ffd700", opacity: 0.7 }}>❦</span>

          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 180, damping: 14 }}
            className="flex items-center justify-center rounded-full"
            style={{
              width: 64,
              height: 64,
              background: "radial-gradient(circle at 30% 30%, #fff2b0, #d4af37 60%, #8b6914)",
              boxShadow:
                "0 0 22px rgba(255,215,0,0.55), inset 0 -3px 8px rgba(0,0,0,0.35), inset 0 3px 6px rgba(255,255,255,0.4)",
              border: "1px solid rgba(255,255,255,0.35)",
            }}
          >
            <Check size={30} strokeWidth={3} style={{ color: "#2a1a05" }} />
          </motion.div>

          <div className="flex items-center gap-2 mt-2">
            <span className="h-px w-10" style={{ background: "linear-gradient(to right, transparent, #ffd700)" }} />
            <span style={{ color: "#ffd700", fontSize: "0.6rem" }}>◆</span>
            <span className="h-px w-10" style={{ background: "linear-gradient(to left, transparent, #ffd700)" }} />
          </div>

          <p
            style={{
              fontFamily: "var(--font-script, serif)",
              fontSize: "clamp(1.8rem, 5vw, 2.4rem)",
              color: "#ffd700",
              lineHeight: 1.1,
              textShadow: "0 2px 10px rgba(0,0,0,0.7), 0 0 18px rgba(255,215,0,0.3)",
            }}
          >
            Thank You
          </p>

          <p
            className="wedding-caps"
            style={{
              fontSize: "0.65rem",
              color: "#f5e6c8",
              letterSpacing: "0.4em",
              fontWeight: 600,
              textShadow: "0 2px 6px rgba(0,0,0,0.7)",
            }}
          >
            Your RSVP is Received
          </p>

          <p
            className="italic text-center mt-1"
            style={{
              fontFamily: "var(--font-body, serif)",
              fontSize: "0.85rem",
              color: "#fff8e7",
              lineHeight: 1.6,
              maxWidth: "260px",
              textShadow: "0 2px 8px rgba(0,0,0,0.7)",
            }}
          >
            We are honoured by your presence and grateful for your wishes.
          </p>
        </motion.div>
      )}
    </div>
  );
}