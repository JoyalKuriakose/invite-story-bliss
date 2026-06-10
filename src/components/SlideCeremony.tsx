import { motion } from "framer-motion";

export function SlideCeremony() {
  return (
    <div
      className="clear-slide flex w-[min(86vw,520px)] flex-col items-center justify-center text-center"
      style={{ transform: "translateY(-3%)" }}
    >
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-35 flex justify-center"
      >
        <p
          className="font-serif leading-relaxed font-semibold text-center"
          style={{
            fontSize: "clamp(1.05rem, 2.6vw, 1.3rem)",
            color: "#5a4520",
            textShadow: "0 2px 4px rgba(0,0,0,0.18)",
            letterSpacing: "0.3px",
            maxWidth: "280px",
            lineHeight: "1.9",
          }}
        >
          With hearts full of gratitude & joy,
          <br />
          We invite you to witness the sacred union of
        </p>
      </motion.div>

      {/* Groom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-1 mt-6"
      >
        <p
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(2.5rem, 5.5vw, 3.4rem)",
            fontWeight: "700",
            color: "#d4af37",
            textShadow: `
              0 2px 4px rgba(0,0,0,0.35),
              0 0 8px rgba(212,175,55,0.35),
              0 0 18px rgba(212,175,55,0.25)
            `,
            letterSpacing: "1px",
            lineHeight: "1.1",
          }}
        >
          Jikku Kuriakose
        </p>

        <p
          className="font-serif font-semibold"
          style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
            color: "#5a4520",
            textShadow: "0 1px 3px rgba(0,0,0,0.18)",
            letterSpacing: "0.3px",
            lineHeight: "1.6",
          }}
        >
          S/o. C. Kuriakose & Jincy Kuriakose
        </p>
      </motion.div>

      {/* AND */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        className="font-serif italic my-4 font-bold"
        style={{
          fontSize: "clamp(1.15rem, 2.3vw, 1.5rem)",
          color: "#7a5a24",
          textShadow: "0 2px 4px rgba(0,0,0,0.18)",
          letterSpacing: "1px",
        }}
      >
        and
      </motion.p>

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
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(2.5rem, 5.5vw, 3.4rem)",
            fontWeight: "700",
            color: "#d4af37",
            textShadow: `
              0 2px 4px rgba(0,0,0,0.35),
              0 0 8px rgba(212,175,55,0.35),
              0 0 18px rgba(212,175,55,0.25)
            `,
            letterSpacing: "1px",
            lineHeight: "1.1",
          }}
        >
          Lena Joseph
        </p>

        <p
          className="font-serif font-semibold"
          style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
            color: "#5a4520",
            textShadow: "0 1px 3px rgba(0,0,0,0.18)",
            letterSpacing: "0.3px",
            lineHeight: "1.6",
          }}
        >
          D/o. Joseph K.K & Binu Joseph
        </p>
      </motion.div>
    </div>
  );
}