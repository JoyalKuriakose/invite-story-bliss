import { motion } from "framer-motion";

interface SlideHeroProps {
  onStart: () => void;
}

export function SlideHero({ onStart }: SlideHeroProps) {
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
