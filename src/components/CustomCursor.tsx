import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { stiffness: 500, damping: 28 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full z-[9999] pointer-events-none mix-blend-difference"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-white/30 rounded-full z-[9998] pointer-events-none mix-blend-difference"
        style={{ 
          x, 
          y, 
          translateX: '-50%', 
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />

      {/* Trailing Light */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-white/[0.03] rounded-full z-[0] pointer-events-none blur-[80px]"
        style={{ 
          x, 
          y, 
          translateX: '-50%', 
          translateY: '-50%',
        }}
      />
    </>
  );
}
