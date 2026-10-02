import React from 'react';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, Github, CheckCircle2, ShieldAlert, Cpu, Sparkles } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-slate-950">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            Production Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured <span className="text-cyan-400">Backend Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real-world backend systems and SaaS applications engineered for high performance, fault tolerance, and security.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl p-7 border border-slate-800 flex flex-col justify-between card-hover-effect relative overflow-hidden group"
            >
              {/* Subtle Ambient Background Gradient */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${project.highlightColor} rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity`}></div>

              <div className="space-y-6 relative z-10">
                
                {/* Header Badge & Title */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Java 21 Engine
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Problem Solved Callout */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                  <div className="text-xs font-mono font-semibold text-amber-400 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4" />
                    Problem Solved
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>

                {/* Key Features Bullet List */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">
                    Key Features
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Stack Tags */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <h4 className="text-[11px] font-mono uppercase text-slate-400">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-800 relative z-10">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 hover:border-slate-700 hover:text-white transition-all"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  GitHub Code
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30 hover:text-white transition-all shadow-sm shadow-cyan-500/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
