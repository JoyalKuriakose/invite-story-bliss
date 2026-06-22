import { motion } from "framer-motion";

export function SlideNames() {
  return (
    <div className="flex flex-col items-center justify-center px-6 text-center">
      
     

      {/* Names */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center"
        style={{
          fontFamily: "var(--font-script)",
          fontSize: "clamp(3rem, 13vw, 7rem)",
          lineHeight: 1.1,
          fontWeight: 400,
          color: "#f8f2ea",

          
        }}
      >
        Jikku  &amp; Lena
      </motion.h1>

      

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-10 tracking-[0.45em]"
        style={{
          fontSize: "clamp(0.72rem, 2vw, 1rem)",
          color: "rgba(255,248,240,0.9)",
          fontWeight: 300,
          letterSpacing: "0.42em",

          textShadow: `
            0 2px 10px rgba(0,0,0,0.65)
          `,
        }}
      >
        ARE GETTING MARRIED
      </motion.p>

      {/* Date */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-5"
        style={{
          fontSize: "clamp(0.7rem, 1.8vw, 0.9rem)",
          letterSpacing: "0.28em",
          color: "rgba(255,248,240,0.72)",

          textShadow: `
            0 2px 8px rgba(0,0,0,0.55)
          `,
        }}
      >
        TWENTY FOUR · AUGUST 
      </motion.p>
    </div>
  );
}