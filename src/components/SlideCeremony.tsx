import { motion } from "framer-motion";

export function SlideCeremony() {
  return (
    <div
      className="clear-slide flex w-[min(84vw,440px)] flex-col items-center justify-center gap-5 text-center"
      style={{ transform: "translateY(-4%)" }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="font-serif font-semibold italic leading-relaxed text-[#3d3115] drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]"
        style={{ fontSize: "clamp(1.05rem, 2.6vw, 1.25rem)" }}
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
        className="h-[2px] w-16 bg-[#3d3115]/70"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-2"
      >
        <p
          className="font-serif font-semibold uppercase tracking-[0.3em] text-[#3d3115]"
          style={{ fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)" }}
        >
          Together with their families
        </p>
        <p
          className="font-serif font-bold tracking-wide text-[#3d3115]"
          style={{ fontSize: "clamp(1.15rem, 2.6vw, 1.4rem)" }}
        >
          The Najjar &amp; Kendirjian Families
        </p>
        <p
          className="font-serif font-semibold uppercase tracking-[0.2em] text-[#3d3115]"
          style={{ fontSize: "clamp(0.75rem, 1.6vw, 0.9rem)" }}
        >
          request the honour of your presence
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        viewport={{ once: true }}
        className="rounded-lg border-2 border-[#3d3115]/60 px-6 py-3"
      >
        <p
          className="mb-1 font-serif font-semibold uppercase tracking-[0.3em] text-[#3d3115]"
          style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)" }}
        >
          Save the Date
        </p>
        <p
          className="font-serif font-bold text-[#3d3115]"
          style={{ fontSize: "clamp(1.85rem, 4.5vw, 2.4rem)" }}
        >
          June 22, 2024
        </p>
      </motion.div>
    </div>
  );
}
