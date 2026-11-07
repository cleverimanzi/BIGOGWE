import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F281E] text-stone-300 border-t border-stone-800">
      {/* Top Banner Ribbon: Cultural Tagline & Quick Connect */}
      <div className="border-b border-white/10 bg-[#0A1D16] py-4 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-[#DDA15E]">
            <span className="font-serif italic font-normal text-sm sm:text-base text-[#FDFBF7]">
              "Discover Bigogwe – Where Culture, Cattle and Nature Meet."
            </span>
          </div>
          <div className="flex items-center gap-6 text-stone-400">
            <span>Nyabihu District, Western Province</span>
            <span aria-hidden="true">·</span>
            <span>Elevation: 2,300m</span>
            <span aria-hidden="true">·</span>
            <span>Rwanda</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-[#FDFBF7]">
              BIGOGWE
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              The official cultural heritage and tourism portal celebrating the revered Ankole long-horned cattle, traditional milk culture, rolling volcanic hills, and hospitable pastoralist community of Bigogwe, Rwanda.
            </p>
            <div className="pt-2 text-xs text-stone-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#DDA15E] shrink-0" />
                <span>Bigogwe Sector, Along RN4 Musanze-Rubavu Highway</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#DDA15E] shrink-0" />
                <span>Visitor Centre Hours: Daily 07:00 – 18:00</span>
              </div>
            </div>
          </div>

          {/* Col 2: Heritage & Traditions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DDA15E] mb-4">
              Cattle & Heritage
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Bigogwe
                </Link>
              </li>
              <li>
                <Link to="/cattle" className="hover:text-white transition-colors">
                  Our Inyambo Cattle
                </Link>
              </li>
              <li>
                <Link to="/milk-culture" className="hover:text-white transition-colors">
                  Milk Culture & Ibyanzi
                </Link>
              </li>
              <li>
                <Link to="/tools" className="hover:text-white transition-colors">
                  Traditional Tools
                </Link>
              </li>
              <li>
                <Link to="/clothing" className="hover:text-white transition-colors">
                  Traditional Clothing
                </Link>
              </li>
              <li>
                <Link to="/culture" className="hover:text-white transition-colors">
                  Intore & Traditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Tourism & Experiences */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DDA15E] mb-4">
              Tourism & Travel
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/tourism" className="hover:text-white transition-colors">
                  Attractions & Hills
                </Link>
              </li>
              <li>
                <Link to="/activities" className="hover:text-white transition-colors">
                  Tourist Activities
                </Link>
              </li>
              <li>
                <Link to="/accommodation" className="hover:text-white transition-colors">
                  Where to Stay
                </Link>
              </li>
              <li>
                <Link to="/guides" className="hover:text-white transition-colors">
                  Local Tourist Guides
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Photo & Video Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Community Inquiries */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DDA15E] mb-4">
              Direct Contact
            </h4>
            <p className="text-xs text-stone-400 mb-3 leading-relaxed">
              Inquire about guided cattle walks, school educational tours, and media shoots.
            </p>
            <div className="space-y-2 text-xs">
              <a
                href="mailto:info@visitbigogwe.rw"
                className="flex items-center gap-2 hover:text-[#DDA15E] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#DDA15E]" />
                <span>info@visitbigogwe.rw</span>
              </a>
              <a
                href="tel:+250788123456"
                className="flex items-center gap-2 hover:text-[#DDA15E] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#DDA15E]" />
                <span>+250 788 123 456 (Desk)</span>
              </a>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10">
              <span className="text-2xs uppercase tracking-wider text-stone-400 block mb-2">
                Follow Bigogwe
              </span>
              <div className="flex items-center gap-3 text-xs">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Twitter / X
                </a>
                <span>·</span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <span>·</span>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} BIGOGWE Cultural Heritage & Tourism Initiative. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-2xs">
            <span>Community Tourism Rwanda</span>
            <span>·</span>
            <span>Preserving Pastoral Traditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
