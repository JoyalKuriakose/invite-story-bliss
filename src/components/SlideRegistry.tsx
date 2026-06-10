import { motion } from "framer-motion";
import { Calendar, MapPin, CalendarPlus } from "lucide-react";
import { downloadWeddingIcs } from "@/lib/calendar";

export function SlideRegistry() {
  const openMaps = () => {
    window.open(
      "https://maps.app.goo.gl/x3ZrmJSKoFHFHLQ28?g_st=aw",
      "_blank"
    );
  };

  return (
    <div className="flex flex-col items-center gap-8 max-w-sm text-center px-4">
      {/* Heading */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xs tracking-[0.35em] uppercase font-serif font-bold"
        style={{
          color: "#ffffff",
          textShadow: "0 5px 10px rgba(0,0,0,0.85)",
        }}
      >
        The Ceremony
      </motion.p>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6"
      >
        {/* Date */}
        <div className="flex items-center gap-3">
          <Calendar
            size={25}
            style={{
              color: "#ffffff",
              filter: "drop-shadow(0 0 15px rgba(255,215,0,0.7))",
            }}
          />

          <span
            className="font-serif font-bold"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
            color: "#ffffff",
            fontWeight: "700",
            lineHeight: "1.5",
            textShadow: `
              0 2px 10px rgba(0,0,0,0.95),
              0 0 12px rgba(255,255,255,0.15)
              `,
              letterSpacing: "0.5px",
            }}
          >
            Monday, August 24, 2026
          </span>
        </div>

        {/* Time */}
        

          <span
            className="font-serif font-bold"
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.25rem)",
              color: "#ffffff",
              textShadow: "0 2px 8px rgba(0,0,0,0.95)",
              letterSpacing: "0.4px",
            }}
          >
            11:00 AM
          </span>
        

        {/* Divider */}
        <div
          className="h-px w-16"
          style={{
            background:
              "linear-gradient(to right, transparent, #ffd700, transparent)",
          }}
        />

       {/* Venue + Location with Icon */}
<div className="flex justify-center w-full">
  <div className="relative flex flex-col items-center text-center">
    
    {/* Map Icon */}
    <MapPin
      size={24}
      style={{
        color: "#ffd700",
        filter: "drop-shadow(0 0 6px rgba(255,215,0,0.7))",
        position: "absolute",
        left: "-34px",
        top: "8px",
      }}
    />

    {/* Venue */}
    <p
      className="font-serif"
      style={{
        fontSize: "clamp(1.5rem, 4vw, 2rem)",
        color: "#ffffff",
        fontWeight: "700",
        lineHeight: "1.5",
        textShadow: `
          0 2px 10px rgba(0,0,0,0.95),
          0 0 12px rgba(255,255,255,0.15)
        `,
      }}
    >
      St George Jacobite
      <br />
      Syrian Church
      <br />
      Ponpally
    </p>

    {/* Location */}
    <p
      className="font-serif tracking-wide mt-2"
      style={{
        fontSize: "1rem",
        color: "#f5e6c8",
        fontWeight: "600",
        textShadow: "0 2px 8px rgba(0,0,0,0.95)",
        letterSpacing: "0.5px",
      }}
    >
      Kottayam, Kerala
    </p>
  </div>
</div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 w-full"
      >
        {/* Location Button */}
        <button
          onClick={openMaps}
          className="flex items-center gap-2 rounded-full px-7 py-3 text-sm uppercase tracking-[0.18em] backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer font-serif font-bold"
          style={{
            background: "rgba(0,0,0,0.45)",
            border: "1px solid rgba(255,215,0,0.55)",
            color: "#ffffff",
            boxShadow: `
              0 0 12px rgba(255,215,0,0.25),
              0 2px 10px rgba(0,0,0,0.35)
            `,
          }}
        >
          <MapPin size={16} style={{ color: "#ffd700" }} />
          Location Map
        </button>

        {/* Calendar Button */}
        <button
          onClick={downloadWeddingIcs}
          className="flex items-center gap-2 rounded-full px-7 py-3 text-sm uppercase tracking-[0.18em] backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer font-serif font-bold"
          style={{
            background: "rgba(0,0,0,0.45)",
            border: "1px solid rgba(255,215,0,0.55)",
            color: "#ffffff",
            boxShadow: `
              0 0 12px rgba(255,215,0,0.25),
              0 2px 10px rgba(0,0,0,0.35)
            `,
          }}
        >
          <CalendarPlus size={16} style={{ color: "#ffd700" }} />
          Add to Calendar
        </button>
      </motion.div>
    </div>
  );
}