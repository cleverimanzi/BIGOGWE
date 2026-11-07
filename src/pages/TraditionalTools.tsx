import React, { useState } from "react";
import { TRADITIONAL_TOOLS, ToolItem } from "../data/siteData";
import { ArrowRight, Sparkles, Filter } from "lucide-react";

interface TraditionalToolsProps {
  onOpenInquiry: (title?: string) => void;
}

export const TraditionalTools: React.FC<TraditionalToolsProps> = ({ onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Implements" },
    { id: "vessel", label: "Milk Vessels" },
    { id: "churning", label: "Churning & Gourds" },
    { id: "filtering", label: "Filtering" },
    { id: "herding", label: "Herding Gear" },
    { id: "household", label: "Household Art" },
  ];

  const filteredTools =
    activeCategory === "all"
      ? TRADITIONAL_TOOLS
      : TRADITIONAL_TOOLS.filter((t) => t.category === activeCategory);

  return (
    <div className="w-full bg-[#FDFBF7]">
      {/* Header */}
      <section className="bg-[#1B4332] text-white py-20 px-6 sm:px-8 lg:px-12 border-b border-stone-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DDA15E]">
            Material Culture & Craftsmanship
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FDFBF7] text-balance">
            Traditional Tools of Cattle Keeping & Dairy
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-2xl mx-auto leading-relaxed font-light">
            Explore the ancestral wooden vessels, gourd calabashes, natural fiber sieves, and herding staffs that have defined pastoral life in Bigogwe for centuries.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-12">
        {/* Interactive Filter Tabs (functional segmented controls per anti-slop guidelines) */}
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200 pb-4">
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? "bg-[#1B4332] text-white shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-stone-500 font-mono">
            Showing {filteredTools.length} traditional implements
          </span>
        </div>

        {/* Tools Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="group bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-2xs uppercase tracking-widest text-[#DDA15E] font-semibold">
                      {tool.kinyarwandaName}
                    </span>
                    <h3 className="text-base font-serif font-bold text-[#FDFBF7] mt-0.5">
                      {tool.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1">
                      Description & Craftsmanship
                    </h4>
                    <p className="text-xs text-stone-700 leading-relaxed font-light">
                      {tool.description}
                    </p>
                  </div>

                  <div className="border-t border-stone-100 pt-3">
                    <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1">
                      Traditional Usage
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-light">
                      {tool.usage}
                    </p>
                  </div>

                  <div className="border-t border-stone-100 pt-3">
                    <h4 className="text-xs uppercase tracking-wider text-[#BC6C25] font-semibold mb-1">
                      Cultural Significance
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-light">
                      {tool.culturalSignificance}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between text-2xs text-stone-500">
                <span>Material: {tool.material}</span>
                <button
                  type="button"
                  onClick={() => onOpenInquiry(`Inquiry about ${tool.name}`)}
                  className="font-semibold text-[#1B4332] hover:text-[#BC6C25]"
                >
                  Ask Guide
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
