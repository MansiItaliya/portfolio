import React, { useState } from 'react';
import { architectureData } from '../data/portfolioData';
import { Network, Server, ArrowDown, ArrowRight, Layers, Database, ShieldCheck, Lock, ExternalLink, Cpu, Code2 } from 'lucide-react';

export default function Architecture() {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <section id="architecture" className="py-24 relative bg-slate-950/70 border-t border-slate-900">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            System Topology
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Backend Architecture <span className="text-cyan-400">&amp; Request Flow</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-availability, layered Spring Boot architecture driving modern microservices and API integrations.
          </p>
        </div>

        {/* Architecture Visual Diagram Container */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-12 relative overflow-hidden">
          
          {/* Top Bar Indicator */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
              <Network className="w-4 h-4 text-cyan-400" />
              <span>Interactive Request Flow Diagram</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span> Core Tier
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span> Security & Auth
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> Persistence
              </span>
            </div>
          </div>

          {/* Sequential Layer Flow Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {architectureData.flowSteps.map((step, idx) => (
              <div
                key={step.step}
                onClick={() => setSelectedNode(selectedNode === step.step ? null : step.step)}
                className={`arch-node glass-panel rounded-2xl p-5 border cursor-pointer transition-all ${
                  selectedNode === step.step
                    ? 'border-cyan-400 bg-cyan-950/40 shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400'
                    : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
                    Step {step.step}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {step.tech}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-1.5">
                  {step.title}
                </h3>
                
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.desc}
                </p>

                {idx < architectureData.flowSteps.length - 1 && (
                  <div className="mt-4 pt-2 border-t border-slate-800/60 flex items-center justify-end text-slate-500 text-xs font-mono gap-1">
                    <span>Next step</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* External Integrations Section */}
          <div className="pt-8 border-t border-slate-800 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-400" />
                Third-Party &amp; External Integrations
              </h3>
              <span className="text-xs font-mono text-slate-400">
                Connected Services
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {architectureData.externalIntegrations.map((ext, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center space-y-1 hover:border-cyan-500/40 transition-colors"
                >
                  <div className={`text-xs font-mono font-bold ${ext.color}`}>
                    {ext.name}
                  </div>
                  <div className="text-[10px] text-slate-400 leading-tight">
                    {ext.role}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Explanation Summary */}
          <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 space-y-3">
            <h4 className="text-sm font-mono font-bold text-cyan-300 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" />
              How This Portfolio Backend is Built
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              This portfolio leverages a clean multi-module Java 21 architecture. The React SPA sends validation-checked DTO payloads to the Spring Boot REST controller, which passes through custom Spring Security filter chains before executing in transactional Service Beans. Safe mail dispatches are processed through automated fallback logging if external SMTP credentials are withheld.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
