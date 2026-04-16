import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export function SlideRegistry() {
  return (
    <div className="flex flex-col items-center gap-8 max-w-sm">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-3"
      >
        <Gift size={28} className="text-wedding-gold" />
        <p className="text-xs tracking-[0.3em] uppercase text-wedding-gold/80 font-serif">
          Registry
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
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
