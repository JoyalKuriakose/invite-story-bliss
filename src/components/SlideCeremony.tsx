import { motion } from "framer-motion";
import { Calendar, MapPin, CalendarPlus } from "lucide-react";
import { downloadWeddingIcs } from "@/lib/calendar";

export function SlideCeremony() {
  const openMaps = () => {
    window.open("https://www.google.com/maps/search/Bois+de+Roses+Faitroun+Lebanon", "_blank");
  };

  return (
    <div className="flex flex-col items-center gap-8 max-w-sm">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xs tracking-[0.3em] uppercase text-wedding-gold/80 font-serif"
      >
        The Ceremony
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6"
      >
        <div className="flex items-center gap-3 text-wedding-cream">
          <Calendar size={20} className="text-wedding-gold" />
          <span className="font-serif text-lg">Saturday, June 22, 2024</span>
        </div>

        <div className="flex items-center gap-3 text-wedding-cream">
          <MapPin size={20} className="text-wedding-gold" />
          <span className="font-serif text-lg">6:00 PM</span>
        </div>

        <div className="w-12 h-px bg-wedding-gold/40" />

        <p className="font-serif text-2xl text-wedding-cream gold-glow">
          Bois de Roses
        </p>
        <p className="text-sm text-wedding-cream/70 font-serif tracking-wide">
          Faitroun, Lebanon
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col gap-3 w-full items-center"
      >
        <button
          onClick={openMaps}
          className="gold-border rounded-full px-7 py-3 bg-wedding-gold/10 backdrop-blur-sm text-wedding-cream font-serif text-sm tracking-[0.15em] uppercase hover:bg-wedding-gold/20 transition-colors cursor-pointer flex items-center gap-2"
        >
          <MapPin size={16} className="text-wedding-gold" />
          Location Map
        </button>
        <button
          onClick={downloadWeddingIcs}
          className="gold-border rounded-full px-7 py-3 bg-wedding-gold/10 backdrop-blur-sm text-wedding-cream font-serif text-sm tracking-[0.15em] uppercase hover:bg-wedding-gold/20 transition-colors cursor-pointer flex items-center gap-2"
        >
          <CalendarPlus size={16} className="text-wedding-gold" />
          Add to Calendar
        </button>
      </motion.div>
    </div>
  );
}
