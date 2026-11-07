import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../data/images";
import { ArrowRight, Flame, Sparkles } from "lucide-react";

interface MilkCultureProps {
  onOpenInquiry: (title?: string) => void;
}

export const MilkCulture: React.FC<MilkCultureProps> = ({ onOpenInquiry }) => {
  return (
    <div className="w-full bg-[#FDFBF7]">
      {/* Header */}
      <section className="bg-[#1B4332] text-white py-20 px-6 sm:px-8 lg:px-12 border-b border-stone-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DDA15E]">
            Sacred Dairy Heritage
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FDFBF7] text-balance">
            The Living Milk Culture of Bigogwe
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-2xl mx-auto leading-relaxed font-light">
            From sunrise milking melodies and the aromatic herbal smoke of Ibyanzi pots to velvety fermented Ikivuguto, discover Rwanda's deepest symbol of friendship and nurture.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-16">
        {/* Cultural Importance Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
              Hospitality & Nurture
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">
              The Cultural Significance of Milk (Amata)
            </h2>
            <div className="w-12 h-0.5 bg-[#DDA15E]" />
            <p className="text-sm text-stone-700 leading-relaxed font-light">
              In Rwandan culture, milk is the ultimate symbol of purity, hospitality, and life. Offering milk to an arriving guest—a custom known as <strong className="font-serif">Kugabira Amata</strong>—is the highest gesture of welcome.
            </p>
            <p className="text-sm text-stone-700 leading-relaxed font-light">
              Milk is traditionally served in beautifully carved wooden vessels (<em className="font-serif">Ibyanzi</em>) covered with fine straw crowns. It is shared among neighbors, used in blessing newborn infants, and gifted to new mothers.
            </p>
          </div>

          <div className="lg:col-span-6 overflow-hidden rounded-xl border border-stone-200 shadow-md">
            <img
              src={IMAGES.milk}
              onError={(e) => { e.currentTarget.src = IMAGES.urls.pin5; }}
              alt="Ancestral Ibyanzi milk pots and calabashes in Bigogwe"
              referrerPolicy="no-referrer"
              className="w-full aspect-4/3 object-cover hover:scale-103 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Milking & Collection */}
        <div className="bg-[#F4EEDF]/50 rounded-2xl p-8 sm:p-12 border border-stone-200 space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
              Daily Ritual
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332] mt-1">
              Traditional Milking & Milk Collection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
              <h3 className="text-base font-serif font-semibold text-[#1B4332]">
                01. Soothing Morning Milking (Gukama)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Milking takes place at daybreak. The milker washes their hands thoroughly and sings or softly whistles to reassure the cow. The first warm streams (<em className="font-serif">Amata mashyushyu</em>) are collected in wooden milking cups (<em className="font-serif">Inkongoro</em>).
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
              <h3 className="text-base font-serif font-semibold text-[#1B4332]">
                02. Natural Reed Filtering (Inshunzi)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Fresh milk is poured through the <em className="font-serif">Inshunzi</em>—a conical strainer woven from natural wild river grass fibers—ensuring absolute purity and clarity before it reaches the main storage pot.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-3">
              <h3 className="text-base font-serif font-semibold text-[#1B4332]">
                03. Herbal Pot Smoking (Gukurungira)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Before milk is introduced, the wooden pot is cleansed with boiling water and inverted over glowing embers of aromatic wild herbs (<em className="font-serif">Umutoma</em> or <em className="font-serif">Iteke</em>). The smoke sterilizes the wood and imparts a rich, sweet fragrance.
              </p>
            </div>
          </div>
        </div>

        {/* Processing Methods: Traditional vs Modern */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Traditional Processing */}
          <div className="bg-white p-8 rounded-xl border border-stone-200 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
              Heritage Method
            </span>
            <h3 className="text-xl font-serif font-bold text-[#1B4332]">
              Traditional Churning & Fermentation
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-light">
              Milk is transferred into large bottle gourds (<strong className="font-serif">Igisabo</strong>) suspended or set on soft woven rings (<strong className="font-serif">Urweso</strong>). It is naturally fermented at cool highland room temperature, then rocked rhythmically back and forth for 40–60 minutes.
            </p>
            <ul className="text-xs text-stone-700 space-y-2 border-t border-stone-100 pt-3">
              <li className="flex items-start gap-2">
                <span className="text-[#DDA15E] font-bold">·</span>
                <span><strong>Ikivuguto:</strong> A rich, naturally tart, probiotic fermented buttermilk adored across Rwanda.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#DDA15E] font-bold">·</span>
                <span><strong>Amavuta y'inka:</strong> Traditional clarified butter, used for seasoning delicacies and cosmetic skin nourishment.</span>
              </li>
            </ul>
          </div>

          {/* Modern Processing */}
          <div className="bg-white p-8 rounded-xl border border-stone-200 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1B4332]">
              Contemporary Progress
            </span>
            <h3 className="text-xl font-serif font-bold text-[#1B4332]">
              Modern Milk Collection & Dairy Cooperatives
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-light">
              Today, Bigogwe is a powerhouse in Rwanda's modern dairy value chain. Daily milk yields from pastoral farms are brought to regional Milk Collection Centers (MCCs) equipped with stainless steel cooling tanks and modern quality testing.
            </p>
            <ul className="text-xs text-stone-700 space-y-2 border-t border-stone-100 pt-3">
              <li className="flex items-start gap-2">
                <span className="text-[#1B4332] font-bold">·</span>
                <span><strong>Dairy Cooperatives:</strong> Herders have formed certified cooperatives providing fair milk pricing and veterinary care.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1B4332] font-bold">·</span>
                <span><strong>Artisanal Cheeses:</strong> Nyabihu is renowned for highland gouda and mozzarella cheeses produced locally.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA banner to book a milk workshop */}
        <div className="p-8 bg-[#143826] text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-xl font-serif font-bold text-[#FDFBF7]">
              Taste Fresh Ikivuguto & Learn Herbal Smoking
            </h4>
            <p className="text-xs text-stone-300 font-light">
              Join our 2-hour hands-on milk workshop led by local artisan women in Bigogwe.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenInquiry("Traditional Milk Churning Workshop")}
            className="px-5 py-2.5 text-xs font-semibold text-[#143826] bg-[#DDA15E] hover:bg-[#BC6C25] hover:text-white rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Book Milk Workshop
          </button>
        </div>
      </section>
    </div>
  );
};
