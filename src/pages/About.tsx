import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Compass, Users, Sparkles, ArrowRight } from "lucide-react";
import { IMAGES } from "../data/images";

export const About: React.FC = () => {
  return (
    <div className="w-full bg-[#FDFBF7]">
      {/* Editorial Header */}
      <section className="border-b border-stone-200/80 bg-[#F4EEDF]/40 py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
            <span>About Bigogwe</span>
            <span>·</span>
            <span>Nyabihu, Rwanda</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1B4332] text-balance">
            History, Geography & The Living Soul of Rwanda's Pastoral Heartland
          </h1>
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
            An intimate chronicle of a region shaped by high volcanic pastures, generational devotion to the regal Inyambo cattle, and enduring community solidarity.
          </p>
        </div>
      </section>

      {/* Main Narrative Split */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Reading Column (70%) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Chapter 1: History */}
            <article className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
                01. Historical Roots
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">
                The Pastoral Heritage of Bigogwe
              </h2>
              <div className="text-stone-700 leading-relaxed space-y-4 font-light text-base">
                <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#1B4332]">
                  For centuries, the lush volcanic slopes of Bigogwe have served as one of Rwanda's premier pastoral sanctuaries. Historically favored by Rwandan royal dynasties for pasturing royal herds (<em className="font-serif">Inyambo</em>), this land possessed the rare combination of year-round rainfall, mineral-rich soils, and sweet kikuyu grass.
                </p>
                <p>
                  Pastoralists in Bigogwe developed sophisticated pastoral traditions, from rotational grazing rhythms to oral poetry recited in praise of individual cows (<em className="font-serif">Ibyivugo by'Inka</em>). During the pre-colonial era, cattle were never mere livestock; they represented life itself, social contracts, and the divine blessing of fertility.
                </p>
              </div>
            </article>

            {/* Visual Break */}
            <div className="overflow-hidden rounded-xl border border-stone-200">
              <img
                src={IMAGES.cattle2}
                onError={(e) => { e.currentTarget.src = IMAGES.urls.pin2; }}
                alt="Bigogwe cattle procession"
                referrerPolicy="no-referrer"
                className="w-full aspect-16/9 object-cover"
              />
              <div className="p-3 bg-stone-100 text-xs text-stone-600 italic">
                Fig 1. Royal Inyambo cattle procession along the historic pastoral trails of Bigogwe.
              </div>
            </div>

            {/* Chapter 2: Geographical Location */}
            <article className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
                02. Topography & Environment
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">
                Geographical Setting: 2,300 Meters High
              </h2>
              <div className="text-stone-700 leading-relaxed space-y-4 font-light text-base">
                <p>
                  Bigogwe is situated in the <strong>Western Province of Rwanda, Nyabihu District</strong>, along the scenic national highway (RN4) connecting the northern tourism capital of Musanze with the vibrant lakeside city of Rubavu (Gisenyi) on Lake Kivu.
                </p>
                <p>
                  Towering at an average elevation of <strong>2,300 meters above sea level</strong>, the climate is refreshingly cool, misty in the mornings, and blessed with temperate daytime breezes. Directly north-west lie the dramatic peaks of the Virunga Massif—Mount Karisimbi (4,507m) and Mount Bisoke—which cast an awe-inspiring volcanic backdrop across every pasture.
                </p>
              </div>
            </article>

            {/* Chapter 3: Community Lifestyle */}
            <article className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
                03. Everyday Rhythms
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">
                Community Lifestyle & Pastoral Rhythms
              </h2>
              <div className="text-stone-700 leading-relaxed space-y-4 font-light text-base">
                <p>
                  Life in Bigogwe unfolds in harmony with the pastoral clock. The morning begins before dawn with the soft clatter of carved wooden milk pots (<em className="font-serif">Ibyanzi</em>) and the sweet, melodic whistling used by milkers to calm mother cows. As the mountain mist lifts, herds are guided up the winding ridgelines to graze freely in communal pastures.
                </p>
                <p>
                  In the afternoon, women gather to weave the intricate geometric lids (<em className="font-serif">Umunega</em>) and peace baskets (<em className="font-serif">Agaseke</em>), while elders teach younger generations the art of herding, flute playing, and heroic recitation around evening hearths.
                </p>
              </div>
            </article>

            {/* Chapter 4: Importance of Cattle */}
            <article className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
                04. Spiritual & Cultural Value
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">
                The Importance of Cattle in Local Traditions
              </h2>
              <div className="text-stone-700 leading-relaxed space-y-4 font-light text-base">
                <p>
                  In Rwandan philosophy, a cow (<em className="font-serif">Inka</em>) is not evaluated by commercial kilograms, but by spiritual dignity, family prosperity, and social bonding. The traditional greeting <strong className="font-serif italic text-stone-900">"Amashyo!"</strong> literally translates to <em>"May you have herds of cattle!"</em>, to which one joyfully replies <strong className="font-serif italic text-stone-900">"Amashongore!"</strong> (<em>"May you have healthy female calves!"</em>).
                </p>
                <p>
                  The ancient practice of <strong className="text-stone-900">Kugabira</strong>—gifting a cow to a friend, neighbor, or in-law—establishes a lifelong bond of mutual trust, kinship, and peace. To this day, cattle ceremonies such as <em className="font-serif">Kwita Izina ry'Inka</em> (giving names to newborn calves based on their character and coat pattern) remain joyful community milestones in Bigogwe.
                </p>
              </div>
            </article>
          </div>

          {/* Sidebar Fact Sheet (30%) */}
          <div className="lg:col-span-4 space-y-8 sticky top-28">
            {/* Quick Fact Box */}
            <div className="bg-[#F4EEDF]/60 rounded-xl p-6 border border-stone-200 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1B4332] border-b border-stone-300 pb-2">
                Bigogwe Quick Facts
              </h3>
              <dl className="text-xs space-y-3">
                <div>
                  <dt className="text-stone-500 font-medium">Country & Province</dt>
                  <dd className="text-stone-900 font-semibold mt-0.5">Rwanda · Western Province</dd>
                </div>
                <div>
                  <dt className="text-stone-500 font-medium">District & Sector</dt>
                  <dd className="text-stone-900 font-semibold mt-0.5">Nyabihu District · Bigogwe Sector</dd>
                </div>
                <div>
                  <dt className="text-stone-500 font-medium">Average Elevation</dt>
                  <dd className="text-stone-900 font-semibold mt-0.5">2,300 meters (7,545 feet)</dd>
                </div>
                <div>
                  <dt className="text-stone-500 font-medium">Accessibility</dt>
                  <dd className="text-stone-900 font-semibold mt-0.5">Paved RN4 Highway (30m from Musanze, 40m from Rubavu)</dd>
                </div>
                <div>
                  <dt className="text-stone-500 font-medium">Primary Heritage</dt>
                  <dd className="text-stone-900 font-semibold mt-0.5">Inyambo Cattle, Milk Culture & Cultural Eco-Tourism</dd>
                </div>
              </dl>
            </div>

            {/* Pastoral Quote Card */}
            <div className="bg-[#1B4332] text-white rounded-xl p-6 shadow-sm space-y-3">
              <span className="text-2xs uppercase tracking-widest text-[#DDA15E] font-semibold">
                Traditional Proverb
              </span>
              <p className="font-serif italic text-base leading-snug text-[#FDFBF7]">
                "Uwicaranye n'inka, ntarambirwa."
              </p>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                "Whoever sits in the quiet company of peaceful cattle never grows weary or lonely."
              </p>
            </div>

            {/* Next Step Nav */}
            <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                Continue Exploring
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link to="/cattle" className="flex items-center justify-between text-[#1B4332] hover:text-[#BC6C25] font-medium py-1">
                    <span>Our Sacred Cattle</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
                <li>
                  <Link to="/milk-culture" className="flex items-center justify-between text-[#1B4332] hover:text-[#BC6C25] font-medium py-1">
                    <span>Milk Heritage & Ibyanzi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
                <li>
                  <Link to="/tourism" className="flex items-center justify-between text-[#1B4332] hover:text-[#BC6C25] font-medium py-1">
                    <span>Tourism & Rolling Hills</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
