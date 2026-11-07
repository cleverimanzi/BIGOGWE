import React, { useState } from "react";
import { ACCOMMODATIONS, AccommodationItem } from "../data/siteData";
import { MapPin, Phone, ShieldCheck, Check, ArrowRight } from "lucide-react";

interface AccommodationProps {
  onOpenInquiry: (title?: string, category?: "activity" | "stay" | "guide" | "general") => void;
}

export const Accommodation: React.FC<AccommodationProps> = ({ onOpenInquiry }) => {
  return (
    <div className="w-full bg-[#FDFBF7]">
      {/* Header */}
      <section className="bg-[#1B4332] text-white py-20 px-6 sm:px-8 lg:px-12 border-b border-stone-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DDA15E]">
            Stay & Rest
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FDFBF7] text-balance">
            Accommodation & Hospitality
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-2xl mx-auto leading-relaxed font-light">
            From waking up to misty pasture sunrises at Bigogwe's community campsite to cozy countryside lodges and nearby lakeside resorts in Rubavu and Musanze.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-16">
        {/* Verification transparency banner */}
        <div className="bg-[#F4EEDF]/60 rounded-xl p-5 border border-stone-200 flex items-start gap-3.5 text-xs text-stone-700">
          <ShieldCheck className="w-5 h-5 text-[#1B4332] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-stone-900 block mb-0.5">
              Verified Hospitality Network Note
            </span>
            <p className="leading-relaxed font-light">
              Bigogwe offers authentic community-based camping and guesthouse stays directly on the pasture hills. For luxury hotels and expanded amenities, travelers frequently stay in neighboring Musanze (30 mins east) or Rubavu / Lake Kivu (40 mins west) and visit Bigogwe for day experiences.
            </p>
          </div>
        </div>

        {/* Accommodation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACCOMMODATIONS.map((stay) => (
            <div
              key={stay.id}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/9 overflow-hidden bg-stone-100">
                  <img
                    src={stay.image}
                    alt={stay.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Unboxed Metadata in corner */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="text-[#DDA15E] font-medium">{stay.type}</span>
                    <span className="text-white/80">{stay.distanceFromBigogwe}</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-[#1B4332]">
                        {stay.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-[#BC6C25]" />
                        <span>{stay.location}</span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-[#BC6C25] bg-[#F4EEDF] px-2.5 py-1 rounded-md whitespace-nowrap">
                      {stay.priceRange}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed font-light">
                    {stay.description}
                  </p>

                  <div className="border-t border-stone-100 pt-3">
                    <span className="text-2xs uppercase tracking-wider text-stone-400 font-semibold block mb-2">
                      Key Amenities:
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 text-xs text-stone-600">
                      {stay.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-[#1B4332]" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between">
                <div className="text-2xs text-stone-500">
                  <span>Contact: {stay.contact}</span>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenInquiry(`Booking Inquiry: ${stay.name}`, "stay")}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#1B4332] hover:bg-[#143826] rounded-lg transition-colors shadow-xs"
                >
                  Inquire Stay
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
