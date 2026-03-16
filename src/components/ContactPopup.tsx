import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          
          {/* Popup Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-[#0a0f1c] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
          >
            {/* Decorative background glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />
            
            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full z-20"
            >
              <X size={20} />
            </button>
            
            <div className="mb-8 relative z-10">
              <h2 className="text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-white mb-2 tracking-tight">Bắt đầu dự án</h2>
              <p className="text-white/60 text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed">Để lại thông tin, chuyên gia của WinHub sẽ liên hệ tư vấn chiến lược cho bạn trong vòng 24h.</p>
            </div>

            <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Họ và tên *" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-[clamp(0.875rem,1.5vw,1rem)]"
                  required
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="tel" 
                    placeholder="Số điện thoại *" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-[clamp(0.875rem,1.5vw,1rem)]"
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-[clamp(0.875rem,1.5vw,1rem)]"
                  />
                </div>
                <select 
                  defaultValue=""
                  className="w-full bg-[#131b2f] border border-white/10 rounded-xl px-5 py-4 text-white/70 focus:outline-none focus:border-white/30 focus:bg-[#1a243d] transition-all appearance-none text-[clamp(0.875rem,1.5vw,1rem)]"
                >
                  <option value="" disabled>Bạn quan tâm dịch vụ nào?</option>
                  <option value="art-branding">Art Branding Website</option>
                  <option value="conversion">Conversion Performance Website</option>
                  <option value="sales-creator">Sales Creator Program</option>
                  <option value="personal-branding">Personal Branding Program</option>
                  <option value="other">Khác</option>
                </select>
                <textarea 
                  placeholder="Chia sẻ thêm về mục tiêu của bạn..." 
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none text-[clamp(0.875rem,1.5vw,1rem)]"
                />
              </div>
              
              <button className="w-full py-4 bg-white text-black rounded-xl font-bold tracking-wide hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group mt-4 text-[clamp(1rem,1.5vw,1.125rem)]">
                <span>Gửi yêu cầu</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
