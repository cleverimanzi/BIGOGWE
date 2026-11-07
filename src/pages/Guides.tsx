import React, { useState } from "react";
import { LOCAL_GUIDES, GuideItem } from "../data/siteData";
import { IMAGES } from "../data/images";
import { Compass, MessageSquare, Award, Globe, Phone, ArrowRight, CheckCircle } from "lucide-react";

interface GuidesProps {
  onOpenInquiry: (title?: string, category?: "activity" | "stay" | "guide" | "general") => void;
}

export const Guides: React.FC<GuidesProps> = ({ onOpenInquiry }) => {
  const [inquirySent, setInquirySent] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState("Ngabo Jean d'Amour");
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleGuideInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="w-full bg-[#FDFBF7]">
      {/* Header */}
      <section className="bg-[#1B4332] text-white py-20 px-6 sm:px-8 lg:px-12 border-b border-stone-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DDA15E]">
            Community Storytellers
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FDFBF7] text-balance">
            Meet the Local Guides of Bigogwe
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-2xl mx-auto leading-relaxed font-light">
            Passionate pastoral historians, master artisans, and experienced ridge trekkers who call Bigogwe home and bring every pasture and ancient custom to life.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-16">
        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LOCAL_GUIDES.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all p-6 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#1B4332] text-[#DDA15E] flex items-center justify-center font-serif font-bold text-xl shrink-0">
                    {guide.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#1B4332]">
                      {guide.name}
                    </h3>
                    <span className="text-xs font-semibold text-[#BC6C25] block">
                      {guide.role}
                    </span>
                    <span className="text-2xs text-stone-400">
                      {guide.origin}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  {guide.bio}
                </p>

                <div className="space-y-2 pt-3 border-t border-stone-100 text-xs">
                  <div>
                    <span className="text-2xs uppercase tracking-wider text-stone-400 font-semibold block mb-1">
                      Specialties:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {guide.specialties.map((spec, idx) => (
                        <span key={idx} className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded text-2xs">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-2xs uppercase tracking-wider text-stone-400 font-semibold block mb-0.5">
                      Languages Spoken:
                    </span>
                    <span className="text-stone-700">
                      {guide.languages.join(" · ")}
                    </span>
                  </div>

                  <div className="pt-1">
                    <span className="text-2xs uppercase tracking-wider text-[#1B4332] font-semibold block mb-0.5">
                      Signature Experience:
                    </span>
                    <span className="text-stone-800 font-medium italic">
                      "{guide.highlightTour}"
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => onOpenInquiry(`Private Tour with ${guide.name}`, "guide")}
                  className="w-full py-2 text-xs font-semibold text-center text-white bg-[#1B4332] hover:bg-[#143826] rounded-lg transition-colors shadow-xs"
                >
                  Request Guide
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Direct Guide Inquiry Form */}
        <div className="bg-[#F4EEDF]/50 rounded-2xl p-8 sm:p-12 border border-stone-200">
          <div className="max-w-2xl mx-auto text-center mb-8 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
              Direct Inquiry
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#1B4332]">
              Inquire Directly with Bigogwe Guide Desk
            </h2>
            <p className="text-xs text-stone-600 font-light">
              Connect with our coordinator to match your dates, language preference, and itinerary with the ideal local guide.
            </p>
          </div>

          <div className="max-w-xl mx-auto bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs">
            {inquirySent ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-serif font-bold text-[#1B4332]">
                  Message Sent to Guide Desk!
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong>{visitorName}</strong>. Our local coordinator will connect you with {selectedGuide} within a few hours.
                </p>
                <button
                  type="button"
                  onClick={() => setInquirySent(false)}
                  className="text-xs text-[#1B4332] font-semibold underline mt-2"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleGuideInquiry} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Select Preferred Guide
                  </label>
                  <select
                    value={selectedGuide}
                    onChange={(e) => setSelectedGuide(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#DDA15E] focus:outline-none"
                  >
                    {LOCAL_GUIDES.map((g) => (
                      <option key={g.id} value={g.name}>
                        {g.name} – {g.role}
                      </option>
                    ))}
                    <option value="Any Available Expert Guide">Any Available Expert Guide</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. David Smith"
                      value={visitorName}
                      onChange={(e) => setVisitorName(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#DDA15E] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Email or WhatsApp
                    </label>
                    <input
                      type="text"
                      placeholder="email@example.com or +250..."
                      value={visitorEmail}
                      onChange={(e) => setVisitorEmail(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#DDA15E] focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Dates & Tour Inquiries
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us your planned arrival date, number of people, and specific things you'd love to see or learn..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#DDA15E] focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 text-xs font-semibold text-white bg-[#1B4332] hover:bg-[#143826] rounded-lg transition-colors shadow-xs"
                >
                  Send Guide Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
