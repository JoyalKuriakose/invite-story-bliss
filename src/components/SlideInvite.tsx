import { motion } from "framer-motion";

export function SlideInvite() {
  return (
<<<<<<< HEAD
    <div className="clear-slide flex h-full w-full items-center justify-center px-6">

      {/* Content */}
      <div className="relative flex h-full w-full items-center justify-center">

        {/* Bible Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute top-[32%] flex max-w-70 flex-col items-center text-center z-10"
        >

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="font-serif text-[16px] leading-7 text-white gold-glow"
          >
            “ഇതു യഹോവയാൽ സംഭവിച്ചു;
            <br />
            നമ്മുടെ ദൃഷ്ടിയിൽ
            <br />
            ആശ്ചര്യം ആയിരിക്കുന്നു.”
          </motion.p>

          {/* Verse */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-5 font-serif text-[18px] tracking-wide text-white"
          >
            — സങ്കീർത്തനങ്ങൾ 118:23
          </motion.p>

        </motion.div>

      </div>
    </div>
  );
}
=======
    <div className="flex flex-col items-center gap-8 max-w-sm">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-wedding-cream/60 italic font-serif text-sm leading-relaxed"
      >
        "Two souls with but a single thought,
        <br />
        two hearts that beat as one."
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-12 h-px bg-wedding-gold/40" />
        <p className="text-xs tracking-[0.3em] uppercase text-wedding-cream/70 font-serif">
          Together with their families
        </p>
        <p className="font-serif text-base text-wedding-cream tracking-wide">
          The Najjar & Kendirjian Families
        </p>
        <p className="text-xs tracking-[0.2em] uppercase text-wedding-cream/70 font-serif">
          request the honour of your presence
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
        className="gold-border rounded-lg px-8 py-5 bg-wedding-gold/5 backdrop-blur-sm"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-wedding-gold/80 font-serif mb-1">
          Save the Date
        </p>
        <p className="font-serif text-3xl text-wedding-cream gold-glow">
          June 22, 2024
        </p>
      </motion.div>
    </div>
  );
}
>>>>>>> aaad2adda20dce9e51242ee966b5352f86358c31
