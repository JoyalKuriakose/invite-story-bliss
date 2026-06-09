import { motion } from "framer-motion";
<<<<<<< HEAD
import { useEffect } from "react";
import { slideBackgrounds } from "@/config/backgrounds";
=======
>>>>>>> aaad2adda20dce9e51242ee966b5352f86358c31

interface SlideHeroProps {
  onStart: () => void;
}

export function SlideHero({ onStart }: SlideHeroProps) {
<<<<<<< HEAD

  // Lock scroll while this slide is active
  useEffect(() => {
    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("wheel", preventScroll, {
      passive: false,
    });

    window.addEventListener("touchmove", preventScroll, {
      passive: false,
    });

    return () => {
      document.body.style.overflow = "auto";

      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  // Unlock + Move Next Slide
  const handleStart = () => {
    document.body.style.overflow = "auto";
    onStart();
  };

  return (
    <section className="relative w-screen h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src={slideBackgrounds.heroVideo}
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Main Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-8 px-4 text-center">

        {/* Invitation Text */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-serif text-sm uppercase tracking-[0.35em] text-white"
        >
          YOU&apos;RE INVITED
        </motion.p>

        {/* JL Button */}
        <motion.button
          onClick={handleStart}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.6,
            type: "spring",
            stiffness: 180,
          }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex h-40 w-40 items-center justify-center rounded-full border border-[#d4af37]/70 bg-black/20 backdrop-blur-md shadow-2xl"
        >

          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-full border border-[#d4af37]/40 animate-ping" />

          {/* Initials */}
          <span className="font-script text-6xl text-[#f5d77a] transition-transform duration-300 group-hover:scale-110">
            JL
          </span>
        </motion.button>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xs tracking-[0.25em] text-white/70"
        >
          Tap to continue
        </motion.p>

      </div>
    </section>
  );
}
=======
  return (
    <div className="flex flex-col items-center gap-8">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-sm tracking-[0.3em] uppercase text-wedding-cream/70 font-serif"
      >
        You're Invited
      </motion.p>

      <motion.button
        onClick={onStart}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        whileTap={{ scale: 0.95 }}
        className="relative h-36 w-36 rounded-full gold-border bg-wedding-gold/10 backdrop-blur-sm flex items-center justify-center cursor-pointer group"
      >
        <div className="absolute inset-0 rounded-full gold-border pulse-ring" />
        <span className="font-script text-5xl text-wedding-gold gold-glow group-hover:scale-110 transition-transform duration-300">
          JL
        </span>
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-xs tracking-[0.2em] text-wedding-cream/50 font-serif"
      >
        Tap to open
      </motion.p>
    </div>
  );
}
>>>>>>> aaad2adda20dce9e51242ee966b5352f86358c31
