import { motion } from "framer-motion";

export function SlideCeremony() {
  return (
    <div className="clear-slide flex flex-col items-center justify-center gap-8 max-w-sm text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="font-serif text-sm italic leading-relaxed text-[#6b5b2e]"
      >
        "Two souls with but a single thought,
        <br />
        two hearts that beat as one."
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4"
      >
        <div className="h-px w-12 bg-white/60" />
        <p className="font-serif text-xs uppercase tracking-[0.3em] text-[#6b5b2e]">
          Together with their families
        </p>
        <p className="font-serif text-base tracking-wide text-[#6b5b2e]">
          The Najjar &amp; Kendirjian Families
        </p>
        <p className="font-serif text-xs uppercase tracking-[0.2em] text-[#6b5b2e]">
          request the honour of your presence
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
        className="rounded-lg border border-white/30 px-8 py-5"
      >
        <p className="mb-1 font-serif text-xs uppercase tracking-[0.3em] text-[#6b5b2e]">
          Save the Date
        </p>
        <p className="font-serif text-3xl text-[#6b5b2e] gold-glow">
          June 22, 2024
        </p>
      </motion.div>
    </div>
  );
}
