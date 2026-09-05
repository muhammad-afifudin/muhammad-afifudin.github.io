import React from 'react';
import { motion } from 'framer-motion';

/**
 * Resend-style 3D Geometric Cube
 * Sculptural, dark-canvas anchor with hairline graphite borders (#292d30)
 * and subtle Apple Blue (#0A84FF) vertex reflections.
 */
export const ResendCube3D: React.FC = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center [perspective:1000px] select-none pointer-events-none">
      <motion.div
        className="relative w-36 h-36 md:w-44 md:h-44 [transform-style:preserve-3d]"
        animate={{
          rotateX: [18, 378],
          rotateY: [24, 384],
        }}
        transition={{
          repeat: Infinity,
          duration: 24,
          ease: 'linear',
        }}
        style={{ willChange: 'transform' }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 border border-[#292d30] bg-[#000000]/80 backdrop-blur-xs flex items-center justify-center [transform:translateZ(72px)] md:[transform:translateZ(88px)]"
        >
          <div className="w-2 h-2 rounded-full bg-[#0A84FF]/60" />
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 border border-[#292d30] bg-[#000000]/80 backdrop-blur-xs flex items-center justify-center [transform:rotateY(180deg)_translateZ(72px)] md:[transform:rotateY(180deg)_translateZ(88px)]"
        >
          <div className="w-2 h-2 rounded-full bg-[#292d30]" />
        </div>

        {/* Left Face */}
        <div
          className="absolute inset-0 border border-[#292d30] bg-[#000000]/80 backdrop-blur-xs flex items-center justify-center [transform:rotateY(-90deg)_translateZ(72px)] md:[transform:rotateY(-90deg)_translateZ(88px)]"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#3b9eff]/50" />
        </div>

        {/* Right Face */}
        <div
          className="absolute inset-0 border border-[#292d30] bg-[#000000]/80 backdrop-blur-xs flex items-center justify-center [transform:rotateY(90deg)_translateZ(72px)] md:[transform:rotateY(90deg)_translateZ(88px)]"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#3ad389]/50" />
        </div>

        {/* Top Face */}
        <div
          className="absolute inset-0 border border-[#292d30] bg-[#000000]/80 backdrop-blur-xs flex items-center justify-center [transform:rotateX(90deg)_translateZ(72px)] md:[transform:rotateX(90deg)_translateZ(88px)]"
        >
          <div className="w-8 h-8 rounded-full border border-[#292d30]/60" />
        </div>

        {/* Bottom Face */}
        <div
          className="absolute inset-0 border border-[#292d30] bg-[#000000]/80 backdrop-blur-xs flex items-center justify-center [transform:rotateX(-90deg)_translateZ(72px)] md:[transform:rotateX(-90deg)_translateZ(88px)]"
        >
          <div className="w-8 h-8 rounded-full border border-[#292d30]/60" />
        </div>
      </motion.div>
    </div>
  );
};
