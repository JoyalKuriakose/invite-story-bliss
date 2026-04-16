import { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const INITIAL_GUESTS = [
  { name: "Guest Name 1", attending: false },
  { name: "Guest Name 2", attending: false },
  { name: "Guest Name 3", attending: false },
];

export function SlideRSVP() {
  const [guests, setGuests] = useState(INITIAL_GUESTS);

  const toggleGuest = (index: number) => {
    setGuests((prev) =>
      prev.map((g, i) => (i === index ? { ...g, attending: !g.attending } : g))
    );
  };

  const totalAttending = guests.filter((g) => g.attending).length;

  return (
    <div className="flex flex-col items-center gap-6 max-w-sm w-full">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xs tracking-[0.3em] uppercase text-wedding-gold/80 font-serif"
      >
        RSVP
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full flex flex-col gap-3"
      >
        {guests.map((guest, i) => (
          <div
            key={i}
            className="gold-border rounded-lg px-5 py-4 bg-wedding-gold/5 backdrop-blur-sm flex items-center justify-between"
          >
            <span className="font-serif text-sm text-wedding-cream">
              {guest.name}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  if (!guest.attending) toggleGuest(i);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-serif tracking-wider uppercase transition-all cursor-pointer ${
                  guest.attending
                    ? "bg-wedding-gold/30 text-wedding-cream gold-border"
                    : "bg-wedding-gold/5 text-wedding-cream/50 gold-border"
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  if (guest.attending) toggleGuest(i);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-serif tracking-wider uppercase transition-all cursor-pointer ${
                  !guest.attending
                    ? "bg-wedding-cream/10 text-wedding-cream/70 border border-wedding-cream/20"
                    : "bg-wedding-gold/5 text-wedding-cream/50 gold-border"
                }`}
              >
                No
              </button>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="gold-border rounded-lg px-6 py-3 bg-wedding-gold/5 backdrop-blur-sm"
      >
        <p className="font-serif text-sm text-wedding-cream">
          Total Guests Attending:{" "}
          <span className="text-wedding-gold text-lg font-bold">{totalAttending}</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-2 mt-2"
      >
        <p className="text-xs text-wedding-cream/50 font-serif">
          For RSVP updates, contact us
        </p>
        <a
          href="tel:+96100000000"
          className="flex items-center gap-2 text-wedding-gold font-serif text-sm hover:underline"
        >
          <Phone size={14} />
          +961 00 000 000
        </a>
      </motion.div>
    </div>
  );
}
