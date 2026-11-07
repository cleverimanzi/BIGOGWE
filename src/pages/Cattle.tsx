import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, HeartHandshake, ShieldCheck, Sun } from "lucide-react";
import { IMAGES } from "../data/images";
import { CATTLE_FACTS } from "../data/siteData";

interface CattleProps {
  onOpenInquiry: (title?: string) => void;
}

export const Cattle: React.FC<CattleProps> = ({ onOpenInquiry }) => {
  return (
    <div className="w-full bg-[#FDFBF7]">
      {/* Editorial Hero Header */}
      <section className="relative bg-[#1B4332] text-white py-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src={IMAGES.cattle1}
            onError={(e) => { e.currentTarget.src = IMAGES.urls.pin1; }}
            alt="Ankole cattle background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1B4332]/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DDA15E]">
            Living Royal Heritage
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FDFBF7] text-balance">
            The Regal Long-Horned Ankole Cattle of Bigogwe
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-2xl mx-auto leading-relaxed font-light">
            Distinguished by their magnificent lyre-shaped horns, gentle disposition, and sacred place in Rwandan civilization.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-16">
        {/* Section 1: Anatomy & Long Horns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
              Physical Distinction
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">
              The Majestic Inyambo & Long Lyre Horns
            </h2>
            <div className="w-12 h-0.5 bg-[#DDA15E]" />
            <p className="text-sm text-stone-700 leading-relaxed font-light">
              The Ankole-Watusi, known culturally in Rwanda as the <strong>Inyambo</strong>, is one of the world's most visually striking cattle breeds. Their iconic ivory-white horns curve gracefully in symmetric arches, often spanning between 1.5 and over 2 meters from tip to tip.
            </p>
            <p className="text-sm text-stone-700 leading-relaxed font-light">
              Beyond their aesthetic elegance, these magnificent horns serve a vital physiological role: a honeycomb interior filled with blood vessels acts as an extraordinary natural thermoregulation system, dispersing body heat in the daytime and keeping them comfortable in chilly highland nights.
            </p>
            <div className="pt-2 text-xs text-stone-600 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[#DDA15E] font-bold">·</span>
                <span><strong>Coat Colors:</strong> Rich mahogany red, speckled fawn, dark chestnut, and white-blotched coats (<em className="italic font-serif">Inyambo z'ibihogo</em>).</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#DDA15E] font-bold">·</span>
                <span><strong>Temperament:</strong> Notoriously calm, attentive to human voices, and accustomed to gentle touch.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 overflow-hidden rounded-xl border border-stone-200 shadow-md">
            <img
              src={IMAGES.cattle3}
              onError={(e) => { e.currentTarget.src = IMAGES.urls.pin3; }}
              alt="Heart-shaped horns on Inyambo cow"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 object-cover hover:scale-103 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Section 2: Cattle Farming Practices */}
        <div className="bg-[#F4EEDF]/40 rounded-2xl p-8 sm:p-12 border border-stone-200 space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
              Daily Stewardship
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332] mt-1">
              Traditional Cattle Farming Practices
            </h2>
            <p className="text-sm text-stone-600 mt-2 font-light">
              How Bigogwe herders have sustained healthy herds across generations through natural, compassionate husbandry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
              <span className="text-lg font-serif font-semibold text-[#1B4332] block">
                01. Rotational Hill Pasturing
              </span>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Herds are guided across rotating green slopes to prevent overgrazing. The natural highland kikuyu grass is packed with natural nutrients, requiring zero chemical additives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
              <span className="text-lg font-serif font-semibold text-[#1B4332] block">
                02. Melodic Whistling & Bonding
              </span>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Herders communicate with their cows using specific melodic whistles and vocal cadences. Cows recognize their caretakers' voices instantly and follow them voluntarily.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
              <span className="text-lg font-serif font-semibold text-[#1B4332] block">
                03. Natural Herbal Care & Salt Licks
              </span>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Traditional herdsmen prepare natural mineral salt licks (<em className="font-serif">Iheke</em>) and herbal preparations from indigenous plants to support digestion, lactation, and horn strength.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Cattle Traditions & Cultural Value */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 overflow-hidden rounded-xl border border-stone-200 shadow-md order-2 lg:order-1">
            <img
              src={IMAGES.cattle2}
              onError={(e) => { e.currentTarget.src = IMAGES.urls.pin2; }}
              alt="Royal Inyambo cattle procession"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 object-cover hover:scale-103 transition-transform duration-500"
            />
          </div>

          <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
              Living Lore
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">
              Cattle Keeping Traditions & Sacred Significance
            </h2>
            <div className="w-12 h-0.5 bg-[#DDA15E]" />
            <p className="text-sm text-stone-700 leading-relaxed font-light">
              In Bigogwe, cattle keeping is an art form. From birth, each calf is given an expressive individual name during the <strong>Kwita Izina ry'Inka</strong> ceremony. Names often commemorate auspicious rainfall, family milestones, or physical grace—such as <em>Bwiza</em> (Beauty), <em>Inyange</em> (Egret/Purity), or <em>Mutegarugori</em> (Graceful Mother).
            </p>
            <p className="text-sm text-stone-700 leading-relaxed font-light">
              Pastoral poems (<strong className="font-serif italic">Ibyivugo</strong>) are recited in public squares, celebrating the bravery of the herder and the endurance of the herd. To this day, cattle remain the centerpiece of traditional marriage negotiations (<em className="font-serif">Inkwano</em>), symbolizing enduring respect and eternal alliance between families.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenInquiry("Inyambo Cattle Walking Tour")}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#1B4332] hover:bg-[#143826] rounded-lg transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <span>Experience the Herds with a Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Section 4: Mother & Calf Sanctuary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
              Next Generation
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">
              Nurturing Calves & Maternal Heritage
            </h2>
            <div className="w-12 h-0.5 bg-[#DDA15E]" />
            <p className="text-sm text-stone-700 leading-relaxed font-light">
              Calves in Bigogwe are raised with supreme tenderness. During the first months, calves remain close to the family homestead before joining the main grazing herd. Shepherds sing lullabies to encourage nursing and massage calves with sweet-smelling grass infusions.
            </p>
            <p className="text-sm text-stone-700 leading-relaxed font-light">
              Visitors to Bigogwe have the opportunity to see mothers and calves interacting, learn traditional calf care, and photograph these gentle family moments.
            </p>
          </div>

          <div className="lg:col-span-6 overflow-hidden rounded-xl border border-stone-200 shadow-md">
            <img
              src={IMAGES.cattleCalf}
              onError={(e) => { e.currentTarget.src = IMAGES.urls.pin4; }}
              alt="Mother Ankole cow with calf"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 object-cover hover:scale-103 transition-transform duration-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
