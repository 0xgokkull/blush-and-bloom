import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PandaHoldingHeart, CuteEnvelopeIllustration } from './illustrations/CuteIllustrations';
import { triggerHeartConfetti } from '../utils/confetti';
import { audioManager } from '../utils/audio';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    audioManager.playSparkleFlourish();
    triggerHeartConfetti();

    // Smooth delay while envelope opens before transition
    setTimeout(() => {
      onStart();
    }, 900);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto p-6 sm:p-8 flex flex-col items-center text-center z-10"
    >
      {/* Panda holding heart with floating animation */}
      <motion.div
        animate={{ y: [-6, 6, -6], rotate: [-1, 1, -1] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
        className="mb-4"
      >
        <PandaHoldingHeart className="w-40 h-40 sm:w-48 sm:h-48" />
      </motion.div>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl sm:text-4xl font-extrabold text-dark-plum tracking-tight mb-2 flex items-center justify-center gap-2"
      >
        <span>Hey, You!</span>
        <motion.span
          animate={{ rotate: [0, 15, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 1 }}
        >
          🎀
        </motion.span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="text-base sm:text-lg text-dark-plum/80 font-medium mb-8 max-w-xs"
      >
        I made a tiny little something just for you...
      </motion.p>

      {/* Cute Envelope with Seal */}
      <motion.div
        animate={isOpening ? { scale: [1, 1.15, 1.05], y: -8 } : { y: [-3, 3, -3] }}
        transition={isOpening ? { duration: 0.5 } : { repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        className="mb-8 cursor-pointer"
        onClick={handleOpen}
      >
        <CuteEnvelopeIllustration isOpen={isOpening} className="w-40 h-32 sm:w-48 sm:h-36" />
      </motion.div>

      {/* Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={handleOpen}
        disabled={isOpening}
        className="cute-btn-primary px-8 py-4 rounded-full text-base sm:text-lg font-bold flex items-center gap-2 cursor-pointer transition-transform"
      >
        <span>Open your little note</span>
        <span className="text-xl">💗</span>
      </motion.button>
    </motion.div>
  );
};
