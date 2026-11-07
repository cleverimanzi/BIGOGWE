import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, Sparkles, HeartHandshake, ShieldCheck, Mountain, Camera } from "lucide-react";
import { ImageSlider } from "../components/ImageSlider";
import { IMAGES } from "../data/images";
import { TOURIST_ACTIVITIES } from "../data/siteData";
import { TouristCard } from "../components/TouristCard";

interface HomeProps {
  onOpenInquiry: (title?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenInquiry }) => {
  return (
    <div className="w-full bg-[#FDFBF7]">
      {/* 1. Large Hero Section with Automatic Image Slider */}
      <ImageSlider />

      {/* 2. Key Facts / Institutional Ribbon */}
      <section className="bg-[#143826] text-white py-8 border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="text-2xl lg:text-3xl font-serif font-bold text-[#DDA15E]">2,300m</span>
              <p className="text-xs uppercase tracking-wider text-stone-300">Highland Elevation</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl lg:text-3xl font-serif font-bold text-[#DDA15E]">Inyambo</span>
              <p className="text-xs uppercase tracking-wider text-stone-300">Royal Cattle Lineage</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl lg:text-3xl font-serif font-bold text-[#DDA15E]">100%</span>
              <p className="text-xs uppercase tracking-wider text-stone-300">Community-Led Tourism</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl lg:text-3xl font-serif font-bold text-[#DDA15E]">Virunga</span>
              <p className="text-xs uppercase tracking-wider text-stone-300">Volcanic Backdrop</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Short Introduction to Bigogwe */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
            Introduction to Bigogwe
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B4332] text-balance">
            Where Ancient Pastoral Heritage Meets The Rolling Green Hills of Rwanda
          </h2>
          <div className="w-16 h-0.5 bg-[#DDA15E] mx-auto my-4" />
          <p className="text-base text-stone-700 leading-relaxed font-light">
            Perched gracefully in Nyabihu District between Musanze and Lake Kivu, Bigogwe is renowned across Rwanda as the cradle of pastoral cattle culture. Here, generation after generation of cattle keepers have nurtured the majestic Inyambo—the regal long-horned cattle revered for their gentle poise, melodic name-calls, and sacred bond with the community.
          </p>
          <p className="text-base text-stone-700 leading-relaxed font-light">
            With mist-crowned volcanic ridges, rich volcanic soils feeding perpetual green pastures, and the fragrant smoke of cured <em className="font-serif">Ibyanzi</em> milk pots, Bigogwe welcomes you to experience authentic Rwandan warmth, living folklore, and eco-tourism.
          </p>
        </div>
      </section>

      {/* 4. Four Featured Sections (Cards Linking to other pages) */}
      <section className="py-16 bg-[#F4EEDF]/50 border-y border-stone-200/70">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
                Curated Pillars
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332] mt-1">
                Explore the Four Pillars of Bigogwe
              </h2>
            </div>
            <Link
              to="/tourism"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4332] hover:text-[#BC6C25] transition-colors"
            >
              <span>View all attractions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Cattle Farming */}
            <div className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                  <img
                    src={IMAGES.cattle1}
                    onError={(e) => {
                      e.currentTarget.src = IMAGES.urls.pin1;
                    }}
                    alt="Ankole Cattle in Bigogwe"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-[#DDA15E] uppercase tracking-wider">
                    Cattle Farming
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-serif font-semibold text-[#1B4332] group-hover:text-[#BC6C25] transition-colors">
                    Our Ankole Cattle
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Long-horned Inyambo, royal parade traditions, gentle whistles, and the sacred bond between herder and herd.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  to="/cattle"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B4332] hover:text-[#BC6C25] transition-colors"
                >
                  <span>Learn about our cattle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 2. Milk Culture */}
            <div className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                  <img
                    src={IMAGES.milk}
                    onError={(e) => {
                      e.currentTarget.src = IMAGES.urls.pin5;
                    }}
                    alt="Traditional Milk Vessels and Calabash"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-[#DDA15E] uppercase tracking-wider">
                    Milk Heritage
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-serif font-semibold text-[#1B4332] group-hover:text-[#BC6C25] transition-colors">
                    Sacred Milk Culture
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Ancestral milking rituals, herbal smoking (Gukurungira), artisanal butter churning, and the gift of Kugabira Amata.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  to="/milk-culture"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B4332] hover:text-[#BC6C25] transition-colors"
                >
                  <span>Explore milk culture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 3. Traditional Heritage */}
            <div className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                  <img
                    src={IMAGES.culture}
                    alt="Traditional Rwandan Dance"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-[#DDA15E] uppercase tracking-wider">
                    Traditions & Dance
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-serif font-semibold text-[#1B4332] group-hover:text-[#BC6C25] transition-colors">
                    Culture & Traditions
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Intore heroic warrior dances, the graceful Amaraba cow dance, heroic poetry (Ibyivugo), and traditional clothing.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  to="/culture"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B4332] hover:text-[#BC6C25] transition-colors"
                >
                  <span>Discover traditions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 4. Tourism & Landscapes */}
            <div className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                  <img
                    src={IMAGES.tourism}
                    onError={(e) => {
                      e.currentTarget.src = IMAGES.urls.pin6;
                    }}
                    alt="Bigogwe Tourism Experience"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-[#DDA15E] uppercase tracking-wider">
                    Nature & Tourism
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-serif font-semibold text-[#1B4332] group-hover:text-[#BC6C25] transition-colors">
                    Tourism & Attractions
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Volcanic panoramas, green hill ridge trails, sunset photography, pastoral homestays, and community-guided tours.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  to="/tourism"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B4332] hover:text-[#BC6C25] transition-colors"
                >
                  <span>Discover attractions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Authentic Bigogwe Sights Photographic Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
              Authentic Sights
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332] mt-1">
              Snapshots of Daily Life in Bigogwe
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-xl">
              From the iconic heart-shaped horns to traveler moments with the herds and traditional calabashes.
            </p>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4332] hover:text-[#BC6C25] transition-colors"
          >
            <span>Explore full gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Heart-shaped horn cow */}
          <div className="group relative aspect-3/4 rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all">
            <img
              src={IMAGES.cattle3}
              onError={(e) => { e.currentTarget.src = IMAGES.urls.pin3; }}
              alt="Heart-shaped horns Ankole cow"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="text-2xs text-[#DDA15E] uppercase tracking-wider font-semibold">Iconic Heritage</span>
              <h4 className="text-sm font-serif font-bold text-[#FDFBF7]">Heart-Shaped Horns</h4>
              <p className="text-2xs text-stone-300">Nature's poetic symbol of Rwandan peace</p>
            </div>
          </div>

          {/* Card 2: Cattle Procession Trail */}
          <div className="group relative aspect-3/4 rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all">
            <img
              src={IMAGES.cattle2}
              onError={(e) => { e.currentTarget.src = IMAGES.urls.pin2; }}
              alt="Royal herd procession on dirt trail"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="text-2xs text-[#DDA15E] uppercase tracking-wider font-semibold">Pastoral Journey</span>
              <h4 className="text-sm font-serif font-bold text-[#FDFBF7]">Royal Inyambo Procession</h4>
              <p className="text-2xs text-stone-300">Century-old grazing trails across the knolls</p>
            </div>
          </div>

          {/* Card 3: Calabash Milk Hospitality */}
          <div className="group relative aspect-3/4 rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all">
            <img
              src={IMAGES.milk}
              onError={(e) => { e.currentTarget.src = IMAGES.urls.pin5; }}
              alt="Visitor holding traditional milk calabash in Bigogwe"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="text-2xs text-[#DDA15E] uppercase tracking-wider font-semibold">Living Milk Tradition</span>
              <h4 className="text-sm font-serif font-bold text-[#FDFBF7]">The Igisabo Calabash</h4>
              <p className="text-2xs text-stone-300">Traditional butter churning and welcome</p>
            </div>
          </div>

          {/* Card 4: Framed by Horns */}
          <div className="group relative aspect-3/4 rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all">
            <img
              src={IMAGES.tourism}
              onError={(e) => { e.currentTarget.src = IMAGES.urls.pin6; }}
              alt="Traveler with herder staff framed by long horns"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="text-2xs text-[#DDA15E] uppercase tracking-wider font-semibold">Eco-Tourism</span>
              <h4 className="text-sm font-serif font-bold text-[#FDFBF7]">Highland Cattle Experience</h4>
              <p className="text-2xs text-stone-300">Unforgettable connection with gentle giants</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured Activities Preview */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 bg-[#F4EEDF]/40 border-t border-stone-200">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
              Visitor Experiences
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332] mt-1">
              Popular Activities for Travelers
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-xl">
              Authentic, hands-on encounters designed with local pastoral families and youth guides.
            </p>
          </div>
          <Link
            to="/activities"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4332] hover:text-[#BC6C25] transition-colors"
          >
            <span>View all 6 activities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOURIST_ACTIVITIES.slice(0, 3).map((act) => (
            <TouristCard key={act.id} activity={act} onBook={onOpenInquiry} />
          ))}
        </div>
      </section>

      {/* 7. Tourism Call-to-Action Section with Background Image */}
      <section className="relative overflow-hidden py-24 px-6 sm:px-8 lg:px-12 my-12 mx-4 sm:mx-8 lg:mx-12 rounded-2xl shadow-xl">
        {/* Background Image requested for home background */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.cattle2}
            onError={(e) => { e.currentTarget.src = IMAGES.urls.pin2; }}
            alt="Bigogwe cattle background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          {/* Deep forest green overlay scrim for high contrast and elegance */}
          <div className="absolute inset-0 bg-[#0F281E]/88 backdrop-blur-xs" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6 text-white">
          <span className="text-xs uppercase tracking-widest text-[#DDA15E] font-semibold">
            Plan Your Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FDFBF7] text-balance">
            Ready to Walk With the Herds on the Emerald Hills of Bigogwe?
          </h2>
          <p className="text-sm sm:text-base text-stone-200/90 leading-relaxed font-light max-w-xl mx-auto">
            Whether you are on a day tour from Musanze or spending a quiet weekend in the pastures, our local guides are eager to share our heritage with you.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenInquiry("Custom Tour Inquiry")}
              className="px-6 py-3 text-sm font-semibold text-[#143826] bg-[#DDA15E] hover:bg-[#BC6C25] hover:text-white rounded-lg transition-all shadow-md"
            >
              Book a Guided Tour
            </button>
            <Link
              to="/contact"
              className="px-6 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-lg transition-colors"
            >
              Contact Travel Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
