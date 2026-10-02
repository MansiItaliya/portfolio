import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Award, ChevronRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-950">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional <span className="text-cyan-400">Work Experience</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Track record of driving backend architecture, building mission-critical services, and leading engineering projects.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-transparent -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12">
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-slate-950 border-2 border-cyan-400 text-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                      <Briefcase className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Timeline Card Content */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0">
                    <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 card-hover-effect space-y-4">
                      
                      {/* Position & Company Header */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="text-xs font-mono text-cyan-400 font-semibold px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30">
                            {exp.position}
                          </span>
                          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.duration}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white pt-2">
                          {exp.company}
                        </h3>
                        <div className="text-xs text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Responsibilities List */}
                      <div className="space-y-2 pt-2 border-t border-slate-800/80">
                        <h4 className="text-xs font-mono font-semibold uppercase text-slate-400">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Achievements */}
                      <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 space-y-1.5">
                        <div className="text-xs font-mono font-semibold text-cyan-300 flex items-center gap-1.5">
                          <Award className="w-4 h-4 text-amber-400" />
                          Key Achievement
                        </div>
                        {exp.achievements.map((ach, aIdx) => (
                          <p key={aIdx} className="text-xs text-slate-300 leading-relaxed pl-5">
                            • {ach}
                          </p>
                        ))}
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
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
