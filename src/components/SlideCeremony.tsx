import { motion } from "framer-motion";

export function SlideCeremony() {
  return (
    <div
      className="clear-slide flex w-[min(86vw,520px)] flex-col items-center justify-center text-center"
      style={{ transform: "translateY(-3%)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-32 flex flex-col items-center gap-4"
      >
        <p className="wedding-caps text-[0.65rem]" style={{ color: "#5a4520" }}>
          With Joyful Hearts
        </p>
        <p
          className="italic"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "#3d2f12",
            lineHeight: "1.85",
            maxWidth: "300px",
            textShadow: "0 1px 2px rgba(255,250,235,0.45)",
          }}
        >
          We invite you to witness
          <br />
          the sacred union of
        </p>
      </motion.div>

      {/* Groom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-1 mt-5"
      >
        <p
          style={{
            fontFamily: "var(--font-script)",
            fontSize: "clamp(2.8rem, 6.5vw, 3.8rem)",
            color: "#7a5a24",
            lineHeight: "1.1",
            textShadow: "0 1px 3px rgba(255,250,235,0.45)",
          }}
        >
          Jikku Kuriakose
        </p>
        <p
          className="wedding-caps mt-1"
          style={{
            fontSize: "clamp(0.62rem, 1.4vw, 0.72rem)",
            color: "#5a4520",
          }}
        >
          Son of C. Kuriakose &amp; Jincy Kuriakose
        </p>
      </motion.div>

      {/* AND */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 my-3"
      >
        <span className="h-px w-10" style={{ background: "rgba(122,90,36,0.5)" }} />
        <span
          className="italic"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.1rem, 2.4vw, 1.4rem)",
            color: "#7a5a24",
            letterSpacing: "0.15em",
          }}
        >
          and
        </span>
        <span className="h-px w-10" style={{ background: "rgba(122,90,36,0.5)" }} />
      </motion.div>

      {/* Bride */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-1"
      >
        <p
          style={{
            fontFamily: "var(--font-script)",
            fontSize: "clamp(2.8rem, 6.5vw, 3.8rem)",
            color: "#7a5a24",
            lineHeight: "1.1",
            textShadow: "0 1px 3px rgba(255,250,235,0.45)",
          }}
        >
          Lena Joseph
        </p>
        <p
          className="wedding-caps mt-1"
          style={{
            fontSize: "clamp(0.62rem, 1.4vw, 0.72rem)",
            color: "#5a4520",
          }}
        >
          Daughter of Joseph K.K &amp; Binu Joseph
        </p>
      </motion.div>
    </div>
  );
}
