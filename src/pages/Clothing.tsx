import React from "react";
import { IMAGES } from "../data/images";
import { TRADITIONAL_CLOTHING } from "../data/siteData";
import { Sparkles, ArrowRight } from "lucide-react";

interface ClothingProps {
  onOpenInquiry: (title?: string) => void;
}

export const Clothing: React.FC<ClothingProps> = ({ onOpenInquiry }) => {
  return (
    <div className="w-full bg-[#FDFBF7]">
      {/* Header */}
      <section className="bg-[#1B4332] text-white py-20 px-6 sm:px-8 lg:px-12 border-b border-stone-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DDA15E]">
            Sartorial Dignity & Regalia
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FDFBF7] text-balance">
            Traditional Clothing & Cultural Ornaments
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-2xl mx-auto leading-relaxed font-light">
            Discover the graceful drape of the Umushanana, heroic Intore warrior headpieces, and intricate beaded jewelry celebrating Rwandan aesthetic poise.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-16">
        {/* Umushanana Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 overflow-hidden rounded-xl border border-stone-200 shadow-md">
            <img
              src={IMAGES.clothing}
              onError={(e) => { e.currentTarget.src = "/images/cattle1.jpg"; }}
              alt="Rwandan women in Umushanana traditional attire"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 object-cover hover:scale-103 transition-transform duration-500"
            />
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
              National Elegance
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">
              The Umushanana: Graceful Draped Regalia
            </h2>
            <div className="w-12 h-0.5 bg-[#DDA15E]" />
            <p className="text-sm text-stone-700 leading-relaxed font-light">
              The <strong>Umushanana</strong> is the quintessential ceremonial attire of Rwandan women. Comprising a floor-length gathered wrapped skirt (<em className="font-serif">Ikitengeso</em>), a delicate bustier top, and a lightweight flowing shawl draped effortlessly over one shoulder.
            </p>
            <p className="text-sm text-stone-700 leading-relaxed font-light">
              Its fluid movement mirrors the serene, graceful gait of the royal Inyambo cows. Traditionally chosen in rich earthy tones, gold, or forest greens, the Umushanana is worn during traditional weddings (<em className="font-serif">Gusaba</em>), state banquets, and cattle blessing ceremonies.
            </p>
          </div>
        </div>

        {/* Catalog of Cultural Attire */}
        <div className="space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
              Ceremonial Wardrobe
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#1B4332] mt-1">
              Garments & Ceremonial Roles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRADITIONAL_CLOTHING.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs p-6 space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                    <span>{item.gender}</span>
                    <span className="text-[#BC6C25] font-semibold">{item.kinyarwandaName}</span>
                  </div>
                  <h4 className="text-lg font-serif font-semibold text-[#1B4332]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-stone-100">
                  <div>
                    <span className="text-2xs uppercase tracking-wider text-stone-400 font-semibold block mb-1">
                      Worn During:
                    </span>
                    <span className="text-xs text-stone-700 font-medium">
                      {item.occasion}
                    </span>
                  </div>

                  <div>
                    <span className="text-2xs uppercase tracking-wider text-stone-400 font-semibold block mb-1">
                      Key Accessories & Ornaments:
                    </span>
                    <ul className="text-xs text-stone-600 space-y-1">
                      {item.accessories.map((acc, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="text-[#DDA15E]">·</span>
                          <span>{acc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Ornaments & Jewelry Section */}
        <div className="bg-[#F4EEDF]/40 rounded-2xl p-8 sm:p-12 border border-stone-200 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
              Jewelry & Adornments
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#1B4332] mt-1">
              Cultural Ornaments of Bigogwe
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-2">
              <h5 className="font-serif font-bold text-sm text-[#1B4332]">Inyonga & Amakora</h5>
              <p className="text-stone-600 leading-relaxed font-light">
                Handmade multi-tiered bead necklaces crafted with volcanic earth and bone beads, cascading down the chest.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-2">
              <h5 className="font-serif font-bold text-sm text-[#1B4332]">Umugara Headdress</h5>
              <p className="text-stone-600 leading-relaxed font-light">
                Flowing bleached sisal fiber headpieces worn by male Intore dancers to emulate the lion's mane and warrior vigor.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-2">
              <h5 className="font-serif font-bold text-sm text-[#1B4332]">Inyerere Bangles</h5>
              <p className="text-stone-600 leading-relaxed font-light">
                Polished brass and copper wrist cuffs worn by brides and elders, shining in the sun during wedding ceremonies.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-2">
              <h5 className="font-serif font-bold text-sm text-[#1B4332]">Inzogera Bells</h5>
              <p className="text-stone-600 leading-relaxed font-light">
                Rattling iron bells strapped above dancer ankles, providing acoustic percussion that synchronizes with drum rhythms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
