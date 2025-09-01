import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselControls({ children, title }) {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 1000; // adjust scroll distance
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full">
      {/* Title + Arrows */}
      <div className="flex justify-between items-center mb-6">
        {title && <h1 className="text-3xl font-bold">{title}</h1>}
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 flex items-center justify-center 
                       rounded-full bg-gray-200 hover:bg-gray-300 shadow"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 flex items-center justify-center 
                       rounded-full bg-gray-200 hover:bg-gray-300 shadow"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth no-scrollbar"
      >
        {children}
      </div>
    </div>
  );
}
