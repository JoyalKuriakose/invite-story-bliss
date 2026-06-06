// ============================================================
// 🖼️  BACKGROUND IMAGES — Change all slide backgrounds here.
// ============================================================
//
// To replace an image:
//   1. Drop your new image into `src/assets/` (e.g. my-photo.jpg)
//   2. Update the import below, e.g.:
//        import bgHero from "@/assets/my-photo.jpg";
//   3. Save. That's it — the slide will use the new image.
//
// You can also point to an external URL instead of an import:
//        hero: "https://example.com/my-photo.jpg",
// ============================================================

import bgHero from "@/assets/bg-hero.jpg";
import bgNames from "@/assets/bg-flowers.jpg";
import bgInvite from "@/assets/bg-invite.jpg";
import bgCeremony from "@/assets/bg-venue.jpg";
import bgRegistry from "@/assets/bg-registry.jpg";
import bgMessages from "@/assets/bg-messages.jpg";
import bgRsvp from "@/assets/bg-rsvp.jpg";

export const slideBackgrounds = {
  hero: bgHero,         // Slide 1 — Opening (Tap to open)
  names: bgNames,       // Slide 2 — Jikku & Lena
  invite: bgInvite,     // Slide 3 — Save the Date
  ceremony: bgCeremony, // Slide 4 — Venue / Location / Add to Calendar
  registry: bgRegistry, // Slide 5 — Registry (OMT)
  messages: bgMessages, // Slide 6 — Wishes for the couple
  rsvp: bgRsvp,         // Slide 7 — RSVP
};
