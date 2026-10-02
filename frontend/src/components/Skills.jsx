import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Server, Database, Cloud, Layers, CheckCircle } from 'lucide-react';

const categoryConfig = [
  { id: 'backend', label: 'Backend Development', icon: Server, color: 'text-cyan-400', border: 'border-cyan-500/30' },
  { id: 'database', label: 'Database Engineering', icon: Database, color: 'text-indigo-400', border: 'border-indigo-500/30' },
  { id: 'devops', label: 'DevOps & Cloud', icon: Cloud, color: 'text-emerald-400', border: 'border-emerald-500/30' },
  { id: 'integrations', label: 'Integrations & Services', icon: Layers, color: 'text-purple-400', border: 'border-purple-500/30' },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="skills" className="py-24 relative bg-slate-950/70 border-t border-slate-900">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical <span className="text-cyan-400">Skills & Tooling</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Production-tested stack focused on high-concurrency Java microservices, resilient data storage, and cloud operations.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            All Skills
          </button>
          {categoryConfig.map((cat) => {
            const IconComp = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <IconComp className={`w-4 h-4 ${cat.color}`} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryConfig
            .filter((cat) => activeTab === 'all' || activeTab === cat.id)
            .map((category) => {
              const IconComp = category.icon;
              const items = skillsData[category.id] || [];

              return (
                <div
                  key={category.id}
                  className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col justify-between card-hover-effect space-y-6"
                >
                  <div className="space-y-4">
                    {/* Category Title Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <div className={`p-2 rounded-lg bg-slate-900 border ${category.border}`}>
                          <IconComp className={`w-5 h-5 ${category.color}`} />
                        </div>
                        <h3 className="text-base font-bold text-white">
                          {category.label}
                        </h3>
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        {items.length} items
                      </span>
                    </div>

                    {/* Skill Badges List */}
                    <div className="space-y-3">
                      {items.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors group"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="text-base select-none">{skill.icon}</span>
                            <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-800/80 text-cyan-400 border border-slate-700">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 text-right">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center justify-end gap-1">
                      <CheckCircle className="w-3 h-3 text-cyan-400" /> Production Verified
                    </span>
                  </div>

                </div>
              );
            })}
        </div>

      </div>
    </section>
  );
}
