import { ArrowRight, Database, Github, Linkedin, Mail, Server, ShieldCheck, Terminal } from 'lucide-react';
import { developerInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background Ambient Glow Blobs */}
      <div className="hero-glow-blob w-[500px] h-[500px] bg-cyan-500 top-1/4 -left-32 animate-pulse-slow"></div>
      <div className="hero-glow-blob w-[450px] h-[450px] bg-indigo-600 bottom-10 -right-32 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Developer Intro & Call To Actions */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>{developerInfo.status}</span>
          </div>

          {/* Main Titles */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
              {developerInfo.title}
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-cyan-400 font-sans tracking-wide">
              {developerInfo.subtitle}
            </p>
          </div>

          {/* Short Bio */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {developerInfo.bio}
          </p>

          {/* Key Tech Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {['Java 21', 'Spring Boot 3', 'Spring Security', 'PostgreSQL', 'Docker', 'AWS'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-mono flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons & Social Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800/80 hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              Contact Me
            </a>

            <div className="flex items-center gap-3 pl-2 border-l border-slate-800">
              <a
                href={developerInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={developerInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 w-full border-t border-slate-800/80">
            {developerInfo.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl font-bold font-mono text-cyan-400">{stat.value}</div>
                <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Code & Architecture Mock Terminal */}
        <div className="lg:col-span-5 relative w-full">
          <div className="glass-panel rounded-2xl p-5 border border-slate-800 shadow-2xl relative z-10 card-hover-effect">
            
            {/* Window Topbar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                PortfolioApplication.java
              </div>
              <div className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                SpringBoot 3.3
              </div>
            </div>

            {/* Terminal Code Snippet */}
            <div className="pt-4 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto space-y-1 select-none">
              <div><span className="text-purple-400">@RestController</span></div>
              <div><span className="text-purple-400">@RequestMapping</span>(<span className="text-emerald-300">"/api/v1/services"</span>)</div>
              <div><span className="text-blue-400">public class</span> <span className="text-amber-300">BackendEngine</span> &#123;</div>
              <br />
              <div className="pl-4"><span className="text-purple-400">@PostMapping</span>(<span className="text-emerald-300">"/process"</span>)</div>
              <div className="pl-4"><span className="text-blue-400">public</span> ResponseEntity&lt;<span className="text-amber-300">ApiResponse</span>&gt; process(</div>
              <div className="pl-8"><span className="text-purple-400">@Valid @RequestBody</span> <span className="text-amber-300">PayloadDTO</span> dto</div>
              <div className="pl-4">) &#123;</div>
              <div className="pl-8 text-slate-500">// Executing high-throughput async pipelines</div>
              <div className="pl-8"><span className="text-blue-400">var</span> result = systemService.<span className="text-cyan-300">executeTask</span>(dto);</div>
              <div className="pl-8"><span className="text-purple-400">return</span> ResponseEntity.<span className="text-cyan-300">ok</span>(result);</div>
              <div className="pl-4">&#125;</div>
              <div>&#125;</div>
            </div>

            {/* Visual Hardware / Backend Badges */}
            <div className="mt-5 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
                <Server className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                <div className="text-[10px] font-mono text-slate-300">Spring Boot</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
                <Database className="w-5 h-5 text-indigo-400 mx-auto mb-1" />
                <div className="text-[10px] font-mono text-slate-300">PostgreSQL</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                <div className="text-[10px] font-mono text-slate-300">JWT Security</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
