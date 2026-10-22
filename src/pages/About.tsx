import React from 'react';
import { MapPin, Mail, GraduationCap, Award, Terminal } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

const About: React.FC = () => {
  const { personalInfo, education } = portfolioData;

  const stats = [
    { number: '3+', label: 'Years Experience', desc: 'Web development & machine learning implementations' },
    { number: '4+', label: 'Featured Systems', desc: 'Full-stack enterprise & AI predictive applications' },
    { number: '94.6%', label: 'ML Model Accuracy', desc: 'Random Forest classifier for student evaluation' },
    { number: '3.80', label: 'Academic GPA', desc: 'Politeknik Negeri Jember (out of 4.00)' },
  ];

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
              <span>ABOUT</span>
            </div>
            <div>
              <div className="mb-2 font-mono text-xs text-white/50 tracking-widest uppercase">
                <span>PROFILE</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display">
                About & Trajectory.
              </h1>
            </div>
          </div>

          <div className="font-mono text-xs text-white/50">
            <span>ACADEMIC GPA: 3.80 / 4.00</span>
          </div>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: Narrative Card & Details */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="rounded-3xl p-8 bg-[#111317] border border-white/10 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-white/50 uppercase mb-4">
                <Terminal className="w-4 h-4 text-white/80" />
                <span>PROFILE PHILOSOPHY</span>
              </div>

              <h2 className="text-2xl font-bold text-white tracking-tight mb-4 font-display">
                Engineering reliable backends & machine intelligence solutions.
              </h2>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">
                {personalInfo.bio}
              </p>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
                Specialized in architecting high-throughput REST APIs using Laravel & FastAPI, relational database optimization in MySQL, and training production machine learning classifiers with Scikit-learn.
              </p>

              {/* Coordinates Grid */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-1">
                  <span className="text-white/40 uppercase">Location</span>
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-white/60" />
                    {personalInfo.city}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-1">
                  <span className="text-white/40 uppercase">Education</span>
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-white/60" />
                    Politeknik Negeri Jember
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-1">
                  <span className="text-white/40 uppercase">Direct Email</span>
                  <span className="text-white font-medium flex items-center gap-1.5 truncate">
                    <Mail className="w-3.5 h-3.5 text-white/60" />
                    {personalInfo.email}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-1">
                  <span className="text-white/40 uppercase">Status</span>
                  <span className="text-white font-medium">
                    Available for Full-time Roles
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Stat Highlight Cards & Education */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-[#111317] border border-white/10 flex flex-col justify-between group shadow-lg"
                >
                  <div className="text-3xl sm:text-4xl font-black text-white font-display mb-1">
                    {stat.number}
                  </div>
                  <h4 className="text-xs font-bold text-white mb-2">{stat.label}</h4>
                  <p className="text-[11px] text-white/50 leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>

            {/* Academic Honor Card */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#111317] border border-white/10 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-3">
                <Award className="w-4 h-4" />
                <span>ACADEMIC HONORS & DISTINCTION</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">2nd Place Winner - NASPO UGM 2025</h3>
              <p className="text-xs text-white/60 leading-relaxed mb-4">
                Awarded second place in the National Applied Science Project Olympiad at Universitas Gadjah Mada.
              </p>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/40">
                <span>NASPO UGM 2025</span>
                <span className="text-white">NATIONAL OLYMPIAD</span>
              </div>
            </div>

            {/* Formal Education Card */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#111317] border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-1">
                <GraduationCap className="w-4 h-4 text-white/80" />
                <span>FORMAL EDUCATION</span>
              </div>
              {education.map((edu, idx) => (
                <div key={idx} className="pb-3 border-b border-white/5 last:border-b-0 last:pb-0">
                  <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                  <div className="text-xs text-white/50 font-mono mt-0.5">{edu.institution} • {edu.period}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
