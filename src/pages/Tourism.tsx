import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../data/images";
import { Camera, Mountain, Sparkles, MapPin, Compass, ArrowRight } from "lucide-react";

interface TourismProps {
  onOpenInquiry: (title?: string) => void;
}

export const Tourism: React.FC<TourismProps> = ({ onOpenInquiry }) => {
  return (
    <div className="w-full bg-[#FDFBF7]">
      {/* Header */}
      <section className="bg-[#1B4332] text-white py-20 px-6 sm:px-8 lg:px-12 border-b border-stone-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DDA15E]">
            Highland Eco-Tourism
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FDFBF7] text-balance">
            Tourism & Attractions in Bigogwe
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-2xl mx-auto leading-relaxed font-light">
            Often celebrated as the "Switzerland of Rwanda," Bigogwe is a paradise of rolling emerald knolls, panoramic volcanic horizons, and immersive pastoral encounters.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-16">
        {/* Attraction 1: Rolling Green Hills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
              Natural Wonder
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">
              Undulating Green Hills & Countryside
            </h2>
            <div className="w-12 h-0.5 bg-[#DDA15E]" />
            <p className="text-sm text-stone-700 leading-relaxed font-light">
              Bigogwe's landscape is unlike anywhere else in East Africa. Lush, soft grass blankets rolling knolls that curve continuously into the horizon. Towering at 2,300 meters above sea level, the temperature is comfortably fresh and cool, making it a hiker's and landscape lover's haven.
            </p>
            <p className="text-sm text-stone-700 leading-relaxed font-light">
              Trails wind past tea plantations, small dairy farmsteads, and high volcanic viewpoints offering unobstructed panoramas of Mount Karisimbi, Mount Mikeno, and Mount Bisoke.
            </p>
          </div>

          <div className="lg:col-span-6 overflow-hidden rounded-xl border border-stone-200 shadow-md">
            <img
              src={IMAGES.landscape}
              onError={(e) => { e.currentTarget.src = IMAGES.urls.pin7; }}
              alt="Bigogwe rolling green hills panorama"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 object-cover hover:scale-103 transition-transform duration-500"
            />
          </div>
        </div>

        {/* 4 Themed Attraction Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-[#1B4332]">
              Hands-On Cattle Walks
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-light">
              Walk side-by-side with genuine local herders, learn ancient whistles, and interact with the calm, stately Inyambo herds in open pastures.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center">
              <Camera className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-[#1B4332]">
              Photography Paradiso
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-light">
              Sunset golden hour produces breathtaking silhouettes of ivory horns, dramatic clouds, and mountain mist against emerald ridge backdrops.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center">
              <Mountain className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-[#1B4332]">
              The Bigogwe Rock Ridge
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-light">
              Climb to natural volcanic rock promontories that offer 360-degree vistas of the entire Nyabihu district and distant Lake Kivu basin.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-[#1B4332]">
              Living Heritage Immersion
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-light">
              Visit traditional milk huts, taste warm organic milk and chilled Ikivuguto, and see artisans carving Ibyanzi pots from single logs.
            </p>
          </div>
        </div>

        {/* Travel Guide / Logistics Strip */}
        <div className="bg-[#F4EEDF]/50 rounded-2xl p-8 sm:p-12 border border-stone-200 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
              Visitor Logistics
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#1B4332] mt-1">
              Visiting Bigogwe on Your Rwanda Itinerary
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-stone-700">
            <div className="space-y-1.5">
              <span className="font-bold text-stone-900 block">From Kigali (Capital):</span>
              <p className="font-light">
                Approx. 2.5 – 3 hours drive along RN4. Perfect stopover before visiting Lake Kivu or after tracking mountain gorillas in Musanze.
              </p>
            </div>
            <div className="space-y-1.5">
              <span className="font-bold text-stone-900 block">From Musanze (Volcanoes NP):</span>
              <p className="font-light">
                Only 25–30 minutes drive west. Ideal as an afternoon cultural excursion after your morning gorilla or golden monkey trek.
              </p>
            </div>
            <div className="space-y-1.5">
              <span className="font-bold text-stone-900 block">From Rubavu / Gisenyi:</span>
              <p className="font-light">
                Only 35–40 minutes drive east towards Musanze. Easy morning day trip before afternoon relaxation on Lake Kivu beach.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-300 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-stone-600">
              <MapPin className="w-4 h-4 text-[#BC6C25]" />
              <span>Bigogwe Tourism Desk is located directly on the main highway</span>
            </div>
            <Link
              to="/activities"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#1B4332] hover:bg-[#143826] rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <span>See All Tourist Activities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
