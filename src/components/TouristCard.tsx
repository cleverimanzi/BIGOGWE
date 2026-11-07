import React from "react";
import { Clock, Mountain, ArrowRight } from "lucide-react";
import { ActivityItem } from "../data/siteData";

interface TouristCardProps {
  activity: ActivityItem;
  onBook: (activityTitle: string) => void;
}

export const TouristCard: React.FC<TouristCardProps> = ({ activity, onBook }) => {
  return (
    <div className="group flex flex-col bg-white rounded-xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
      {/* Image Container with subtle hover zoom */}
      <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
        <img
          src={activity.image}
          onError={(e) => {
            e.currentTarget.src = "/images/cattle1.jpg";
          }}
          alt={activity.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        
        {/* Unboxed Metadata in corner */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white drop-shadow-sm">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#DDA15E]" />
            <span>{activity.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mountain className="w-3.5 h-3.5 text-[#DDA15E]" />
            <span>{activity.difficulty}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#BC6C25]">
            {activity.tagline}
          </span>
          <h3 className="text-lg font-serif font-semibold text-[#1B4332] mt-1 group-hover:text-[#BC6C25] transition-colors leading-snug">
            {activity.title}
          </h3>
          <p className="text-sm text-stone-600 mt-2 line-clamp-3 leading-relaxed">
            {activity.description}
          </p>

          <ul className="mt-4 space-y-1.5 border-t border-stone-100 pt-3">
            {activity.highlights.slice(0, 2).map((hl, idx) => (
              <li key={idx} className="text-xs text-stone-600 flex items-start gap-1.5">
                <span className="text-[#DDA15E] font-bold">·</span>
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
          <span className="text-xs text-stone-500">
            Best time: {activity.bestTime.split(" ")[0]}
          </span>
          <button
            type="button"
            onClick={() => onBook(activity.title)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B4332] hover:text-[#BC6C25] transition-colors group/btn"
          >
            <span>Book Experience</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
