import { motion } from "framer-motion";
import { MapPin, CalendarPlus } from "lucide-react";

export function SlideRegistry() {
  const openMaps = () =>
    window.open("https://maps.app.goo.gl/x3ZrmJSKoFHFHLQ28?g_st=aw", "_blank");

  const addToGoogleCalendar = () => {
    const url =
      "https://calendar.google.com/calendar/render?action=TEMPLATE" +
      "&text=Jikku+%26+Lena+Wedding+Ceremony" +
      "&dates=20260824T053000Z/20260824T083000Z" +
      "&details=Wedding+Ceremony" +
      "&location=St+George+Jacobite+Syrian+Church+Ponpally,+Kottayam,+Kerala";
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col items-center gap-7 max-w-sm text-center px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-3"
      >
        <p
          className="wedding-caps text-[0.7rem] text-wedding-ivory"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
        >
          The Ceremony
        </p>
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-wedding-champagne/70" />
          <span className="ornament-dot" />
          <span className="h-px w-10 bg-wedding-champagne/70" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-5"
      >
        {/* Date — editorial display */}
        <div className="flex flex-col items-center gap-1">
          <p
            className="wedding-caps text-[0.65rem] text-wedding-cream/80"
            style={{ textShadow: "0 2px 6px rgba(0,0,0,0.8)" }}
          >
            Monday
          </p>
          <p
            className="wedding-display text-wedding-ivory leading-none"
            style={{
              fontSize: "clamp(2.6rem, 7vw, 3.6rem)",
              textShadow: "0 2px 10px rgba(0,0,0,0.85)",
            }}
          >
            24 · 08 · 2026
          </p>
          <p
            className="wedding-caps text-[0.68rem] text-wedding-champagne mt-2"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.85)" }}
          >
            Eleven O&apos;Clock in the Morning
          </p>
        </div>

        <div className="gold-rule w-24" />

        {/* Venue */}
        <div className="flex flex-col items-center gap-1">
          <p
            className="wedding-caps text-[0.6rem] text-wedding-cream/80"
            style={{ textShadow: "0 2px 6px rgba(0,0,0,0.8)" }}
          >
            At the
          </p>
          <p
            className="wedding-display text-wedding-ivory"
            style={{
              fontSize: "clamp(1.3rem, 3.5vw, 1.7rem)",
              lineHeight: "1.3",
              textShadow: "0 2px 10px rgba(0,0,0,0.85)",
            }}
          >
            St George Jacobite
            <br />
            Syrian Church · Ponpally
          </p>
          <p
            className="wedding-caps text-[0.65rem] text-wedding-champagne mt-2"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.85)" }}
          >
            Kottayam · Kerala
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-3 w-full mt-2"
      >
        <button
          onClick={openMaps}
          className="flex items-center gap-2 rounded-full px-7 py-3 wedding-caps text-[0.65rem] transition-all duration-300 hover:scale-[1.03] cursor-pointer"
          style={{
            background: "rgba(10,8,4,0.4)",
            border: "1px solid rgba(201,169,110,0.55)",
            color: "#f5f0e6",
            backdropFilter: "blur(6px)",
            boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
          }}
        >
          <MapPin size={14} style={{ color: "#c9a96e" }} />
          View Location
        </button>

        <button
          onClick={addToGoogleCalendar}
          className="flex items-center gap-2 rounded-full px-7 py-3 wedding-caps text-[0.65rem] transition-all duration-300 hover:scale-[1.03] cursor-pointer"
          style={{
            background: "rgba(10,8,4,0.4)",
            border: "1px solid rgba(201,169,110,0.55)",
            color: "#f5f0e6",
            backdropFilter: "blur(6px)",
            boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
          }}
        >
          <CalendarPlus size={14} style={{ color: "#c9a96e" }} />
          Add to Calendar
        </button>
      </motion.div>
    </div>
  );
}
