import { motion } from "framer-motion";

export function SlideInvite() {
  return (
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
            className="font-serif text-[16px] leading-7 text-[#6b5b2e] gold-glow"
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
            className="mt-5 font-serif text-[18px] tracking-wide text-[#6b5b2e]"
          >
            — സങ്കീർത്തനങ്ങൾ 118:23
          </motion.p>

        </motion.div>

      </div>
    </div>
  );
}