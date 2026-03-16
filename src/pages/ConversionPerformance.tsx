import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { ArrowLeft, ArrowUpRight, BarChart3, Target, Zap, MousePointer2, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactPopup from '../components/ContactPopup';
import CustomCursor from '../components/CustomCursor';

export default function ConversionPerformance() {
  const navigate = useNavigate();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans relative selection:bg-[#111] selection:text-white overflow-x-hidden cursor-none">

      <CustomCursor />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#111] z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.02)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.02)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Header */}
      <header className="fixed z-50 w-full px-6 md:px-12 py-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="flex items-center gap-8">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black tracking-tighter uppercase cursor-pointer"
            onClick={() => navigate('/')}
          >
            WinHub
          </motion.span>
          <button 
            onClick={() => navigate('/')}
            className="hidden md:flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase hover:opacity-60 transition-opacity"
          >
            <ArrowLeft size={14} />
            Trở về
          </button>
        </div>
        
        <button 
          onClick={() => setIsContactOpen(true)}
          className="group flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase hover:opacity-60 transition-opacity"
        >
          <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all" />
          Tư vấn ngay <ArrowUpRight size={14} />
        </button>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-[1600px] mx-auto pt-20">
          <motion.div 
            style={{ opacity, scale }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#111]" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#111]/40">
                Conversion Performance
              </span>
            </div>
            <h1 className="text-[clamp(3rem,10vw,8.5rem)] font-black tracking-tighter leading-[0.85] uppercase">
              Tối ưu hóa <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111] via-[#444] to-[#888]">
                Chuyển đổi
              </span>
            </h1>
            
            <div className="grid md:grid-cols-12 gap-8 pt-12">
              <div className="md:col-span-6">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-[#111]/70 max-w-xl">
                  Chúng tôi không chỉ xây dựng website. Chúng tôi xây dựng <span className="text-[#111] font-medium italic">cỗ máy bán hàng</span> tự động hóa, tối ưu từng điểm chạm để biến người xem thành khách hàng.
                </p>
              </div>
              <div className="md:col-span-6 flex items-end justify-end">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-end gap-2"
                >
                  {/* <span className="text-6xl font-black tracking-tighter">+145%</span> */}
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#111]/40">Average ROI Increase</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Image Showcase */}
        <section className="px-6 md:px-12 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[21/9] w-full overflow-hidden rounded-[2rem] shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
              alt="Data Analytics" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />
            <div className="absolute bottom-12 left-12 text-white">
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-2">Data-Driven Strategy</p>
              <h3 className="text-3xl font-bold tracking-tight">Quyết định dựa trên con số</h3>
            </div>
          </motion.div>
        </section>

        {/* Core Elements Grid */}
        <section className="py-40 px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { 
                icon: <MousePointer2 className="w-6 h-6" />,
                title: 'UX Tối Ưu', 
                desc: 'Thiết kế hành trình người dùng mượt mà, loại bỏ mọi rào cản ngăn cản việc mua hàng.' 
              },
              { 
                icon: <Zap className="w-6 h-6" />,
                title: 'Copywriting', 
                desc: 'Nội dung thôi miên, đánh trúng tâm lý và nỗi đau của khách hàng mục tiêu.' 
              },
              { 
                icon: <Target className="w-6 h-6" />,
                title: 'Funnel Design', 
                desc: 'Website được cấu trúc theo logic phễu marketing, dẫn dắt khách hàng đến hành động cuối.' 
              },
              { 
                icon: <BarChart3 className="w-6 h-6" />,
                title: 'Data Tracking', 
                desc: 'Hệ thống đo lường chuẩn xác từng click, giúp tối ưu hóa liên tục dựa trên dữ liệu thực.' 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-8 bg-white rounded-3xl border border-black/5 hover:border-black/20 transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-[#F5F5F7] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#111] group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-[#111]/60 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Split Section: Process */}
        <section className="py-40 bg-[#111] text-white overflow-hidden">
          <div className="px-6 md:px-12 max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">Our Process</span>
                <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black tracking-tighter leading-none uppercase">
                  Quy trình <br/>
                  <span className="italic font-serif font-light lowercase tracking-normal text-white/60">tăng trưởng</span>
                </h2>
              </div>
              
              <div className="space-y-8">
                {[
                  { step: '01', title: 'Audit & Research', desc: 'Phân tích hiện trạng, đối thủ và hành vi khách hàng.' },
                  { step: '02', title: 'Strategy Mapping', desc: 'Xây dựng bản đồ hành trình và phễu chuyển đổi.' },
                  { step: '03', title: 'Creative Execution', desc: 'Thiết kế và viết nội dung tối ưu chuyển đổi.' },
                  { step: '04', title: 'Launch & Optimize', desc: 'Triển khai, đo lường và tinh chỉnh liên tục.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-8 group cursor-default"
                  >
                    <span className="text-sm font-mono text-white/20 group-hover:text-white transition-colors">{item.step}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-white/40 text-sm group-hover:text-white/60 transition-colors">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="aspect-square rounded-[3rem] overflow-hidden rotate-3"
              >
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2340&auto=format&fit=crop" 
                  alt="Performance" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 backdrop-blur-3xl rounded-3xl flex flex-col items-center justify-center border border-white/10 -rotate-6">
                <TrendingUp className="w-8 h-8 mb-2" />
                <span className="text-2xl font-bold">ROI</span>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-40 px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase mb-16 text-[#111]/40">Phù hợp với</h2>
              <div className="space-y-4">
                {['Education & E-learning', 'SaaS & Technology', 'High-end Ecommerce', 'Professional B2B Services'].map((tag, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 20 }}
                    className="flex items-center gap-6 py-8 border-b border-black/5 group cursor-default"
                  >
                    <span className="text-xs font-mono text-[#111]/20">0{i + 1}</span>
                    <span className="text-[clamp(1.5rem,3vw,2.5rem)] font-serif italic group-hover:text-[#111] transition-colors">{tag}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-black/5">
              <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase mb-12 text-[#111]/40">Kết quả kỳ vọng</h2>
              <div className="space-y-10">
                {[
                  'Tăng tỷ lệ chuyển đổi (CR) từ 2-5 lần', 
                  'Giảm chi phí sở hữu khách hàng (CAC)', 
                  'Tăng giá trị trung bình đơn hàng (AOV)',
                  'Xây dựng tài sản số bền vững cho doanh nghiệp'
                ].map((result, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="mt-1 w-6 h-6 rounded-full bg-black flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xl md:text-2xl font-medium leading-tight tracking-tight text-[#111]/80">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-40 px-6 md:px-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop" 
              alt="Gradient" 
              className="w-full h-full object-cover opacity-5"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-[clamp(3.5rem,10vw,9rem)] font-black uppercase tracking-tighter mb-16 leading-[0.85]">
              Sẵn sàng <br/> 
              <span className="italic font-serif font-light lowercase tracking-normal">đột phá?</span>
            </h2>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center gap-6 px-12 py-6 bg-[#111] text-white rounded-full font-bold text-xs tracking-[0.3em] uppercase hover:shadow-2xl transition-all duration-300"
            >
              Tư vấn chiến lược <ArrowUpRight size={20} />
            </motion.button>
          </div>
        </section>
      </main>

      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
