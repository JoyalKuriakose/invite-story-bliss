import { motion } from "framer-motion";

export function SlideNames() {
  return (
    <div className="flex flex-col items-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <div className="w-16 h-px bg-wedding-gold/40 mb-8" />
        <h1 className="font-script text-6xl sm:text-7xl text-wedding-cream gold-glow leading-tight">
          Jikku & Lena
        </h1>
        <div className="w-16 h-px bg-wedding-gold/40 mt-8" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-lg tracking-[0.25em] uppercase text-wedding-cream/80 font-serif"
      >
        Are Getting Married
      </motion.p>
    </div>
  );
}
