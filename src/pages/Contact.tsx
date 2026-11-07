import React, { useState } from "react";
import { FAQS } from "../data/siteData";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ChevronDown } from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="w-full bg-[#FDFBF7]">
      {/* Header */}
      <section className="bg-[#1B4332] text-white py-20 px-6 sm:px-8 lg:px-12 border-b border-stone-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#DDA15E]">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FDFBF7] text-balance">
            Contact the Bigogwe Tourism Desk
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-2xl mx-auto leading-relaxed font-light">
            Plan your visit, book custom cattle tours, organize media photography shoots, or simply say hello to our local pastoral community.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-xs space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
                Send a Message
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#1B4332] mt-1">
                How Can We Help You?
              </h2>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <CheckCircle className="w-14 h-14 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-serif font-bold text-[#1B4332]">
                  Message Received! Murakoze!
                </h3>
                <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out, <strong>{formData.name}</strong>. Our visitor desk team in Bigogwe will review your inquiry and reply to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 px-5 py-2 text-xs font-semibold text-white bg-[#1B4332] hover:bg-[#143826] rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Samuel Mugisha"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DDA15E]"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DDA15E]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone number field */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+250 788 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DDA15E]"
                      required
                    />
                  </div>

                  {/* Subject field */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tour Inquiry / Media Filming / School Visit"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DDA15E]"
                      required
                    />
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe your planned visit dates, group size, specific inquiries or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DDA15E]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-[#1B4332] hover:bg-[#143826] rounded-lg transition-colors inline-flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Location & Visitor Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location Card */}
            <div className="bg-[#F4EEDF]/60 p-8 rounded-2xl border border-stone-200 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
                Location Information
              </span>
              <h3 className="text-xl font-serif font-bold text-[#1B4332]">
                Visiting Bigogwe
              </h3>

              <div className="space-y-3 text-xs text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#BC6C25] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-semibold">Address:</strong>
                    <span>Bigogwe Sector, Nyabihu District, Western Province, Rwanda</span>
                    <span className="text-stone-500 block mt-0.5">Along RN4 Kigali-Musanze-Rubavu Highway</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#BC6C25] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-semibold">Phone / WhatsApp:</strong>
                    <span>+250 788 123 456 (Local Tourism Desk)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#BC6C25] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-semibold">Email:</strong>
                    <span>info@visitbigogwe.rw / tours@visitbigogwe.rw</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#BC6C25] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-semibold">Hours:</strong>
                    <span>Open 7 days a week: 07:00 AM – 06:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-stone-300">
                <span className="text-2xs uppercase tracking-wider text-stone-500 font-semibold block mb-2">
                  Connect on Social Media:
                </span>
                <div className="flex items-center gap-3 text-xs font-medium text-[#1B4332]">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#BC6C25] underline">
                    X (Twitter)
                  </a>
                  <span>·</span>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#BC6C25] underline">
                    Instagram
                  </a>
                  <span>·</span>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#BC6C25] underline">
                    YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Travel Directions Note */}
            <div className="bg-[#143826] text-white p-6 rounded-2xl space-y-2">
              <h4 className="font-serif font-bold text-base text-[#DDA15E]">
                Directions by Road
              </h4>
              <p className="text-xs text-stone-200 leading-relaxed font-light">
                Bigogwe sits along the main national asphalt highway RN4. Public buses between Kigali and Rubavu (via Musanze) run every 30 minutes and can drop you right at the Bigogwe trading center.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="pt-12 border-t border-stone-200 space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BC6C25]">
              Common Questions
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#1B4332] mt-1">
              Frequently Asked Questions for Visitors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-stone-200 p-5 space-y-2"
              >
                <h4 className="text-sm font-serif font-bold text-[#1B4332]">
                  {faq.question}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
