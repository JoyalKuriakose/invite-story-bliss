import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Loader2, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Rsvp = {
  id: string;
  name: string;
  attending: boolean;
  guests: number;
};

export function SlideRSVP() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [guests, setGuests] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rsvps, setRsvps] = useState<Rsvp[]>([]);

  const load = async () => {
    const { data } = await supabase
      .from("rsvps")
      .select("id,name,attending,guests")
      .order("created_at", { ascending: false });
    if (data) setRsvps(data as Rsvp[]);
  };

  useEffect(() => {
    load();
    const channel = supabase
      .channel("rsvps-changes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "rsvps" },
        () => load(),
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const submit = async () => {
    setError(null);
    const trimmed = name.trim();
    if (!trimmed || attending === null) {
      setError("Please enter your name and select Yes or No.");
      return;
    }
    setSubmitting(true);
    const { error: insertError } = await supabase.from("rsvps").insert({
      name: trimmed.slice(0, 100),
      attending,
      guests: attending ? guests : 0,
    });
    setSubmitting(false);
    if (insertError) {
      setError("Could not submit. Please try again.");
      return;
    }
    setSubmitted(true);
  };

  const totalAttending = rsvps
    .filter((r) => r.attending)
    .reduce((sum, r) => sum + (r.guests || 1), 0);

  return (
    <div className="flex flex-col items-center gap-5 max-w-sm w-full">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xs tracking-[0.3em] uppercase text-wedding-gold/80 font-serif"
      >
        RSVP
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
            className="gold-border rounded-lg px-4 py-3 bg-wedding-gold/5 backdrop-blur-sm font-serif text-sm text-wedding-cream placeholder:text-wedding-cream/40 focus:outline-none focus:bg-wedding-gold/10"
          />

          <div className="flex gap-2">
            <button
              onClick={() => setAttending(true)}
              className={`flex-1 px-4 py-3 rounded-lg text-xs font-serif tracking-wider uppercase transition-all ${
                attending === true
                  ? "bg-wedding-gold/30 text-wedding-cream gold-border"
                  : "bg-wedding-gold/5 text-wedding-cream/60 gold-border"
              }`}
            >
              Joyfully Accept
            </button>
            <button
              onClick={() => setAttending(false)}
              className={`flex-1 px-4 py-3 rounded-lg text-xs font-serif tracking-wider uppercase transition-all ${
                attending === false
                  ? "bg-wedding-cream/20 text-wedding-cream border border-wedding-cream/40"
                  : "bg-wedding-gold/5 text-wedding-cream/60 gold-border"
              }`}
            >
              Regretfully Decline
            </button>
          </div>

          {attending && (
            <div className="gold-border rounded-lg px-4 py-3 bg-wedding-gold/5 backdrop-blur-sm flex items-center justify-between">
              <span className="font-serif text-xs text-wedding-cream/80">
                Number of guests
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  className="w-7 h-7 rounded-full gold-border text-wedding-gold"
                >
                  −
                </button>
                <span className="font-serif text-base text-wedding-cream w-4 text-center">
                  {guests}
                </span>
                <button
                  onClick={() => setGuests((g) => Math.min(10, g + 1))}
                  className="w-7 h-7 rounded-full gold-border text-wedding-gold"
                >
                  +
                </button>
              </div>
            </div>
          )}

          {error && (
            <p className="text-xs text-red-300/90 font-serif">{error}</p>
          )}

          <button
            onClick={submit}
            disabled={submitting}
            className="gold-border rounded-full px-6 py-3 bg-wedding-gold/20 backdrop-blur-sm text-wedding-cream font-serif text-sm tracking-[0.15em] uppercase hover:bg-wedding-gold/30 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {submitting ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              "Send RSVP"
            )}
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="gold-border rounded-lg px-6 py-5 bg-wedding-gold/10 backdrop-blur-sm flex flex-col items-center gap-2 w-full"
        >
          <Check size={28} className="text-wedding-gold" />
          <p className="font-serif text-base text-wedding-cream">
            Thank you!
          </p>
          <p className="text-xs text-wedding-cream/70 font-serif text-center">
            Your response has been received.
          </p>
        </motion.div>
      )}

      <div className="gold-border rounded-lg px-5 py-2 bg-wedding-gold/5 backdrop-blur-sm">
        <p className="font-serif text-xs text-wedding-cream">
          Total attending:{" "}
          <span className="text-wedding-gold text-base font-bold">
            {totalAttending}
          </span>
        </p>
      </div>

      <a
        href="tel:+96100000000"
        className="flex items-center gap-2 text-wedding-gold/90 font-serif text-xs hover:underline"
      >
        <Phone size={12} />
        +961 00 000 000
      </a>
    </div>
  );
}
