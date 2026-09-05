import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Terminal, Copy, Check, ExternalLink } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

const Contact: React.FC = () => {
  const { personalInfo } = portfolioData;
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyMessagePayload = () => {
    const text = `To: ${personalInfo.email}\nSubject: ${formData.subject}\n\n${formData.message}\n\nSender: ${formData.name} (${formData.email})`;
    navigator.clipboard.writeText(text);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const prepareEmailContent = () => {
    const subjectText = formData.subject.trim() || `Inquiry from ${formData.name.trim() || 'Portfolio Visitor'}`;
    const bodyText = `Hello Muhammad Afifudin,

${formData.message.trim()}

--------------------------------------------------
Sender: ${formData.name.trim() || 'Anonymous'}
Email: ${formData.email.trim() || 'Not specified'}
Sent via portfolio contact form`;

    return { subjectText, bodyText };
  };

  const handleOpenEmail = (provider: 'gmail' | 'mailto') => {
    if (formRef.current && !formRef.current.reportValidity()) {
      return;
    }

    try {
      const { subjectText, bodyText } = prepareEmailContent();

      if (provider === 'gmail') {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
          personalInfo.email
        )}&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
        window.open(gmailUrl, '_blank', 'noopener,noreferrer');
      } else {
        const mailtoUrl = `mailto:${encodeURIComponent(personalInfo.email)}?subject=${encodeURIComponent(
          subjectText
        )}&body=${encodeURIComponent(bodyText)}`;
        const link = document.createElement('a');
        link.href = mailtoUrl;
        link.target = '_self';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('Unable to open email client. Please send directly to ' + personalInfo.email);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current && !formRef.current.reportValidity()) {
      return;
    }

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      handleOpenEmail('mailto');
    } else {
      handleOpenEmail('gmail');
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#f0f0f0] py-16 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#292d30]">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 font-mono text-xs text-[#0A84FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
              <span>DIRECT_TRANSMISSION // INBOX</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] text-white">
              Contact & Inquiry.
            </h1>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-[#a1a4a5] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3ad389] animate-pulse" />
            <span>AVG RESPONSE TIME: &lt; 24H</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="resend-card p-6 bg-[#000000] border border-[#292d30]">
              <div className="flex items-center gap-2 font-mono text-xs text-[#6e727a] uppercase mb-4">
                <Terminal className="w-4 h-4 text-[#0A84FF]" />
                <span>COMMUNICATION ENDPOINTS</span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                {/* Email endpoint */}
                <div className="p-3.5 rounded-[6px] border border-[#292d30] bg-[#050505] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#0A84FF]" />
                    <div>
                      <div className="text-[#6e727a]">EMAIL</div>
                      <div className="text-white">{personalInfo.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-[6px] border border-[#292d30] hover:border-[#0A84FF] text-[#a1a4a5] hover:text-[#0A84FF] transition-colors cursor-pointer"
                      title="Open directly in Gmail"
                      aria-label="Open in Gmail"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={copyEmail}
                      className="p-1.5 rounded-[6px] border border-[#292d30] hover:border-white text-[#a1a4a5] hover:text-white transition-colors cursor-pointer"
                      aria-label="Copy Email"
                      title="Copy email address"
                    >
                      {copiedEmail ? (
                        <Check className="w-3.5 h-3.5 text-[#3ad389]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone endpoint */}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="p-3.5 rounded-[6px] border border-[#292d30] bg-[#050505] flex items-center gap-3 hover:border-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#3b9eff]" />
                  <div>
                    <div className="text-[#6e727a]">PHONE / WHATSAPP</div>
                    <div className="text-white">{personalInfo.phone}</div>
                  </div>
                </a>

                {/* Location endpoint */}
                <div className="p-3.5 rounded-[6px] border border-[#292d30] bg-[#050505] flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#3ad389]" />
                  <div>
                    <div className="text-[#6e727a]">LOCATION</div>
                    <div className="text-white">{personalInfo.city}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#292d30] text-xs font-mono text-[#a1a4a5]">
                Available for engineering positions in Surabaya, remote engagements worldwide, and technical consultancy.
              </div>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-7">
            <div className="resend-card p-6 md:p-8 bg-[#000000] border border-[#292d30]">
              <h2 className="text-xl font-medium text-white tracking-tight mb-2">
                Send Direct Message
              </h2>
              <p className="text-xs text-[#a1a4a5] mb-6">
                Fill out the fields below to transmit an inquiry or collaboration proposal directly to Afif's inbox.
              </p>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-[6px] border border-[#3ad389]/40 bg-[#3ad389]/5 text-xs font-mono text-[#3ad389]"
                >
                  <div className="flex items-center gap-2 mb-1.5 font-semibold">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>EMAIL READY: Message pre-filled automatically</span>
                  </div>
                  <p className="text-[#a1a4a5] text-xs leading-relaxed mb-3">
                    Your email application has been opened with the recipient, subject, and formatted message. Please click <strong>Send</strong> in your email client.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#3ad389]/20 text-[11px]">
                    <span className="text-[#6e727a]">Quick options:</span>
                    <button
                      type="button"
                      onClick={() => handleOpenEmail('gmail')}
                      className="px-2.5 py-1 rounded bg-[#3ad389]/15 hover:bg-[#3ad389]/25 text-[#3ad389] transition-colors cursor-pointer border border-[#3ad389]/30"
                    >
                      Open in Gmail (Web)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleOpenEmail('mailto')}
                      className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer border border-[#292d30]"
                    >
                      Open in Mail App
                    </button>
                    <button
                      type="button"
                      onClick={copyMessagePayload}
                      className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-[#a1a4a5] hover:text-white transition-colors cursor-pointer border border-[#292d30]"
                    >
                      {copiedMessage ? 'Copied!' : 'Copy Message'}
                    </button>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-[6px] border border-[#ff9592]/40 bg-[#ff9592]/5 text-xs font-mono text-[#ff9592] flex items-center gap-2.5"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>ERROR: {errorMessage}</span>
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#a1a4a5] mb-1.5 uppercase">
                      Name <span className="text-[#0A84FF]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-3.5 py-2.5 bg-[#050505] border border-[#292d30] rounded-[6px] text-xs font-mono text-white placeholder-[#6e727a] focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#a1a4a5] mb-1.5 uppercase">
                      Email Address <span className="text-[#0A84FF]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 bg-[#050505] border border-[#292d30] rounded-[6px] text-xs font-mono text-white placeholder-[#6e727a] focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#a1a4a5] mb-1.5 uppercase">
                    Subject <span className="text-[#0A84FF]">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Backend Engineer Role / Project Consultation"
                    className="w-full px-3.5 py-2.5 bg-[#050505] border border-[#292d30] rounded-[6px] text-xs font-mono text-white placeholder-[#6e727a] focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#a1a4a5] mb-1.5 uppercase">
                    Message Payload <span className="text-[#0A84FF]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your technical requirements, team vision, or timeline..."
                    className="w-full px-3.5 py-2.5 bg-[#050505] border border-[#292d30] rounded-[6px] text-xs font-mono text-white placeholder-[#6e727a] focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="resend-btn-ghost w-full justify-center !py-3 group !border-white/50 hover:!border-white hover:bg-white hover:text-black transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#0A84FF] group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                    <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                      Open Email &amp; Send Message
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

