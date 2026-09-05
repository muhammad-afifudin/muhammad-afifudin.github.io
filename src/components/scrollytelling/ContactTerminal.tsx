import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

export const ContactTerminal: React.FC = () => {
  const { personalInfo } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact-section" className="relative bg-[#000000] border-t border-[#292d30] py-24 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="resend-card p-8 md:p-14 bg-[#000000] border border-[#292d30] relative overflow-hidden">
          {/* Top Status */}
          <div className="flex items-center justify-between pb-6 border-b border-[#292d30] mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3ad389] animate-pulse" />
              <span className="font-mono text-xs text-[#3ad389]">READY FOR DISCUSSIONS</span>
            </div>
            <span className="font-mono text-xs text-[#6e727a]">ENDPOINT // CONTACT</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] text-white mb-4">
                Let's build reliable systems together.
              </h2>
              <p className="text-base text-[#a1a4a5] leading-relaxed mb-8 max-w-xl">
                Whether you need a scalable backend architecture in Laravel/FastAPI, or machine learning model deployment into production, I am open to full-time roles and collaborative ventures.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => copyToClipboard(personalInfo.email)}
                  className="resend-btn-ghost group !border-white/15 hover:!border-white/40"
                >
                  <Mail className="w-4 h-4 text-[#0A84FF]" />
                  <span className="font-mono text-xs">{personalInfo.email}</span>
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-[#3ad389]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[#6e727a] group-hover:text-white" />
                  )}
                </button>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="resend-btn-ghost !border-white/15 hover:!border-white/40"
                >
                  <Phone className="w-4 h-4 text-[#a1a4a5]" />
                  <span className="font-mono text-xs">{personalInfo.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="code-window p-5 bg-[#050505] border border-[#292d30] rounded-[12px] font-mono text-xs text-[#a1a4a5] space-y-2">
                <div className="text-[#6e727a]">// Developer coordinates</div>
                <div><span className="text-[#0A84FF]">location:</span> "Waru, Sidoarjo, ID"</div>
                <div><span className="text-[#0A84FF]">timezone:</span> "Asia/Jakarta (UTC+7)"</div>
                <div><span className="text-[#0A84FF]">status:</span> "Open for Opportunities"</div>
                <div><span className="text-[#0A84FF]">primary_stack:</span> ["Laravel", "FastAPI", "ML"]</div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resend-btn-ghost flex-1"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#6e727a]" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resend-btn-ghost flex-1"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#6e727a]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
