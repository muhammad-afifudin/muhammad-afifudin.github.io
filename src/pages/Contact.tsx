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
    <div className="min-h-screen bg-[#07080a] text-[#f1f5f9] py-16 px-4 sm:px-6 lg:px-12 overflow-hidden relative">
      {/* Background Wireframe Hairlines */}
      <div className="absolute top-1/4 -right-36 w-[600px] h-[600px] wireframe-circle opacity-15 pointer-events-none" />
      <div className="absolute bottom-10 -left-36 w-[500px] h-[500px] wireframe-circle opacity-10 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto relative z-10">
        {/* Header with Behance Signature Orb */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-6">
          <div className="flex items-center gap-5">
            <div className="section-orb shrink-0">
              <span>CONTACT</span>
            </div>
            <div>
              <div className="mb-2 font-mono text-xs text-white/50 tracking-widest uppercase">
                <span>DIRECT MESSAGE</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display">
                Contact & Inquiry.
              </h1>
            </div>
          </div>

          <div className="font-mono text-xs text-white/50">
            <span>AVG RESPONSE TIME: &lt; 24H</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-3xl p-7 bg-[#111317] border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 font-mono text-xs text-white/50 uppercase mb-6 tracking-wider">
                <Terminal className="w-4 h-4 text-white/80" />
                <span>COMMUNICATION ENDPOINTS</span>
              </div>

              <div className="space-y-3.5 text-xs font-mono">
                {/* Email endpoint */}
                <div className="p-4 rounded-2xl border border-white/10 bg-[#0a0c10] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-white/40 text-[10px] tracking-wider uppercase">EMAIL</div>
                      <div className="text-white font-medium text-xs break-all">{personalInfo.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 ml-2">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-white/10 hover:border-white/40 text-white/60 hover:text-white transition-colors cursor-pointer"
                      title="Open directly in Gmail"
                      aria-label="Open in Gmail"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={copyEmail}
                      className="p-2 rounded-lg border border-white/10 hover:border-white text-white/60 hover:text-white transition-colors cursor-pointer"
                      aria-label="Copy Email"
                      title="Copy email address"
                    >
                      {copiedEmail ? (
                        <Check className="w-3.5 h-3.5 text-white" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone endpoint */}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="p-4 rounded-2xl border border-white/10 bg-[#0a0c10] flex items-center gap-3 hover:border-white/30 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white/40 text-[10px] tracking-wider uppercase">PHONE / WHATSAPP</div>
                    <div className="text-white font-medium">{personalInfo.phone}</div>
                  </div>
                </a>

                {/* Location endpoint */}
                <div className="p-4 rounded-2xl border border-white/10 bg-[#0a0c10] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white/40 text-[10px] tracking-wider uppercase">LOCATION</div>
                    <div className="text-white font-medium">{personalInfo.city}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 text-xs text-white/50 leading-relaxed font-sans">
                Available for full-time engineering roles in Sidoarjo, Surabaya, remote engagements worldwide, and machine learning research projects.
              </div>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-7 md:p-9 bg-[#111317] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

              <h2 className="text-xl font-bold text-white tracking-tight mb-2">
                Send Direct Message
              </h2>
              <p className="text-xs text-white/50 mb-6 font-mono">
                Fill out the fields below to transmit an inquiry or collaboration proposal directly to Afif's inbox.
              </p>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-2xl border border-white/20 bg-white/5 text-xs font-mono text-white"
                >
                  <div className="flex items-center gap-2 mb-1.5 font-semibold">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-white" />
                    <span>EMAIL READY: Message pre-filled automatically</span>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed mb-3 font-sans">
                    Your email client has been prepared with the recipient, subject, and formatted message. Please click <strong>Send</strong> in your mail application.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10 text-[11px]">
                    <span className="text-white/40">Quick options:</span>
                    <button
                      type="button"
                      onClick={() => handleOpenEmail('gmail')}
                      className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/20"
                    >
                      Open in Gmail (Web)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleOpenEmail('mailto')}
                      className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer border border-white/10"
                    >
                      Open in Mail App
                    </button>
                    <button
                      type="button"
                      onClick={copyMessagePayload}
                      className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer border border-white/10"
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
                  className="mb-6 p-4 rounded-2xl border border-rose-500/30 bg-rose-500/10 text-xs font-mono text-rose-400 flex items-center gap-2.5"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>ERROR: {errorMessage}</span>
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-white/60 mb-2 uppercase tracking-wider">
                      Name <span className="text-white">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-3 bg-[#0a0c10] border border-white/10 rounded-xl text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/60 mb-2 uppercase tracking-wider">
                      Email Address <span className="text-white">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 bg-[#0a0c10] border border-white/10 rounded-xl text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/60 mb-2 uppercase tracking-wider">
                    Subject <span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Backend Engineer Role / Project Consultation"
                    className="w-full px-4 py-3 bg-[#0a0c10] border border-white/10 rounded-xl text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/60 mb-2 uppercase tracking-wider">
                    Message Payload <span className="text-white">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your technical requirements, team vision, or timeline..."
                    className="w-full px-4 py-3 bg-[#0a0c10] border border-white/10 rounded-xl text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all shadow-xl flex items-center justify-center gap-2 group cursor-pointer text-xs font-mono uppercase tracking-wider"
                  >
                    <Send className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                    <span>Open Email &amp; Send Message</span>
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

