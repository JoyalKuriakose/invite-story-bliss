import { type ReactNode } from "react";
import { ChevronUp } from "lucide-react";

interface WeddingSlideProps {
  backgroundImage: string;
  children: ReactNode;
  showSwipeUp?: boolean;
  onNext?: () => void;
}

export function WeddingSlide({ backgroundImage, children, showSwipeUp = true, onNext }: WeddingSlideProps) {
  return (
<<<<<<< HEAD
    <div className="relative h-dvh w-full shrink-0 overflow-hidden snap-start snap-always">
=======
    <div className="relative h-[100dvh] w-full flex-shrink-0 overflow-hidden snap-start snap-always">
>>>>>>> aaad2adda20dce9e51242ee966b5352f86358c31
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="wedding-overlay absolute inset-0" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
        {children}
      </div>
      {showSwipeUp && (
        <button
          onClick={onNext}
          className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
        >
          <ChevronUp className="swipe-indicator text-wedding-cream" size={28} />
          <span className="text-xs tracking-[0.2em] uppercase text-wedding-cream font-serif">
            Swipe Up
          </span>
        </button>
      )}
    </div>
  );
}
