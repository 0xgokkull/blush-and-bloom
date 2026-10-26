import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PandaHoldingHeart } from './illustrations/CuteIllustrations';
import { triggerCelebrationShower } from '../utils/confetti';
import { audioManager } from '../utils/audio';
import { RotateCcw, Heart } from 'lucide-react';

interface BouquetRevealProps {
  onReplay: () => void;
}

const romanticMessages = [
  {
    id: 1,
    text: "Hey... take a deep breath. 🌷",
    subtext: "Relax your shoulders, make yourself comfortable.",
  },
  {
    id: 2,
    text: "You're safe here. You don't have to be anything other than yourself. 🤍",
    subtext: "Exactly as you are is more than enough.",
  },
  {
    id: 3,
    text: "Whenever we're on call, your laughter is all I want to hear. 📞💗",
    subtext: "It honestly makes my entire day so much brighter.",
  },
  {
    id: 4,
    text: "If you break my head while blushing, I'll happily bleed for that. 🥹🩸💗",
    subtext: "Hearing you say 'nai', 'mairu', and 'eruma' is so cute... it just makes me want to do something silly, just to hear you say it all over again. 🤭💕",
  },
  {
    id: 5,
    text: "And honestly? You're so, so cute in my eyes. 🥹💗",
    subtext: "Every little expression, every genuine laugh.",
  },
  {
    id: 6,
    text: "If beauty were a competition, I'd be filing a complaint by now... because how is someone allowed to be THIS pretty? 😭💘",
    subtext: "It's frankly unfair to the rest of the universe.",
  },
];

export const BouquetReveal: React.FC<BouquetRevealProps> = ({ onReplay }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState<number>(0);
  const [isMessagesCompleted, setIsMessagesCompleted] = useState<boolean>(false);

  // Play sparkle sound whenever a new message appears
  useEffect(() => {
    audioManager.playChime(659 + currentMessageIndex * 40, 0.4);
  }, [currentMessageIndex]);

  const handleNextMessage = () => {
    if (currentMessageIndex < romanticMessages.length - 1) {
      setCurrentMessageIndex((prev) => prev + 1);
    } else {
      setIsMessagesCompleted(true);
      audioManager.playSparkleFlourish();
      triggerCelebrationShower();
    }
  };

  return (
    <div className="w-full min-h-screen py-10 px-4 flex flex-col items-center justify-center relative z-10">
      {/* Messages Phase */}
      <AnimatePresence mode="wait">
        {!isMessagesCompleted ? (
          <motion.div
            key={currentMessageIndex}
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.55 }}
            className="w-full max-w-lg glass-card rounded-3xl p-7 sm:p-10 text-center flex flex-col items-center shadow-xl border border-rose-pink/40"
          >
            {/* Panda illustration sitting beside a gift box */}
            <motion.div
              animate={{ y: [-4, 4, -4], rotate: [-1, 1, -1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="mb-6"
            >
              <PandaHoldingHeart className="w-36 h-36 sm:w-44 sm:h-44" />
            </motion.div>

            {/* Message indicator dots */}
            <div className="flex items-center gap-1.5 mb-6">
              {romanticMessages.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentMessageIndex
                      ? 'w-7 bg-rose-pink shadow-sm'
                      : idx < currentMessageIndex
                      ? 'w-2 bg-rose-pink/60'
                      : 'w-2 bg-rose-pink/20'
                  }`}
                />
              ))}
            </div>

            {/* Current Message text */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-plum leading-snug mb-3">
              {romanticMessages[currentMessageIndex].text}
            </h2>
            <p className="text-base text-dark-plum/70 font-medium mb-8">
              {romanticMessages[currentMessageIndex].subtext}
            </p>

            {/* Button to proceed to next note */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNextMessage}
              className="cute-btn-primary px-8 py-3.5 rounded-full font-bold text-base flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>
                {currentMessageIndex === romanticMessages.length - 1
                  ? "Reveal your bouquet 💐"
                  : "Next thought 💗"}
              </span>
            </motion.button>
          </motion.div>
        ) : (
          /* Bouquet Reveal Centerpiece */
          <motion.div
            key="bouquet-reveal-scene"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full max-w-2xl flex flex-col items-center text-center py-4"
          >
            {/* Header banner */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-rose-pink/40 shadow-sm mb-4 backdrop-blur-sm"
            >
              <Heart className="w-4 h-4 fill-rose-pink text-rose-pink" />
              <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-dark-plum">
                A Bouquet That Stays Fresh Forever
              </span>
              <Heart className="w-4 h-4 fill-rose-pink text-rose-pink" />
            </motion.div>

            {/* Beautiful Romantic Bouquet Artwork */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: 'spring', 
                stiffness: 180, 
                damping: 20, 
                delay: 0.25 
              }}
              className="relative my-4 flex items-center justify-center select-none"
            >
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
                {/* Dreamy ambient glow behind bouquet */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-rose-pink/25 via-baby-pink/35 to-soft-lavender/30 blur-2xl transform scale-95 pointer-events-none" />
                
                <motion.img
                  src="/bouquet.png"
                  alt="A gorgeous pastel bouquet of roses, tulips, and lavender tied with a ribbon"
                  className="w-full h-full object-contain drop-shadow-2xl relative z-10 rounded-2xl"
                  animate={{ y: [-5, 5, -5], rotate: [-0.6, 0.6, -0.6] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>

            {/* Handwritten-Style Letter Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="glass-card rounded-3xl p-6 sm:p-8 max-w-lg w-full my-6 text-center shadow-xl relative border-2 border-rose-pink/40 bg-white/85"
            >
              {/* Cute washi-tape stamp decoration on top of note */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-baby-pink/80 rounded border-dashed border border-rose-pink/40 shadow-sm rotate-1" />

              <p className="font-handwriting text-xl sm:text-2xl text-dark-plum leading-relaxed pt-2">
                These flowers are beautiful, aren't they? 🌷💗
                <br /><br />
                But if they could talk, I bet they'd say...
                <br /><br />
                <span className="text-rose-pink font-semibold">
                  "How are we supposed to compete with her? 🥹🌸
                  <br />
                  She makes us look ordinary just by existing."
                </span>
                <br /><br />
                Even the flowers are jealous of your beauty. 💐💘
              </p>
            </motion.div>

            {/* Final Message & Replay Action (Without virtual hug modal) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col items-center gap-4 mt-2 max-w-md w-full"
            >
              <p className="text-lg sm:text-xl font-bold text-dark-plum/90">
                Just a little reminder that someone thinks you're pretty amazing. 💗
              </p>

              <div className="flex items-center gap-3 w-full justify-center mt-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    audioManager.playSparkleFlourish();
                    triggerCelebrationShower();
                    onReplay();
                  }}
                  className="cute-btn-primary px-8 py-3.5 rounded-full text-base font-extrabold flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Replay from start ↻</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
