import { createFileRoute } from "@tanstack/react-router";
import { useRef, useCallback } from "react";
import { WeddingSlide } from "@/components/WeddingSlide";
import { SlideHero } from "@/components/SlideHero";
import { SlideNames } from "@/components/SlideNames";
import { SlideInvite } from "@/components/SlideInvite";
import { SlideCeremony } from "@/components/SlideCeremony";
import { SlideRegistry } from "@/components/SlideRegistry";
import { SlideRSVP } from "@/components/SlideRSVP";
import bgHero from "@/assets/bg-hero.jpg";
import bgFlowers from "@/assets/bg-flowers.jpg";
import bgInvite from "@/assets/bg-invite.jpg";
import bgVenue from "@/assets/bg-venue.jpg";
import bgRegistry from "@/assets/bg-registry.jpg";
import bgRsvp from "@/assets/bg-rsvp.jpg";

export const Route = createFileRoute("/")({
  component: WeddingInvitation,
  head: () => ({
    meta: [
      { title: "Jikku & Lena — Wedding Invitation" },
      { name: "description", content: "You're invited to celebrate the wedding of Jikku & Lena on June 22, 2024" },
      { property: "og:title", content: "Jikku & Lena — Wedding Invitation" },
      { property: "og:description", content: "You're invited to celebrate the wedding of Jikku & Lena on June 22, 2024" },
    ],
  }),
});

function WeddingInvitation() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = useCallback((index: number) => {
    if (!containerRef.current) return;
    const slides = containerRef.current.children;
    if (slides[index]) {
      slides[index].scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[100dvh] overflow-y-auto snap-y snap-mandatory"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <WeddingSlide backgroundImage={bgHero} showSwipeUp={false}>
        <SlideHero onStart={() => scrollToSlide(1)} />
      </WeddingSlide>

      <WeddingSlide backgroundImage={bgFlowers} onNext={() => scrollToSlide(2)}>
        <SlideNames />
      </WeddingSlide>

      <WeddingSlide backgroundImage={bgInvite} onNext={() => scrollToSlide(3)}>
        <SlideInvite />
      </WeddingSlide>

      <WeddingSlide backgroundImage={bgVenue} onNext={() => scrollToSlide(4)}>
        <SlideCeremony />
      </WeddingSlide>

      <WeddingSlide backgroundImage={bgRegistry} onNext={() => scrollToSlide(5)}>
        <SlideRegistry />
      </WeddingSlide>

      <WeddingSlide backgroundImage={bgRsvp} showSwipeUp={false}>
        <SlideRSVP />
      </WeddingSlide>
    </div>
  );
}
