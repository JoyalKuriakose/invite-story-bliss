import { motion } from "framer-motion";

export function SlideInvite() {
  return (
    <div className="clear-slide flex h-full w-full items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex w-[min(82vw,420px)] flex-col items-center text-center"
        style={{ transform: "translateY(-6%)" }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-serif font-semibold italic leading-[1.85] text-[#3d3115] drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]"
          style={{ fontSize: "clamp(1.15rem, 3.2vw, 1.45rem)" }}
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
          className="my-5 h-[2px] w-20 bg-[#3d3115]/70"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-serif font-semibold tracking-[0.18em] text-[#3d3115]"
          style={{ fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)" }}
        >
          — സങ്കീർത്തനങ്ങൾ 118:23
        </motion.p>
      </motion.div>
    </div>
  );
}
