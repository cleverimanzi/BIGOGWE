import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { GalleryMediaItem } from "../data/siteData";

interface LightboxProps {
  isOpen: boolean;
  item: GalleryMediaItem | null;
  items: GalleryMediaItem[];
  onClose: () => void;
  onNavigate: (item: GalleryMediaItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  item,
  items,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, item, items]);

  if (!isOpen || !item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6">
      {/* Top Bar with counter & close */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between text-white">
        <div className="flex items-center gap-2 text-xs text-stone-300">
          <span>{item.category}</span>
          <span>·</span>
          <span>
            {currentIndex + 1} of {items.length}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-stone-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors z-10"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors z-10"
        aria-label="Next photograph"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image & Caption */}
      <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
        <div className="relative w-full flex items-center justify-center overflow-hidden rounded-xl bg-stone-950">
          <img
            src={item.image}
            onError={(e) => {
              e.currentTarget.src = "/images/cattle1.jpg";
            }}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
          />
        </div>

        <div className="w-full mt-4 text-center text-white">
          <h4 className="text-xl font-serif font-medium text-[#FDFBF7]">
            {item.title}
          </h4>
          <p className="text-sm text-stone-300 mt-1 max-w-2xl mx-auto leading-relaxed">
            {item.description}
          </p>
          <div className="flex items-center justify-center gap-1.5 text-xs text-[#DDA15E] mt-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{item.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
