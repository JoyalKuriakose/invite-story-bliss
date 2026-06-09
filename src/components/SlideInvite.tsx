import { motion } from "framer-motion";

export function SlideInvite() {
  return (
    <div className="clear-slide flex h-full w-full items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex w-[min(78vw,360px)] flex-col items-center text-center"
        style={{ transform: "translateY(-8%)" }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-serif italic leading-[1.9] text-[#6b5b2e]"
          style={{ fontSize: "clamp(0.95rem, 2.2vw, 1.15rem)" }}
        >
          “ഇതു യഹോവയാൽ സംഭവിച്ചു;
          <br />
          നമ്മുടെ ദൃഷ്ടിയിൽ
          <br />
          ആശ്ചര്യം ആയിരിക്കുന്നു.”
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="my-4 h-px w-16 bg-[#6b5b2e]/60"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-serif tracking-[0.15em] text-[#6b5b2e]"
          style={{ fontSize: "clamp(0.8rem, 1.6vw, 0.95rem)" }}
        >
          — സങ്കീർത്തനങ്ങൾ 118:23
        </motion.p>
      </motion.div>
    </div>
  );
}
