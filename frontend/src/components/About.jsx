import React from 'react';
import { aboutData } from '../data/portfolioData';
import { Code, Shield, Database, Cloud, Zap, Layers, CheckCircle2 } from 'lucide-react';

const iconMap = {
  "Backend Development": Code,
  "REST API & Performance": Zap,
  "Security Architecture": Shield,
  "Database Engineering": Database,
  "Integrations & APIs": Layers,
  "Cloud & DevOps": Cloud
};

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            Profile & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About My <span className="text-cyan-400">Engineering Philosophy</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Delivering robust, testable, and highly secure Java backend infrastructure built for performance under scale.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Detailed Bio & Core Principles */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="glass-panel rounded-2xl p-8 space-y-6 h-full flex flex-col justify-between border-slate-800">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {aboutData.headline}
                </h3>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {aboutData.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Core Quality Checklist */}
              <div className="pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Clean Architecture & DDD",
                  "Stateless OAuth2 & JWT Security",
                  "PostgreSQL / MySQL Tuning",
                  "Spring Boot 3 & Virtual Threads",
                  "Production Deployment",
                  "99.99% Production Uptime"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: 6 Core Technical Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.pillars.map((pillar, idx) => {
              const IconComponent = iconMap[pillar.title] || Code;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-xl p-6 border border-slate-800/80 card-hover-effect flex flex-col justify-between group"
                >
                  <div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 w-fit mb-4 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
