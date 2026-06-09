import { motion } from "framer-motion";

export function SlideCeremony() {
  return (
    <div
      className="clear-slide flex w-[min(80vw,380px)] flex-col items-center justify-center gap-5 text-center"
      style={{ transform: "translateY(-6%)" }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="font-serif italic leading-relaxed text-[#6b5b2e]"
        style={{ fontSize: "clamp(0.85rem, 1.8vw, 1rem)" }}
      >
        "Two souls with but a single thought,
        <br />
        two hearts that beat as one."
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="h-px w-14 bg-[#6b5b2e]/60"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-2"
      >
        <p
          className="font-serif uppercase tracking-[0.3em] text-[#6b5b2e]"
          style={{ fontSize: "clamp(0.6rem, 1.3vw, 0.75rem)" }}
        >
          Together with their families
        </p>
        <p
          className="font-serif tracking-wide text-[#6b5b2e]"
          style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)" }}
        >
          The Najjar &amp; Kendirjian Families
        </p>
        <p
          className="font-serif uppercase tracking-[0.2em] text-[#6b5b2e]"
          style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.7rem)" }}
        >
          request the honour of your presence
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        viewport={{ once: true }}
        className="rounded-lg border border-[#6b5b2e]/40 px-6 py-3"
      >
        <p
          className="mb-1 font-serif uppercase tracking-[0.3em] text-[#6b5b2e]"
          style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.7rem)" }}
        >
          Save the Date
        </p>
        <p
          className="font-serif text-[#6b5b2e]"
          style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)" }}
        >
          June 22, 2024
        </p>
      </motion.div>
    </div>
  );
}
