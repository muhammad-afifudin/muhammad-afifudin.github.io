import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, Maximize2, X, Eye, FileText } from 'lucide-react';

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge: string;
  desc: string;
  tags: string[];
  image: string;
  backImage?: string | null;
  backTitle?: string | null;
}

export const CertificatesSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [activePage, setActivePage] = useState<'front' | 'back'>('front');

  const certificateMockups: CertificateItem[] = [
    {
      id: 'cert-1',
      title: 'Web Developer Competency Certificate',
      issuer: 'Badan Nasional Sertifikasi Profesi (BNSP) & LSP P1',
      date: 'Sep 2026',
      badge: 'NATIONAL COMPETENCY',
      desc: 'National professional certification in Web Development by BNSP (LSP P1 Politeknik Negeri Jember). Verified competent across 17 units including MVC architecture, database modeling, secure APIs, and software scalability.',
      tags: ['BNSP Certified', 'Competent Rating', 'LSP P1', '17 Units'],
      image: '/assets/img/certificates/cert-bnsp-webdev.jpg',
      backImage: '/assets/img/certificates/cert-bnsp-webdev-back.jpg',
      backTitle: 'Daftar Unit Kompetensi'
    },
    {
      id: 'cert-2',
      title: 'Bangkit Academy Machine Learning Cohort',
      issuer: 'Google, GoTo, Traveloka & Kemendikbudristek',
      date: 'Jan 2025',
      badge: 'INDUSTRY DISTINCTION',
      desc: 'Graduated from Bangkit Academy ML Cohort with distinction. Rigorous specialization in TensorFlow, Scikit-learn, deep learning pipelines, and completed capstone with 90.6 score.',
      tags: ['Google Supported', 'Machine Learning', 'Capstone 90.6', 'TensorFlow'],
      image: '/assets/img/certificates/cert-bangkit-ml.jpg',
      backImage: '/assets/img/certificates/cert-bangkit-ml-achievement.jpg',
      backTitle: 'Student Learning Achievement'
    },
    {
      id: 'cert-3',
      title: '2nd Place (Silver Medal) - NASPO 2025',
      issuer: 'IYSA & FMIPA Universitas Gadjah Mada (UGM)',
      date: 'Dec 2025',
      badge: 'NATIONAL SCIENTIFIC HONOR',
      desc: 'Awarded Silver Medal (2nd Place) in Applied Social Science at the National Applied Science Project Olympiad (NASPO 2025) for research titled "Aplikasi Perencanaan Keuangan FinPocket".',
      tags: ['National Champion', 'Silver Medal', 'Applied Science', 'UGM & IYSA'],
      image: '/assets/img/certificates/cert-naspo-2025.jpg',
      backImage: null,
      backTitle: null
    }
  ];

  const handleOpenCert = (cert: CertificateItem, page: 'front' | 'back' = 'front') => {
    setSelectedCert(cert);
    setActivePage(page);
  };

  return (
    <section id="certificates-section" className="relative bg-[#07080a] border-t border-white/[0.08] py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Decorative Arcs */}
      <div className="absolute top-1/3 -left-36 w-[550px] h-[550px] wireframe-circle opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 -right-48 w-[650px] h-[650px] wireframe-circle opacity-15 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto relative z-10">
        
        {/* Header with Signature Orb */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-6">
          <div className="flex items-center gap-5">
            <div className="section-orb shrink-0">
              <span>AWARDS</span>
            </div>
            <div>
              <div className="mb-2 font-mono text-xs text-white/50 tracking-widest uppercase">
                <span>CREDENTIALS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display">
                Certifications & Recognition.
              </h2>
            </div>
          </div>

          <div className="font-mono text-xs text-white/50 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-white/80" />
            <span>VERIFIED ACADEMIC &amp; INDUSTRY HONORS</span>
          </div>
        </div>

        {/* 3 Prominent Certificate Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {certificateMockups.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl sm:rounded-3xl p-6 bg-[#111317] border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Certificate Frame with Real Image */}
                <div 
                  onClick={() => handleOpenCert(cert, 'front')}
                  className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#0c0d10] border border-white/15 p-2 mb-5 relative flex flex-col justify-between group-hover:border-white/35 transition-all cursor-pointer shadow-lg"
                >
                  {/* Top Bar inside Frame */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-white/50 pb-1.5 border-b border-white/10 relative z-10 bg-[#0c0d10]/80 backdrop-blur-xs px-1">
                    <span className="flex items-center gap-1.5 text-white/90 font-semibold truncate max-w-[180px]">
                      <ShieldCheck className="w-3.5 h-3.5 text-white/80 shrink-0" />
                      {cert.badge}
                    </span>
                    <span className="shrink-0">{cert.date}</span>
                  </div>

                  {/* Real Image Display */}
                  <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden py-1">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="max-h-full max-w-full object-contain rounded transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Hover Prompt Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px] rounded">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs shadow-lg">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Preview Certificate</span>
                      </span>
                    </div>
                  </div>

                  {/* Bottom Bar inside Frame */}
                  <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/40 relative z-10 bg-[#0c0d10]/80 backdrop-blur-xs px-1">
                    <span className="flex items-center gap-1">
                      <Award className="w-3 h-3 text-amber-400" />
                      OFFICIAL CREDENTIAL
                    </span>
                    <span className="text-white/70">VERIFIED</span>
                  </div>
                </div>

                {/* Multi-page Pill Quick Switch (if back image exists) */}
                {cert.backImage && (
                  <div className="flex items-center gap-2 mb-4 -mt-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenCert(cert, 'front');
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-mono py-1 px-2.5 rounded-md bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-white/80 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3 h-3 text-white/60" />
                      <span>Front Page</span>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenCert(cert, 'back');
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-mono py-1 px-2.5 rounded-md bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-white/80 transition-colors cursor-pointer"
                    >
                      <FileText className="w-3 h-3 text-white/60" />
                      <span>{cert.backTitle || 'Back Page'}</span>
                    </button>
                  </div>
                )}

                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-white/60 mb-3">{cert.issuer}</p>
                <p className="text-xs text-white/50 leading-relaxed font-normal mb-5">
                  {cert.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for High Resolution Inspection */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111317] border border-white/20 rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#0c0d10]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] py-0.5 px-2 rounded-full bg-white/10 border border-white/15 text-white/90">
                      {selectedCert.badge}
                    </span>
                    <span className="font-mono text-xs text-white/40">{selectedCert.date}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white font-display">
                    {selectedCert.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  {/* Page switcher if back image exists */}
                  {selectedCert.backImage && (
                    <div className="flex items-center gap-1 p-1 bg-white/[0.06] rounded-lg border border-white/10">
                      <button
                        type="button"
                        onClick={() => setActivePage('front')}
                        className={`text-xs font-mono py-1 px-2.5 rounded transition-colors ${
                          activePage === 'front'
                            ? 'bg-white text-black font-semibold'
                            : 'text-white/60 hover:text-white'
                        }`}
                      >
                        Halaman 1
                      </button>
                      <button
                        type="button"
                        onClick={() => setActivePage('back')}
                        className={`text-xs font-mono py-1 px-2.5 rounded transition-colors ${
                          activePage === 'back'
                            ? 'bg-white text-black font-semibold'
                            : 'text-white/60 hover:text-white'
                        }`}
                      >
                        Halaman 2
                      </button>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Image Body */}
              <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-[#07080a]">
                <img
                  src={
                    activePage === 'back' && selectedCert.backImage
                      ? selectedCert.backImage
                      : selectedCert.image
                  }
                  alt={selectedCert.title}
                  className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
                />
              </div>

              {/* Modal Footer Info */}
              <div className="p-4 border-t border-white/10 bg-[#0c0d10] flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-white/60 gap-2">
                <span>{selectedCert.issuer}</span>
                <span className="text-white/40">
                  {activePage === 'back' && selectedCert.backTitle
                    ? selectedCert.backTitle
                    : 'Authentic Official Certificate'}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
