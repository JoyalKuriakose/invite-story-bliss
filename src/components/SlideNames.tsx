import { motion } from "framer-motion";

export function SlideNames() {
  return (
    <div className="flex flex-col items-center gap-7 px-4">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="wedding-caps text-[0.72rem] text-wedding-ivory/85"
        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
      >
        The Wedding Of
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <div className="flex items-center gap-4 mb-2">
          <span className="h-px w-12 bg-wedding-champagne/60" />
          <span className="ornament-dot" />
          <span className="h-px w-12 bg-wedding-champagne/60" />
        </div>

        <h1
          className="wedding-name leading-[1] text-center"
          style={{ fontSize: "clamp(4rem, 14vw, 7.5rem)" }}
        >
          Jikku
        </h1>

        <p
          className="wedding-display text-wedding-ivory/90 italic -my-1"
          style={{ fontSize: "clamp(1.1rem, 3vw, 1.4rem)" }}
        >
          &amp;
        </p>

        <h1
          className="wedding-name leading-[1] text-center"
          style={{ fontSize: "clamp(4rem, 14vw, 7.5rem)" }}
        >
          Lena
        </h1>

        <div className="flex items-center gap-4 mt-3">
          <span className="h-px w-12 bg-wedding-champagne/60" />
          <span className="ornament-dot" />
          <span className="h-px w-12 bg-wedding-champagne/60" />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="wedding-caps text-[0.7rem] text-wedding-ivory/75"
        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
      >
        Twenty&nbsp;Four · August · MMXXVI
      </motion.p>
    </div>
  );
}
