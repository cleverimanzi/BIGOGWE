import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { InquiryModal } from "./components/InquiryModal";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Cattle } from "./pages/Cattle";
import { MilkCulture } from "./pages/MilkCulture";
import { TraditionalTools } from "./pages/TraditionalTools";
import { Clothing } from "./pages/Clothing";
import { Culture } from "./pages/Culture";
import { Tourism } from "./pages/Tourism";
import { Activities } from "./pages/Activities";
import { Accommodation } from "./pages/Accommodation";
import { Guides } from "./pages/Guides";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";

// Helper component to scroll to top whenever route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Bigogwe Cultural Tour");
  const [modalCategory, setModalCategory] = useState<"activity" | "stay" | "guide" | "general">("activity");

  const handleOpenInquiry = (
    title: string = "Bigogwe Cultural Experience",
    category: "activity" | "stay" | "guide" | "general" = "activity"
  ) => {
    setModalTitle(title);
    setModalCategory(category);
    setModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setModalOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#292524] selection:bg-[#E09F3E]/30 selection:text-[#1B4332]">
        {/* Navigation Bar */}
        <Navbar onOpenInquiry={handleOpenInquiry} />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/about" element={<About />} />
            <Route path="/cattle" element={<Cattle onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/milk-culture" element={<MilkCulture onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/tools" element={<TraditionalTools onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/clothing" element={<Clothing onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/culture" element={<Culture onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/tourism" element={<Tourism onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/activities" element={<Activities onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/accommodation" element={<Accommodation onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/guides" element={<Guides onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home onOpenInquiry={handleOpenInquiry} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Interactive Inquiry / Booking Modal */}
        <InquiryModal
          isOpen={modalOpen}
          onClose={handleCloseInquiry}
          initialItemTitle={modalTitle}
          category={modalCategory}
        />
      </div>
    </BrowserRouter>
  );
}
