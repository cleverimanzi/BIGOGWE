import React from "react";
import { IMAGES } from "../data/images";
import { Music, Sparkles, BookOpen, Heart, ArrowRight } from "lucide-react";

interface CultureProps {
  onOpenInquiry: (title?: string) => void;
}

export const Culture: React.FC<CultureProps> = ({ onOpenInquiry }) => {
  return (
    <div className="w-full bg-[#FDFBF7]">
      {/* Header */}
      <section className="bg-[#1B4332] text-white py-20 px-6 sm:px-8 lg:px-12 border-b border-stone-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DDA15E]">
            Living Heritage & Folklore
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FDFBF7] text-balance">
            Culture, Dances & Pastoral Traditions
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-2xl mx-auto leading-relaxed font-light">
            The soul of Bigogwe beats to the resonance of the Ingoma drums, the lyrical cadence of heroic cattle recitations, and the communal warmth of Umuganda.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-16">
        {/* Section 1: Traditional Dances */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
              Rhythm & Choreography
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">
              Traditional Dances: Intore & Amaraba
            </h2>
            <div className="w-12 h-0.5 bg-[#DDA15E]" />
            <div className="space-y-4 text-sm text-stone-700 leading-relaxed font-light">
              <p>
                <strong>The Intore Dance (Dance of the Heroes):</strong> Historically performed by royal court warriors returning victorious from protection expeditions. Male dancers wear sisal manes that whip dramatically with rapid head movements, brandishing small shields (<em className="font-serif">Ingabo</em>) and spears while executing jaw-dropping high jumps.
              </p>
              <p>
                <strong>The Amaraba & Umushayayo (Dance of the Cattle):</strong> In sharp contrast, women perform the graceful Amaraba dance. Raising curved arms symmetrically to mirror the long horns of the Inyambo cattle, their footwork glides smoothly with calm dignity, praising the beauty and generosity of the herd.
              </p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenInquiry("Live Cultural Dance Performance")}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#1B4332] hover:bg-[#143826] rounded-lg transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <span>Book a Live Troupe Performance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 overflow-hidden rounded-xl border border-stone-200 shadow-md">
            <img
              src={IMAGES.culture}
              onError={(e) => { e.currentTarget.src = "/images/cattle1.jpg"; }}
              alt="Intore dancers performing in Bigogwe"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 object-cover hover:scale-103 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Section 2: Cultural Songs & Poetry */}
        <div className="bg-[#F4EEDF]/40 rounded-2xl p-8 sm:p-12 border border-stone-200 space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
              Oral Arts
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332] mt-1">
              Cultural Songs & Pastoral Poetry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
              <h3 className="text-base font-serif font-semibold text-[#1B4332]">
                Ibyivugo (Heroic Recitations)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Spoken-word pastoral epic poetry recited in rapid staccato cadence, honoring great shepherds, resilient cows, and historic mountain deeds.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
              <h3 className="text-base font-serif font-semibold text-[#1B4332]">
                Abeera & Pastoral Lullabies
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Gentle polyphonic songs sung by women while churning butter or by milkers at dawn to coax milk release and calm restive calves.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
              <h3 className="text-base font-serif font-semibold text-[#1B4332]">
                Ingoma (Acoustic Drumming)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Sets of hollowed tree trunk drums tuned with tightened animal skins that anchor all village celebrations, weddings, and national rites.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Traditional Ceremonies */}
        <div className="space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
              Community Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332] mt-1">
              Traditional Ceremonies & Storytelling
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
              <span className="text-2xs uppercase tracking-wider text-[#BC6C25] font-semibold">
                Calf Naming Ceremony
              </span>
              <h3 className="text-lg font-serif font-bold text-[#1B4332]">
                Kwita Izina ry'Inka
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Before Rwanda created the famous national mountain gorilla naming ceremony, pastoralist communities like Bigogwe celebrated <em>Kwita Izina ry'Inka</em> for centuries. Newborn calves are presented to neighbors, praised for their ancestry, and christened with poetic names that remain with them for life.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
              <span className="text-2xs uppercase tracking-wider text-[#BC6C25] font-semibold">
                Traditional Marriage Introduction
              </span>
              <h3 className="text-lg font-serif font-bold text-[#1B4332]">
                Gusaba no Gukwa
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                The traditional engagement and bride-request ceremony. Spokesmen from both families engage in friendly, witty poetic sparring. A healthy heifer is presented (<em className="font-serif">Inkwano</em>) to solidify the union, followed by sharing calabashes of milk and honey wine.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
              <span className="text-2xs uppercase tracking-wider text-[#BC6C25] font-semibold">
                Evening Hearth Lore
              </span>
              <h3 className="text-lg font-serif font-bold text-[#1B4332]">
                Imigani & Storytelling
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                After the cattle are safely penned in the kraal (<em className="font-serif">Urugo</em>), families gather around the fire. Grandparents recount ancient fables of the wise hare (<em className="font-serif">Bakame</em>) and heroic kings, imparting morals, patience, and honor to children.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
              <span className="text-2xs uppercase tracking-wider text-[#BC6C25] font-semibold">
                Communal Solidarity
              </span>
              <h3 className="text-lg font-serif font-bold text-[#1B4332]">
                Umuganda & Communal Grazing
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                The spirit of collective community work. Bigogwe pastoralists join hands on the last Saturday of each month to clear hillside trails, maintain clean water streams for cattle, and assist vulnerable community members in building homesteads.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
