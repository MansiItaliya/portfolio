import React from 'react';
import { productionCapabilities } from '../data/portfolioData';
import { ShieldCheck, Cpu, Terminal } from 'lucide-react';

export default function ProductionCapabilities() {
  return (
    <section id="production" className="py-24 relative bg-slate-950">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            Engineering Mastery
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Production-Grade <span className="text-cyan-400">Capabilities</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            End-to-end expertise spanning backend coding, security standards, cloud hosting, and continuous deployment.
          </p>
        </div>

        {/* 14 Production Capability Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {productionCapabilities.map((cap, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-5 border border-slate-800 flex flex-col justify-between card-hover-effect group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl select-none p-2 rounded-xl bg-slate-900 border border-slate-800/80 group-hover:border-cyan-500/30 transition-colors">
                    {cap.icon}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cap.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {cap.desc}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1 text-cyan-400">
                  <ShieldCheck className="w-3.5 h-3.5" /> Ready
                </span>
                <span>Production Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
