import { motion } from "framer-motion";
<<<<<<< HEAD
import { Calendar, MapPin, CalendarPlus } from "lucide-react";
import { downloadWeddingIcs } from "@/lib/calendar";

export function SlideRegistry() {

  const openMaps = () => {
    window.open(
      "https://www.google.com/maps/search/Bois+de+Roses+Faitroun+Lebanon",
      "_blank"
    );
  };

  return (
    <div className="flex flex-col items-center gap-8 max-w-sm">

      {/* Heading */}
      <motion.p
=======
import { Gift } from "lucide-react";

export function SlideRegistry() {
  return (
    <div className="flex flex-col items-center gap-8 max-w-sm">
      <motion.div
>>>>>>> aaad2adda20dce9e51242ee966b5352f86358c31
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
<<<<<<< HEAD
        className="text-xs tracking-[0.3em] uppercase text-wedding-gold/80 font-serif"
      >
        The Ceremony
      </motion.p>

      {/* Ceremony Details */}
      <motion.div
=======
        className="flex flex-col items-center gap-3"
      >
        <Gift size={28} className="text-wedding-gold" />
        <p className="text-xs tracking-[0.3em] uppercase text-wedding-gold/80 font-serif">
          Registry
        </p>
      </motion.div>

      <motion.p
>>>>>>> aaad2adda20dce9e51242ee966b5352f86358c31
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
<<<<<<< HEAD
        className="flex flex-col items-center gap-6"
      >

        {/* Date */}
        <div className="flex items-center gap-3 text-wedding-cream">
          <Calendar
            size={20}
            className="text-wedding-gold"
          />
          <span className="font-serif text-lg">
            Saturday, June 22, 2024
          </span>
        </div>

        {/* Time */}
        <div className="flex items-center gap-3 text-wedding-cream">
          <MapPin
            size={20}
            className="text-wedding-gold"
          />
          <span className="font-serif text-lg">
            6:00 PM
          </span>
        </div>

        {/* Divider */}
        <div className="h-px w-12 bg-wedding-gold/40" />

        {/* Venue */}
        <p className="font-serif text-2xl text-wedding-cream gold-glow">
          Bois de Roses
        </p>

        <p className="text-sm text-wedding-cream/70 font-serif tracking-wide">
          Faitroun, Lebanon
        </p>

      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-3 w-full"
      >

        {/* Google Maps */}
        <button
          onClick={openMaps}
          className="gold-border flex items-center gap-2 rounded-full bg-wedding-gold/10 px-7 py-3 text-sm uppercase tracking-[0.15em] text-wedding-cream backdrop-blur-sm transition-colors hover:bg-wedding-gold/20 cursor-pointer font-serif"
        >
          <MapPin
            size={16}
            className="text-wedding-gold"
          />
          Location Map
        </button>

        {/* Calendar */}
        <button
          onClick={downloadWeddingIcs}
          className="gold-border flex items-center gap-2 rounded-full bg-wedding-gold/10 px-7 py-3 text-sm uppercase tracking-[0.15em] text-wedding-cream backdrop-blur-sm transition-colors hover:bg-wedding-gold/20 cursor-pointer font-serif"
        >
          <CalendarPlus
            size={16}
            className="text-wedding-gold"
          />
          Add to Calendar
        </button>

      </motion.div>

    </div>
  );
}
=======
        className="font-serif text-base text-wedding-cream/80 leading-relaxed text-center"
      >
        Your presence is the greatest gift of all.
        However, if you wish to honour us with a gift,
        a contribution towards our future would be deeply appreciated.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        className="gold-border rounded-lg px-8 py-5 bg-wedding-gold/5 backdrop-blur-sm flex flex-col items-center gap-2"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-wedding-gold/80 font-serif">
          OMT Transfer
        </p>
        <p className="font-serif text-2xl text-wedding-cream gold-glow tracking-wider">
          OMT #
        </p>
        <p className="text-xs text-wedding-cream/50 font-serif">
          Contact us for transfer details
        </p>
      </motion.div>
    </div>
  );
}
>>>>>>> aaad2adda20dce9e51242ee966b5352f86358c31
