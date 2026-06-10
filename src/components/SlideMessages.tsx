import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function SlideMessages() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 max-w-md text-center px-6">

      {/* Heading */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xs tracking-[0.35em] uppercase font-serif font-bold"
        style={{
          color: "#ffffff",
          textShadow: "0 2px 10px rgba(0,0,0,0.85)",
        }}
      >
        A Note From Us
      </motion.p>

      {/* Heart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Heart
          size={36}
          style={{
            color: "#ffd700",
            filter: "drop-shadow(0 0 10px rgba(255,215,0,0.6))",
          }}
        />
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-5"
      >
        <p
          className="font-serif"
          style={{
            fontSize: "clamp(1.05rem, 2.5vw, 1.3rem)",
            color: "#ffffff",
            lineHeight: "2",
            textShadow: "0 2px 10px rgba(0,0,0,0.95)",
          }}
        >
          With immense joy in our hearts,
          <br />
          we warmly invite our beloved family
          <br />
          and dear friends to celebrate this
          <br />
          beautiful beginning with us.
        </p>

        <p
          className="font-serif italic"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "#f5e6c8",
            lineHeight: "1.9",
            textShadow: "0 2px 8px rgba(0,0,0,0.95)",
          }}
        >
          Your love, blessings, and presence
          <br />
          will make our special day even more meaningful.
        </p>

        <p
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(2rem, 5vw, 2.8rem)",
            color: "#ffd700",
            textShadow: `
              0 2px 8px rgba(0,0,0,0.8),
              0 0 12px rgba(255,215,0,0.35)
            `,
          }}
        >
          Jikku & Lena
        </p>
      </motion.div>
    </div>
  );
}