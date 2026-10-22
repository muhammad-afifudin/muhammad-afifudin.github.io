import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, Database, Server, CheckCircle2 } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      number: '01',
      title: 'Full-Stack Web Development',
      desc: 'Interactive, responsive web applications built with Laravel MVC & modern frontend stacks.',
      icon: Globe,
      capabilities: ['Laravel MVC', 'Blade Templates', 'Role-Based Auth']
    },
    {
      number: '02',
      title: 'Machine Learning Pipelines',
      desc: 'Predictive models and automated pipelines served via FastAPI microservices.',
      icon: Cpu,
      capabilities: ['Scikit-learn', 'FastAPI Serving', 'Classification Models']
    },
    {
      number: '03',
      title: 'REST API & Backend Architecture',
      desc: 'Secure, high-throughput RESTful endpoints designed for multi-client apps.',
      icon: Server,
      capabilities: ['RESTful Design', 'API Validation', 'JSON Telemetry']
    },
    {
      number: '04',
      title: 'Database Design & Optimization',
      desc: 'Normalized schemas, query tuning, and ACID integrity in MySQL.',
      icon: Database,
      capabilities: ['MySQL Modeling', 'Query Tuning', 'Data Integrity']
    }
  ];

  return (
    <section id="services" className="relative bg-[#07080a] border-t border-white/[0.08] py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background Wireframe Arcs */}
      <div className="absolute top-1/4 -right-48 w-[650px] h-[650px] wireframe-circle opacity-10 pointer-events-none" />
      <div className="absolute bottom-10 -left-36 w-[550px] h-[550px] wireframe-circle opacity-10 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto relative z-10">
        
        {/* Header with Signature Orb (Slice 4 style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-6">
          <div className="flex items-center gap-5">
            <div className="section-orb shrink-0">
              <span>SERVICES</span>
            </div>
            <div>
              <div className="mb-2 font-mono text-xs text-white/50 tracking-widest uppercase">
                <span>SERVICES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display">
                What I Deliver.
              </h2>
            </div>
          </div>

          <div className="font-mono text-xs text-white/50">
            <span>CORE CAPABILITIES</span>
          </div>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-[#111317] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                        {srv.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-white/40">{srv.number}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-6 font-normal">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-white/75">
                  {srv.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white/80 shrink-0" />
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 2 Wide Highlight Metrics Cards (Slice 4 bottom style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#14161b] to-[#0c0d10] border border-white/15 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-white/80 font-semibold">
                  ML SERVICE HIGHLIGHT
                </span>
                <span className="text-xs font-mono text-white/40">FASTAPI • INFERENCE</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
                94.6% Accuracy ML Engine
              </h4>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6">
                Automated student assessment pipeline with sub-20ms FastAPI inference.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>RANDOM FOREST CLASSIFIER</span>
              <span className="text-white">LATENCY: &lt; 20ms</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#14161b] to-[#0c0d10] border border-white/15 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-white/80 font-semibold">
                  FULL-STACK HIGHLIGHT
                </span>
                <span className="text-xs font-mono text-white/40">LARAVEL • BLADE</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
                Interactive Course Portal
              </h4>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6">
                Multi-step enrollment workflow with role-based dashboard and live validation.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>PRODUCTION TESTED</span>
              <span className="text-white">STRUCTURED MYSQL</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
