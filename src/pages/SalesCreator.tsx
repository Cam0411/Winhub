import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Video, TrendingUp, Users, PlayCircle, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactPopup from '../components/ContactPopup';

export default function SalesCreator() {
  const navigate = useNavigate();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-[#0066cc] selection:text-white">
      {/* Header */}
      <header className="fixed top-0 w-full flex justify-between items-center p-6 md:p-8 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/60 hover:text-[#0066cc] transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[clamp(0.65rem,1vw,0.75rem)] font-bold tracking-[0.1em] uppercase">Trang chủ</span>
        </button>
        
        <button 
          onClick={() => setIsContactOpen(true)}
          className="px-6 py-2.5 bg-[#0066cc] text-white rounded-sm text-[clamp(0.65rem,1vw,0.75rem)] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
        >
          Đăng ký tư vấn
        </button>
      </header>

      {/* Hero Section - Brutalist / Creator Vibe */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0066cc]/30 bg-[#0066cc]/10 text-[#0066cc] text-[clamp(0.65rem,1vw,0.75rem)] font-bold tracking-widest uppercase mb-12">
          <PlayCircle size={14} />
          <span>The Rise of Sales Creator</span>
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[clamp(3rem,8vw,7rem)] font-black tracking-tighter leading-[0.9] text-white mb-10 uppercase"
        >
          Sales giỏi trong tương lai là <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066cc] to-sky-400">Sales Creator</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto space-y-6 text-[clamp(1.025rem,1.8vw,1.3rem)] text-white/70 font-medium"
        >
          <p>Không phải doanh nghiệp – mà con người sẽ là thương hiệu</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-white">
            <span className="flex items-center gap-2"><CheckCircle2 className="text-[#0066cc]" size={20}/> Thu hút khách hàng</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="text-[#0066cc]" size={20}/> Tạo uy tín chuyên môn</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="text-[#0066cc]" size={20}/> Tăng tỷ lệ chốt deal</span>
          </div>
        </motion.div>
      </section>

      {/* Marquee Divider */}
      <div className="w-full overflow-hidden bg-[#0066cc] text-white py-4 flex whitespace-nowrap font-bold uppercase tracking-widest text-[clamp(0.75rem,1vw,0.875rem)]">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-8"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i}>• Video ngắn là LinkedIn mới của sales • Khách hàng không mua từ quảng cáo • Họ mua từ người họ tin</span>
          ))}
        </motion.div>
      </div>

      {/* Problem & Solution */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div className="space-y-8">
          <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-black uppercase text-white/30">01. Vấn đề</h2>
          <h3 className="text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-white">Sales hiện nay gặp vấn đề:</h3>
          <ul className="space-y-6 text-[clamp(1.125rem,2vw,1.25rem)] text-white/60">
            <li className="flex items-start gap-4 border-b border-white/10 pb-4">
              <span className="text-[#0066cc] font-mono">01</span>
              phải tìm khách liên tục
            </li>
            <li className="flex items-start gap-4 border-b border-white/10 pb-4">
              <span className="text-[#0066cc] font-mono">02</span>
              phụ thuộc vào quảng cáo
            </li>
            <li className="flex items-start gap-4 border-b border-white/10 pb-4">
              <span className="text-[#0066cc] font-mono">03</span>
              khó tạo niềm tin
            </li>
          </ul>
          <p className="text-[clamp(1.25rem,2.5vw,1.5rem)] font-bold text-[#0066cc] pt-8">
            Nhưng khách hàng ngày nay tin creator hơn salesman.
          </p>
        </div>

        <div className="space-y-8 bg-white/5 p-10 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066cc]/20 blur-[100px]" />
          <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-black uppercase text-[#0066cc]/50">02. Giải Pháp</h2>
          <h3 className="text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-white">WinHub giúp bạn trở thành Sales Creator</h3>
          <p className="text-[clamp(1.125rem,2vw,1.25rem)] text-white/80">Một người bán hàng có:</p>
          <div className="grid grid-cols-1 gap-6 pt-4">
            {['kiến thức', 'nội dung', 'tầm ảnh hưởng'].map((item, i) => (
              <div key={i} className="bg-black/50 p-6 rounded-xl border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0066cc] text-white flex items-center justify-center rounded-full font-bold shrink-0">
                  {i + 1}
                </div>
                <span className="text-[clamp(1.25rem,2.5vw,1.5rem)] font-bold uppercase tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you will build */}
      <section className="py-32 bg-white text-black px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase mb-20 text-center">Chúng tôi đi cùng với bạn</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Hệ thống content cá nhân', icon: Video },
              { title: 'Framework video bán hàng', icon: TrendingUp },
              { title: 'Kênh TikTok / Reels / Shorts', icon: PlayCircle },
              { title: 'Pipeline khách hàng từ content', icon: Users }
            ].map((item, i) => (
              <div key={i} className="border-2 border-black p-8 hover:bg-[#0066cc] hover:text-white transition-colors group">
                <item.icon size={48} className="mb-8" />
                <h3 className="text-[clamp(1.25rem,2.5vw,1.5rem)] font-bold uppercase leading-tight">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for & CTA */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-black uppercase mb-16">Dịch vụ này dành</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-32">
          {['Sales B2B', 'Sales bất động sản', 'Sales giáo dục', 'Consultant'].map((tag, i) => (
            <span key={i} className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold uppercase tracking-wider text-[clamp(0.75rem,1vw,0.875rem)] hover:bg-white hover:text-black transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>

        <div className="p-8 md:p-12 border-4 border-[#0066cc] relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#0a0a0a] px-6 text-[#0066cc] font-bold tracking-widest uppercase text-[clamp(0.75rem,1vw,0.875rem)]">
            Start Now
          </div>
          <h2 className="text-[clamp(1.75rem,5vw,3.75rem)] font-black uppercase mb-10">Sẵn sàng thay đổi?</h2>
          <button 
            onClick={() => setIsContactOpen(true)}
            className="px-8 md:px-12 py-4 md:py-6 bg-[#0066cc] text-white font-black text-[clamp(1rem,2vw,1.25rem)] uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full md:w-auto"
          >
            Nhận roadmap Sales Creator
          </button>
        </div>
      </section>

      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
