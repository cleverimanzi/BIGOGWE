import React from "react";
import { Maximize2, MapPin } from "lucide-react";
import { GalleryMediaItem } from "../data/siteData";

interface GalleryCardProps {
  item: GalleryMediaItem;
  onClick: (item: GalleryMediaItem) => void;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ item, onClick }) => {
  return (
    <div
      onClick={() => onClick(item)}
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-stone-100 border border-stone-200/80 aspect-4/3 shadow-xs hover:shadow-lg transition-all duration-300"
    >
      <img
        src={item.image}
        onError={(e) => {
          e.currentTarget.src = "/images/cattle1.jpg";
        }}
        alt={item.title}
        referrerPolicy="no-referrer"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
      />
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

      {/* Hover Zoom Icon */}
      <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white/90 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
        <Maximize2 className="w-4 h-4" />
      </div>

      {/* Text Info */}
      <div className="absolute bottom-3 left-3 right-3 text-white">
        <div className="flex items-center gap-2 text-xs text-[#DDA15E] font-medium">
          <span>{item.category}</span>
          <span className="text-white/40">·</span>
          <div className="flex items-center gap-1 text-white/80">
            <MapPin className="w-3 h-3 text-[#DDA15E]" />
            <span className="truncate">{item.location}</span>
          </div>
        </div>
        <h4 className="text-base font-serif font-medium text-[#FDFBF7] mt-1 line-clamp-1 group-hover:text-[#DDA15E] transition-colors">
          {item.title}
        </h4>
        <p className="text-xs text-stone-300 line-clamp-1 mt-0.5 opacity-90">
          {item.description}
        </p>
      </div>
    </div>
  );
};
