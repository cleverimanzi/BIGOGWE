import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Compass, PhoneCall } from "lucide-react";

interface NavbarProps {
  onOpenInquiry: (title?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Secondary pages dropdown list
  const heritageLinks = [
    { name: "Traditional Tools", path: "/tools", desc: "Ibyanzi, calabashes & wooden vessels" },
    { name: "Traditional Clothing", path: "/clothing", desc: "Umushanana & cultural regalia" },
    { name: "Culture & Traditions", path: "/culture", desc: "Intore dances & pastoral poetry" },
    { name: "Tourist Activities", path: "/activities", desc: "Milking, hikes & photography" },
    { name: "Accommodation", path: "/accommodation", desc: "Campsites, guesthouses & lodges" },
    { name: "Local Guides", path: "/guides", desc: "Meet the passionate Bigogwe storytellers" },
    { name: "Contact Desk", path: "/contact", desc: "Directions, visiting info & messaging" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FDFBF7]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <Link
          to="/"
          className="text-2xl font-serif font-bold tracking-tight text-[#1B4332] whitespace-nowrap shrink-0 hover:text-[#BC6C25] transition-colors"
        >
          BIGOGWE
        </Link>

        {/* Zone 2: 4-5 clean single-line text navigation links + More Hub */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-700">
          <Link
            to="/about"
            className={`whitespace-nowrap shrink-0 transition-colors ${
              isActive("/about")
                ? "text-[#1B4332] font-semibold border-b-2 border-[#DDA15E] pb-0.5"
                : "hover:text-[#1B4332]"
            }`}
          >
            About
          </Link>

          <Link
            to="/cattle"
            className={`whitespace-nowrap shrink-0 transition-colors ${
              isActive("/cattle")
                ? "text-[#1B4332] font-semibold border-b-2 border-[#DDA15E] pb-0.5"
                : "hover:text-[#1B4332]"
            }`}
          >
            Our Cattle
          </Link>

          <Link
            to="/milk-culture"
            className={`whitespace-nowrap shrink-0 transition-colors ${
              isActive("/milk-culture")
                ? "text-[#1B4332] font-semibold border-b-2 border-[#DDA15E] pb-0.5"
                : "hover:text-[#1B4332]"
            }`}
          >
            Milk Culture
          </Link>

          <Link
            to="/tourism"
            className={`whitespace-nowrap shrink-0 transition-colors ${
              isActive("/tourism")
                ? "text-[#1B4332] font-semibold border-b-2 border-[#DDA15E] pb-0.5"
                : "hover:text-[#1B4332]"
            }`}
          >
            Tourism
          </Link>

          <Link
            to="/gallery"
            className={`whitespace-nowrap shrink-0 transition-colors ${
              isActive("/gallery")
                ? "text-[#1B4332] font-semibold border-b-2 border-[#DDA15E] pb-0.5"
                : "hover:text-[#1B4332]"
            }`}
          >
            Gallery
          </Link>

          {/* More Heritage & Travel Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 py-2 text-stone-700 hover:text-[#1B4332] transition-colors whitespace-nowrap shrink-0"
              aria-expanded={dropdownOpen}
            >
              <span>Explore More</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 w-72 bg-[#FDFBF7] rounded-xl shadow-xl border border-stone-200 py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="px-3 py-1.5 text-2xs uppercase tracking-wider text-stone-400 font-semibold border-b border-stone-100">
                  Cultural Heritage & Travel
                </div>
                {heritageLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-3.5 py-2 hover:bg-stone-100/80 transition-colors group"
                  >
                    <div className="text-xs font-semibold text-stone-800 group-hover:text-[#1B4332]">
                      {item.name}
                    </div>
                    <div className="text-2xs text-stone-500 line-clamp-1">
                      {item.desc}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenInquiry("General Tour Inquiry")}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#1B4332] hover:bg-[#143826] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            Plan Your Visit
          </button>
        </div>

        {/* Mobile Hamburger button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-[#1B4332] rounded-lg hover:bg-stone-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-stone-200 px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <div className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
              Main Menu
            </div>
            {[
              { name: "Home", path: "/" },
              { name: "About Bigogwe", path: "/about" },
              { name: "Our Cattle", path: "/cattle" },
              { name: "Milk Culture", path: "/milk-culture" },
              { name: "Traditional Tools", path: "/tools" },
              { name: "Traditional Clothing", path: "/clothing" },
              { name: "Culture & Traditions", path: "/culture" },
              { name: "Tourism & Attractions", path: "/tourism" },
              { name: "Tourist Activities", path: "/activities" },
              { name: "Accommodation", path: "/accommodation" },
              { name: "Local Guides", path: "/guides" },
              { name: "Photo Gallery", path: "/gallery" },
              { name: "Contact Desk", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-[#1B4332] font-semibold"
                    : "text-stone-700 hover:text-[#1B4332]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-stone-200">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry("General Tour Inquiry");
              }}
              className="w-full py-2.5 text-xs font-semibold text-center text-white bg-[#1B4332] hover:bg-[#143826] rounded-lg transition-colors"
            >
              Plan Your Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
