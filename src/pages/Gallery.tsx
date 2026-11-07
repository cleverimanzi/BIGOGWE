import React, { useState } from "react";
import { GALLERY_ITEMS, GalleryMediaItem } from "../data/siteData";
import { GalleryCard } from "../components/GalleryCard";
import { Lightbox } from "../components/Lightbox";

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<GalleryMediaItem | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const categories = [
    "All",
    "Cattle",
    "Milk Processing",
    "Clothing",
    "Cultural Dances",
    "Landscapes",
    "Tourism",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((i) => i.category === selectedCategory);

  const handleCardClick = (item: GalleryMediaItem) => {
    setActiveItem(item);
    setLightboxOpen(true);
  };

  const handleNavigateLightbox = (item: GalleryMediaItem) => {
    setActiveItem(item);
  };

  return (
    <div className="w-full bg-[#FDFBF7]">
      {/* Header */}
      <section className="bg-[#1B4332] text-white py-20 px-6 sm:px-8 lg:px-12 border-b border-stone-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DDA15E]">
            Visual Chronicle
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FDFBF7] text-balance">
            Photo & Cultural Gallery
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-2xl mx-auto leading-relaxed font-light">
            Glimpse the breathtaking beauty of Bigogwe: long-horned Inyambo cattle, hand-carved Ibyanzi pots, Umushanana regalia, and emerald highland ridges.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-10">
        {/* Category Filter Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200 pb-4">
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? "bg-[#1B4332] text-white shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-xs text-stone-500 font-mono">
            {filteredItems.length} Photographs
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <GalleryCard key={item.id} item={item} onClick={handleCardClick} />
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        item={activeItem}
        items={filteredItems}
        onClose={() => setLightboxOpen(false)}
        onNavigate={handleNavigateLightbox}
      />
    </div>
  );
};
