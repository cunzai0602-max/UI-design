import React, { useEffect } from 'react';
import { ChevronLeft, ArrowRight } from 'lucide-react';

interface ProjectDetailProps {
  project: any;
  onBack: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  prevProjectName?: string;
  nextProjectName?: string;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ 
  project, 
  onBack, 
  onPrev, 
  onNext,
  prevProjectName,
  nextProjectName
}) => {
  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans selection:bg-[#a78bfa] selection:text-black">
      {/* Header Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-gradient-to-b from-[#0a0a0f] to-transparent">
        <button 
          onClick={onBack}
          className="group flex flex-col items-start gap-1 text-sm font-mono tracking-widest text-white/70 hover:text-white transition-colors"
        >
          <span className="flex items-center gap-2">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            BACK TO HOME
          </span>
        </button>
        <div className="text-xl font-bold tracking-widest">Wjc.</div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-24 max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Title Section */}
        <div className="mb-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">{project.title}</h1>
          <p className="text-[#a78bfa] font-mono text-sm md:text-base tracking-[0.2em] uppercase opacity-80">
            {project.tags}
          </p>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 border-t border-white/10 pt-12">
          <div>
            <h4 className="text-white/40 font-mono text-xs tracking-widest mb-4 uppercase">Time</h4>
            <p className="font-mono text-sm">2024.03 - 2024.04</p>
          </div>
          <div>
            <h4 className="text-white/40 font-mono text-xs tracking-widest mb-4 uppercase">Role</h4>
            <div className="font-mono text-sm space-y-1">
              {project.tags.split('·').map((tag: string, i: number) => (
                <p key={i}>{tag.trim()}</p>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white/40 font-mono text-xs tracking-widest mb-4 uppercase">Honors</h4>
            <p className="text-[#eab308] font-medium text-sm whitespace-pre-line leading-relaxed">
              {project.award}
            </p>
          </div>
        </div>

        {/* Text Sections */}
        <div className="space-y-16 mb-32 max-w-3xl">
          <section>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-4">
              <span className="w-1 h-6 bg-[#a78bfa] inline-block"></span>
              项目背景
            </h3>
            <p className="text-white/70 leading-relaxed text-sm md:text-base text-justify">
              200多年来，随着工业化进程的深入，大量温室气体（主要是二氧化碳）的排出，导致全球气温升高、气候发生变化，这已是不争的事实。社会的发展将人类推进到了从工业文明时代向生态文明时代转折的时期。大力倡导低碳经济，建设生态文明，成为这一时期的主旋律。与之相应，在生活层面，倡导和践行低碳生活，已成为每个公民在建设生态文明时代义不容辞的环保责任。
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-4">
              <span className="w-1 h-6 bg-[#a78bfa] inline-block"></span>
              项目介绍
            </h3>
            <p className="text-white/70 leading-relaxed text-sm md:text-base text-justify">
              {project.title} 是一个从用户痛点出发，以趣味年轻的设计风格来进行场景打造的项目。通过积累能量获得徽章和详细的流程解惑来进行用户的心智培养，力求创造一个方便、高效、有趣的平台。
            </p>
          </section>
        </div>

        {/* Large Image Area */}
        {project.image && (
          <div className="w-full rounded-2xl overflow-hidden mb-32 border border-white/5">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-8">
          {onPrev && prevProjectName ? (
            <button 
              onClick={onPrev}
              className="group flex flex-col items-start gap-2 text-left"
            >
              <span className="text-white/40 font-mono text-xs tracking-widest uppercase">Previous Project</span>
              <span className="text-xl font-bold flex items-center gap-2 group-hover:text-[#a78bfa] transition-colors">
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                {prevProjectName}
              </span>
            </button>
          ) : <div />}

          {onNext && nextProjectName ? (
            <button 
              onClick={onNext}
              className="group flex flex-col items-end gap-2 text-right"
            >
              <span className="text-white/40 font-mono text-xs tracking-widest uppercase">Next Project</span>
              <span className="text-xl font-bold flex items-center gap-2 group-hover:text-[#a78bfa] transition-colors">
                {nextProjectName}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          ) : <div />}
        </div>

      </main>
    </div>
  );
};
