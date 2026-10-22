import React, { useState } from 'react';
import { Copy, Check, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

export const ContactTerminal: React.FC = () => {
  const { personalInfo } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${personalInfo.email}?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
    window.location.href = mailto;
    setFormSubmitted(true);
  };

  return (
    <section id="contact-section" className="relative bg-[#07080a] border-t border-white/[0.08] py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Wireframe Arcs */}
      <div className="absolute top-1/3 -left-48 w-[650px] h-[650px] wireframe-circle opacity-15 pointer-events-none" />
      <div className="absolute bottom-10 -right-36 w-[550px] h-[550px] wireframe-circle opacity-10 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto relative z-10">
        
        {/* Header with Signature Orb (Slice 8 style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-6">
          <div className="flex items-center gap-5">
            <div className="section-orb shrink-0">
              <span>CONTACT</span>
            </div>
            <div>
              <div className="mb-2 font-mono text-xs text-white/50 tracking-widest uppercase">
                <span>CONNECT</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display">
                Let's Build Together.
              </h2>
            </div>
          </div>

          <div className="font-mono text-xs text-white/50">
            <span>FULL-TIME &amp; FREELANCE ROLES</span>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Message Form (Slice 8 style) */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl p-6 sm:p-10 bg-[#111317] border border-white/10 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-white/60 mb-6 font-normal">
              Have a project or role opportunity? Drop a note below or reach out directly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-white/50 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Henderson"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-white/40 focus:outline-none text-white text-sm font-sans placeholder:text-white/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-white/50 mb-1.5">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-white/40 focus:outline-none text-white text-sm font-sans placeholder:text-white/20 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-white/50 mb-1.5">Message / Project Inquiry</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, role opportunity, or timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-white/40 focus:outline-none text-white text-sm font-sans placeholder:text-white/20 transition-colors resize-none"
                />
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="rounded-full bg-white text-zinc-950 font-bold px-8 py-3.5 text-xs sm:text-sm tracking-wider uppercase shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:bg-zinc-200 hover:scale-[1.01] active:scale-[0.99] transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Send Dispatch</span>
                  <Send className="w-4 h-4 text-zinc-950" />
                </button>
                {formSubmitted && (
                  <div className="flex items-center gap-2 text-xs font-mono text-white">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Email client opened</span>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Right Column: Direct Channels & Social Cards (Slice 8 style) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Email Direct Copy Card */}
            <div className="p-6 rounded-2xl sm:rounded-3xl bg-[#111317] border border-white/10 flex flex-col justify-between group shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase text-white/40">Direct Inbox</span>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="text-xs font-mono text-white/70 hover:text-white flex items-center gap-1.5 p-1 px-2.5 rounded-full bg-white/5 border border-white/10 transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="text-base sm:text-lg font-bold text-white font-mono break-all mb-1">
                {personalInfo.email}
              </div>
              <p className="text-xs text-white/50">Replies within 24 hours.</p>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-6 rounded-2xl sm:rounded-3xl bg-[#111317] border border-white/10 flex flex-col justify-between group shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase text-white/40">Phone / WhatsApp</span>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="text-xs font-mono text-white/70 hover:text-white flex items-center gap-1.5 p-1 px-2.5 rounded-full bg-white/5 border border-white/10 transition-colors cursor-pointer"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="text-base sm:text-lg font-bold text-white font-mono mb-1">
                {personalInfo.phone}
              </div>
              <p className="text-xs text-white/50">Available for calls &amp; WhatsApp.</p>
            </div>

            {/* Social Network Links */}
            <div className="p-6 rounded-2xl sm:rounded-3xl bg-[#111317] border border-white/10 shadow-lg">
              <span className="block font-mono text-xs uppercase text-white/40 mb-4">Network Coordinates</span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/30 hover:bg-white hover:text-black text-white transition-all flex flex-col items-center gap-1 text-center"
                >
                  <Github className="w-4 h-4 mb-1" />
                  <span className="text-[11px] font-mono">GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/30 hover:bg-white hover:text-black text-white transition-all flex flex-col items-center gap-1 text-center"
                >
                  <Linkedin className="w-4 h-4 mb-1" />
                  <span className="text-[11px] font-mono">LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
