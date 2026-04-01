import React, { useState, useEffect } from 'react';
import { CyberButton } from './components/CyberButton';
import { CyberCard } from './components/CyberCard';
import { CyberInput } from './components/CyberInput';
import { Terminal, ShieldAlert, Cpu, Network, Database, Zap } from 'lucide-react';

import { BorderGlowCard } from './components/BorderGlowCard';

import { ProjectsSection, categories } from './components/ProjectsSection';
import { ProjectDetail } from './components/ProjectDetail';

export default function App() {
  const [typedText, setTypedText] = useState('');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const fullText = "SYSTEM INITIALIZED. AWAITING COMMAND...";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  // Find prev and next projects
  let prevProject = null;
  let nextProject = null;
  
  if (selectedProject) {
    const allProjects = categories.flatMap(c => c.projects);
    const currentIndex = allProjects.findIndex(p => p.id === selectedProject.id);
    
    if (currentIndex > 0) {
      prevProject = allProjects[currentIndex - 1];
    }
    if (currentIndex < allProjects.length - 1) {
      nextProject = allProjects[currentIndex + 1];
    }
  }

  if (selectedProject) {
    return (
      <ProjectDetail 
        project={selectedProject} 
        onBack={() => setSelectedProject(null)} 
        onPrev={prevProject ? () => setSelectedProject(prevProject) : undefined}
        onNext={nextProject ? () => setSelectedProject(nextProject) : undefined}
        prevProjectName={prevProject?.title}
        nextProjectName={nextProject?.title}
      />
    );
  }

  return (
    <div className="min-h-screen bg-circuit pb-24">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-accent font-sans font-bold text-xl tracking-widest">
            <Terminal className="w-6 h-6" />
            <span>Wjc.</span>
          </div>
          <div className="hidden md:flex items-center gap-4 font-mono text-sm tracking-widest">
            <a href="#" className="neon-button">
              [主页]
            </a>
            <a href="#" className="neon-button">
              [作品]
            </a>
            <a href="#" className="neon-button">
              [关于我]
            </a>
          </div>
        </div>
      </nav>

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center mb-32 overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-50 mix-blend-screen"
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-12">
            <div className="max-w-3xl space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 bg-accent/10 text-accent font-mono text-xs tracking-widest cyber-chamfer-sm">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                SYSTEM_READY
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-widest text-shadow-neon cyber-glitch-text" data-text="HELLO, I'M WANG JIACUN">
                HELLO, I'M WANG JIACUN
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground font-mono max-w-2xl leading-relaxed">
                Frontend Developer & UI/UX Designer. Building high-performance interfaces for the digital underground.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <BorderGlowCard className="text-foreground font-mono text-sm px-6 py-3 cursor-default transition-all duration-300 hover:-translate-y-1">
                  UI/UX DESIGN
                </BorderGlowCard>
                <BorderGlowCard className="text-foreground font-mono text-sm px-6 py-3 cursor-default transition-all duration-300 hover:-translate-y-1">
                  FIGMA EXPERT
                </BorderGlowCard>
                <BorderGlowCard className="text-foreground font-mono text-sm px-6 py-3 cursor-default transition-all duration-300 hover:-translate-y-1">
                  AIGC CREATOR
                </BorderGlowCard>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6">
          <ProjectsSection onProjectClick={setSelectedProject} />

        {/* Terminal Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              ESTABLISH CONNECTION
            </h2>
            <p className="text-muted-foreground font-mono mb-8">
              Enter your credentials to access the darknet marketplace. Unauthorized access will trigger immediate neural feedback.
            </p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="font-mono text-xs text-accent uppercase tracking-widest">Alias</label>
                <CyberInput placeholder="Enter your handle..." />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs text-accent uppercase tracking-widest">Passkey</label>
                <CyberInput type="password" placeholder="••••••••••••" prefix="$" />
              </div>
              <CyberButton type="submit" className="w-full mt-4">Jack In</CyberButton>
            </form>
          </div>
          
          <CyberCard variant="terminal" className="h-full min-h-[400px]">
            <div className="font-mono text-sm space-y-2 text-muted-foreground">
              <p><span className="text-accent">root@sprawl:~#</span> ./connect.sh</p>
              <p className="text-accent-tertiary">Initiating handshake sequence...</p>
              <p>Resolving host nodes [OK]</p>
              <p>Bypassing regional blocks [OK]</p>
              <p>Establishing secure tunnel [OK]</p>
              <p className="text-accent-secondary">WARNING: Corporate trace detected on node 4.</p>
              <p>Rerouting traffic... [OK]</p>
              <p className="text-accent mt-4">Connection established. Welcome to the underground.</p>
              <p className="mt-4"><span className="text-accent">root@sprawl:~#</span> <span className="inline-block w-2 h-4 bg-foreground animate-blink align-middle"></span></p>
            </div>
          </CyberCard>
        </section>
        </div>
      </main>
    </div>
  );
}
