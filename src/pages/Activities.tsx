import React from "react";
import { TOURIST_ACTIVITIES } from "../data/siteData";
import { TouristCard } from "../components/TouristCard";
import { ShieldCheck, Calendar, Users, HeartHandshake } from "lucide-react";

interface ActivitiesProps {
  onOpenInquiry: (title?: string) => void;
}

export const Activities: React.FC<ActivitiesProps> = ({ onOpenInquiry }) => {
  return (
    <div className="w-full bg-[#FDFBF7]">
      {/* Header */}
      <section className="bg-[#1B4332] text-white py-20 px-6 sm:px-8 lg:px-12 border-b border-stone-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DDA15E]">
            Guided Experiences & Encounters
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FDFBF7] text-balance">
            Tourist Activities in Bigogwe
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-2xl mx-auto leading-relaxed font-light">
            Immerse yourself in authentic Rwandan pastoral traditions, breathtaking ridge treks, hands-on milk workshops, and vibrant warrior dance performances led by local community guides.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURIST_ACTIVITIES.map((act) => (
            <TouristCard key={act.id} activity={act} onBook={onOpenInquiry} />
          ))}
        </div>

        {/* Community Tourism Value Pledge */}
        <div className="bg-[#F4EEDF]/50 rounded-2xl p-8 sm:p-12 border border-stone-200 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
              Responsible Travel
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#1B4332] mt-1">
              Why Experience Bigogwe with Local Youth Guides?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-stone-700">
            <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-2">
              <ShieldCheck className="w-5 h-5 text-[#1B4332]" />
              <h4 className="font-bold text-sm text-[#1B4332]">100% Community-Rooted</h4>
              <p className="leading-relaxed font-light">
                All guide fees and activity revenues directly support local pastoralist youth, cultural dance troupes, and artisan families in Nyabihu.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-2">
              <HeartHandshake className="w-5 h-5 text-[#1B4332]" />
              <h4 className="font-bold text-sm text-[#1B4332]">Gentle & Safe Cattle Interaction</h4>
              <p className="leading-relaxed font-light">
                Inyambo cows are raised in constant peaceful human contact. Guided visits ensure relaxed, respectful encounters for all ages.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-2">
              <Calendar className="w-5 h-5 text-[#1B4332]" />
              <h4 className="font-bold text-sm text-[#1B4332]">Flexible Itineraries</h4>
              <p className="leading-relaxed font-light">
                Whether you have 2 hours between Kigali and Rubavu or a full weekend, tours can be tailored to match your pace and interests.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
