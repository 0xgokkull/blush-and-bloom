import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { audioManager } from '../utils/audio';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(audioManager.getMusicStatus());
  const [showTooltip, setShowTooltip] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = audioManager.subscribe((playing) => {
      setIsPlaying(playing);
      if (playing) {
        setShowTooltip(false);
      }
    });
    return unsubscribe;
  }, []);

  const handleToggle = () => {
    audioManager.toggleMusic();
    setShowTooltip(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <AnimatePresence>
        {showTooltip && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-rose-pink/30 shadow-md text-xs font-semibold text-dark-plum/80 backdrop-blur-sm pointer-events-none"
          >
            <Music className="w-3.5 h-3.5 text-rose-pink animate-bounce" />
            <span>Click for soft romantic music ✨</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={handleToggle}
        aria-label={isPlaying ? "Mute romantic music" : "Play soft romantic music"}
        className={`relative p-3 rounded-full shadow-lg transition-all border flex items-center justify-center ${
          isPlaying
            ? 'bg-rose-pink text-white border-white/60 shadow-rose-pink/40 animate-pulse-soft'
            : 'bg-white/85 text-dark-plum border-rose-pink/30 hover:bg-white shadow-soft-lavender/50'
        }`}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-5 h-5" />
            {/* Tiny floating musical note note animation */}
            <motion.span
              className="absolute -top-1 -right-1 text-xs select-none"
              animate={{ y: [-2, -8, -2], opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
            >
              🎵
            </motion.span>
          </>
        ) : (
          <VolumeX className="w-5 h-5 opacity-70" />
        )}
      </motion.button>
    </div>
  );
};
