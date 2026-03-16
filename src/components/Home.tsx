import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactPopup from './ContactPopup';

export default function Home() {
  const navigate = useNavigate();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);


  const navItems = [
    { path: '/art-branding', label: 'Art Branding Website', desc: 'Trải nghiệm số độc bản' },
    { path: '/conversion-performance', label: 'Conversion Performance', desc: 'Tối ưu hóa chuyển đổi' },
    { path: '/sales-creator', label: 'Sales Creator Program', desc: 'Hệ thống bán hàng qua video' },
    { path: '/personal-branding', label: 'Personal Branding', desc: 'Định vị chuyên gia' },
  ];
const defaultPath = navItems[0].path

const activePath = hoveredPath || defaultPath
  return (
    <div className="min-h-[max(100vh,850px)] w-full flex flex-col relative bg-[#050505] text-white overflow-x-hidden font-sans selection:bg-white/20">
      {/* Artistic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
          alt="Abstract Background" 
          className="w-full h-full object-cover mix-blend-screen"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/80 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]" />
      </div>

      {/* Header */}
      <header className="absolute top-0 w-full flex justify-between items-center p-6 md:p-8 z-50">
        <div className="flex items-center gap-4">
          {/* <button className="rounded-full border border-white/20 px-6 py-2.5 text-[clamp(0.65rem,1vw,0.75rem)] font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-colors backdrop-blur-md">
            Menu
          </button> */}
        </div>
        
        <h1 className="text-[clamp(3.25rem,3vw,1.875rem)] font-bold tracking-widest absolute left-1/2 -translate-x-1/2 text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400">
          WinHub
        </h1>
        
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-block text-[clamp(0.65rem,1vw,0.75rem)] font-mono tracking-widest uppercase text-white/50 mr-4">
            GMT 09:36 AM
          </span>
          <button 
            onClick={() => setIsContactOpen(true)}
            className="px-6 py-2.5 bg-white text-black rounded-full text-[clamp(0.65rem,1vw,0.75rem)] font-bold tracking-widest uppercase hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Đăng ký ngay
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-center relative mt-20 lg:mt-0 z-40">
        
        {/* Left Navigation (Services) */}
        <nav className="w-full lg:w-auto lg:absolute lg:left-12 lg:top-1/2 lg:-translate-y-1/2 flex flex-col z-50 mb-auto lg:mb-0 mt-8 lg:mt-0">
          <p className="text-[clamp(0.65rem,1vw,0.75rem)] font-bold tracking-[0.2em] uppercase text-white/40 mb-4 lg:mb-6 px-6 lg:px-4">Dịch vụ của chúng tôi</p>
          <div className="flex lg:flex-col gap-4 lg:gap-1 px-6 lg:px-0 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 lg:pb-0">
          {navItems.map((item) => {
  const isActive = activePath === item.path

  return (
    <button
      key={item.path}
      onClick={() => navigate(item.path)}
      onMouseEnter={() => setHoveredPath(item.path)}
      onMouseLeave={() => setHoveredPath(null)}
      className="group cursor-pointer relative px-6 py-5 lg:px-4 lg:py-4 text-left transition-all duration-500 w-[280px] lg:w-auto shrink-0 snap-center border border-white/10 lg:border-transparent rounded-2xl lg:rounded-none bg-white/5 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none"
    >
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-2xl transition-colors duration-500" />

      <div className="relative flex items-center justify-between z-10">
        <div>
          <h3
            className={`text-[clamp(1rem,2vw,1.25rem)] font-medium transition-colors duration-300 ${
              isActive
                ? "text-white"
                : "text-white/80 lg:text-white/60"
            }`}
          >
            {item.label}
          </h3>

          <p
            className={`text-[clamp(0.75rem,1vw,0.875rem)] mt-1 transition-all duration-300 ${
              isActive
                ? "text-white/60 opacity-100 h-auto"
                : "text-white/40 lg:text-white/0 lg:opacity-0 lg:h-0 lg:overflow-hidden"
            }`}
          >
            {item.desc}
          </p>
        </div>

        <ArrowRight
          size={20}
          className={`transition-all duration-500 ${
            isActive
              ? "opacity-100 translate-x-0 text-white"
              : "opacity-100 lg:opacity-0 lg:-translate-x-4 text-white/30"
          }`}
        />
      </div>
    </button>
  )
})}
          </div>
        </nav>

        {/* Right Info Text */}
        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 max-w-xs z-40">
          <div className="w-12 h-[1px] bg-white/20 mb-8" />
          <h3 className="text-[clamp(0.65rem,1vw,0.75rem)] font-bold tracking-[0.2em] uppercase mb-6 text-white/80">
            Strategic • Tech • Creative
          </h3>
          <p className="text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed text-white/50 font-light">
            WinHub là Creative Agency thế hệ mới.<br/><br/>
            Chúng tôi kết hợp <span className="text-white font-medium">chiến lược, công nghệ</span> và <span className="text-white font-medium">sáng tạo</span> để kiến tạo những trải nghiệm số mang lại tăng trưởng đột phá.
          </p>
        </div>

        {/* Center Bottom Headline */}
        <div className="absolute  lg:bottom-32 left-1/2 -translate-x-1/2 text-center w-full px-4 z-30 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="overflow-hidden"
          >
     
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className=" text-[60px] lg:text-[clamp(1rem,4vw,5rem)] font-black text-white tracking-tighter leading-[0.95] uppercase"
          >
            Chiến lược sắc bén<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30 italic font-serif font-light lowercase tracking-normal">sáng tạo</span><br/>
            không giới hạn
          </motion.h1>
        </div>
      </main>

      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
