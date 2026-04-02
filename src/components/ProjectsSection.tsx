import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { BorderGlowCard } from './BorderGlowCard';

export const categories = [
  {
    id: 'lng',
    name: 'LNG数字孪生平台',
    projects: [
      { 
        id: 101, 
        title: '海南LNG数字孪生平台', 
        tags: 'UI/UX DESIGN · 3D DATA VISUALIZATION', 
        award: '🏆 优秀数字化转型案例 / 行业标杆奖', 
        hasVideo: true,
        image: '/images/hainan-lng.jpg' // 替换为真实图片，例如放在 public/images/hainan-lng.jpg
      },
      { 
        id: 102, 
        title: '粤东LNG智慧巡检系统', 
        tags: 'UI/UX DESIGN · INTERACTION', 
        award: '🏆 创新设计二等奖', 
        hasVideo: false,
        image: '/images/yuedong-lng.jpg' // 替换为真实图片
      },
      { 
        id: 103, 
        title: '秦皇岛LNG安全管理驾驶舱', 
        tags: 'DATA VISUALIZATION · DASHBOARD', 
        award: '🏆 安全管理标杆项目', 
        hasVideo: true,
        image: '/images/qinhuangdao-lng.jpg' // 替换为真实图片
      },
      { 
        id: 104, 
        title: '智能班前会系统', 
        tags: 'UI/UX DESIGN · B TO B', 
        award: '🏆 最佳企业应用奖', 
        hasVideo: false,
        image: '/images/smart-meeting.jpg' // 替换为真实图片
      },
      { 
        id: 105, 
        title: '川佰科技有限公司企业大屏', 
        tags: 'DATA VISUALIZATION · BIG SCREEN', 
        award: '🏆 视觉设计一等奖', 
        hasVideo: true,
        image: '/images/chuanbai-screen.jpg' // 替换为真实图片
      },
    ]
  },
  {
    id: 'cim',
    name: '城市CIM基础平台',
    projects: [
      { 
        id: 201, 
        title: '智慧城市CIM综合管理舱', 
        tags: 'DATA VISUALIZATION · 3D MODELING', 
        award: '🏆 智慧城市创新应用一等奖', 
        hasVideo: true,
        image: '' 
      },
    ]
  },
  {
    id: 'engineering',
    name: '工改系统',
    projects: [
      { 
        id: 301, 
        title: '工程建设项目审批管理系统', 
        tags: 'B TO G · UI/UX DESIGN', 
        award: '🏆 省级优秀政务系统设计奖', 
        hasVideo: false,
        image: '' 
      },
    ]
  },
  {
    id: 'app',
    name: 'APP/小程序',
    projects: [
      { 
        id: 401, 
        title: '易换回收 APP', 
        tags: 'UI/UX DESIGN · INTERACTION', 
        award: '🏆 蓝桥杯国赛二等奖 / 省赛一等奖', 
        hasVideo: false,
        image: '' 
      },
      { 
        id: 402, 
        title: '永陵天团文创', 
        tags: 'PACKAGING · BRANDING', 
        award: '🏆 中国包装创意设计大赛国家三等奖', 
        hasVideo: true,
        image: '' 
      },
      { 
        id: 403, 
        title: '武侯的试炼 H5', 
        tags: 'H5 ADVERTISING · CANVA', 
        award: '🏆 大广赛国家三等奖\n湖南省赛三等奖', 
        hasVideo: false,
        image: '' 
      },
    ]
  }
];

export const ProjectsSection = ({ onProjectClick }: { onProjectClick?: (project: any) => void }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 md:gap-24">
        
        {/* Left Sidebar - Categories */}
        <div className="w-full md:w-1/4 flex flex-col pt-2 md:pt-12">
          <ul className="space-y-8 sticky top-24">
            {categories.map((category, index) => {
              const isActive = index === activeIndex;
              return (
                <li 
                  key={category.id}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center gap-4 cursor-pointer transition-all duration-300 ${
                    isActive ? 'text-[#a78bfa]' : 'text-[#666] hover:text-[#999]'
                  }`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                    isActive ? 'bg-[#a78bfa]' : 'bg-[#333]'
                  }`} />
                  <span className={`text-sm tracking-widest font-mono ${isActive ? 'font-bold' : ''}`}>
                    {isActive ? `0${index + 1} // ${category.name.toUpperCase()}` : category.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Content - Project List */}
        <div className="w-full md:w-3/4 flex flex-col gap-6">
          {categories[activeIndex].projects.map((project) => (
            <div key={project.id} onClick={() => onProjectClick && onProjectClick(project)} className="cursor-pointer">
              <BorderGlowCard 
                className="group relative bg-[#0a0a0f] rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
                style={{ '--border-radius': '12px', '--card-bg': '#0a0a0f' } as React.CSSProperties}
              >
                <div className="flex flex-col md:flex-row w-full h-full">
                  {/* Left Info */}
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-center z-10 relative">
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-[#a78bfa] transition-colors">{project.title}</h3>
                    <p className="text-[#a78bfa] font-mono text-[11px] tracking-[0.2em] uppercase mb-10 opacity-80">
                      {project.tags}
                    </p>
                    
                    <div className="mt-auto">
                      <p className="text-[#eab308] text-sm whitespace-pre-line leading-relaxed font-medium opacity-90">
                        {project.award}
                      </p>
                    </div>
                  </div>

                  {/* Right Image/Video Thumbnail */}
                  <div className="w-full md:w-[45%] h-[240px] md:h-auto min-h-[280px] relative overflow-hidden bg-[#111]">
                    {/* Gradient Fade Mask (Desktop only) */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10 hidden md:block" />
                    
                    {/* Image or Placeholder */}
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                        <ImageIcon className="w-12 h-12 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </BorderGlowCard>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
