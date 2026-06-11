import { motion } from "framer-motion";
import { useEffect } from "react";
import { slideBackgrounds } from "@/config/backgrounds";

interface SlideHeroProps {
  onStart: () => void;
}

export function SlideHero({ onStart }: SlideHeroProps) {
  useEffect(() => {
    const preventScroll = (e: Event) => e.preventDefault();
    document.body.style.overflow = "hidden";
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  const handleStart = () => {
    document.body.style.overflow = "auto";
    onStart();
  };

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={slideBackgrounds.heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="flex flex-col items-center gap-3"
        >
          <span className="wedding-caps text-[0.7rem] text-wedding-ivory/85">
            Together with their families
          </span>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-wedding-champagne/70" />
            <span className="ornament-dot" />
            <span className="h-px w-10 bg-wedding-champagne/70" />
          </div>
        </motion.div>

        <motion.button
          onClick={handleStart}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.55, type: "spring", stiffness: 160 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex h-44 w-44 items-center justify-center rounded-full"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(201,169,110,0.18), rgba(0,0,0,0.15) 70%)",
            border: "1px solid rgba(201,169,110,0.6)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.45), inset 0 0 30px rgba(201,169,110,0.12)",
          }}
        >
          <div className="absolute inset-0 rounded-full border border-wedding-champagne/30 animate-ping" />
          <span
            className="text-7xl transition-transform duration-300 group-hover:scale-110 shimmer-text"
            style={{ fontFamily: "var(--font-script)", lineHeight: 1 }}
          >
            J&nbsp;L
          </span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="wedding-caps text-[0.65rem] text-wedding-ivory/70">
            Tap to open
          </p>
          <span className="h-3 w-px bg-wedding-ivory/40" />
        </motion.div>
      </div>
    </section>
  );
}
