import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { QuestionData } from '../types';
import { 
  PandaMirrorBlush, 
  TeddyBearHoldingHeart, 
  PandaHoldingFlower, 
  KawaiiDollWithHeart, 
  CuteEnvelopeIllustration,
  PandaHoldingHeart 
} from './illustrations/CuteIllustrations';
import { DodgeButton } from './DodgeButton';
import { ProgressHearts } from './ProgressHearts';
import { triggerHeartConfetti } from '../utils/confetti';
import { audioManager } from '../utils/audio';

interface QuestionCardProps {
  data: QuestionData;
  onNext: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ data, onNext }) => {
  const [answeredState, setAnsweredState] = useState<'none' | 'primary' | 'secondary'>('none');
  const [stepPhase, setStepPhase] = useState<number>(0);

  // Reset state whenever the active question changes
  useEffect(() => {
    setAnsweredState('none');
    setStepPhase(0);
  }, [data.id]);

  const renderIllustration = () => {
    switch (data.illustrationType) {
      case 'panda-mirror':
        return answeredState === 'primary' ? (
          <PandaHoldingHeart className="w-40 h-40 sm:w-48 sm:h-48" />
        ) : (
          <PandaMirrorBlush className="w-40 h-40 sm:w-48 sm:h-48" />
        );
      case 'teddy-heart':
        return <TeddyBearHoldingHeart className="w-40 h-40 sm:w-48 sm:h-48" />;
      case 'panda-flower':
        return <PandaHoldingFlower className="w-40 h-40 sm:w-48 sm:h-48" />;
      case 'doll-heart':
        return answeredState !== 'none' ? (
          <CuteEnvelopeIllustration isOpen={true} className="w-44 h-36" />
        ) : (
          <KawaiiDollWithHeart className="w-40 h-40 sm:w-48 sm:h-48" />
        );
      default:
        return <PandaHoldingHeart className="w-40 h-40 sm:w-48 sm:h-48" />;
    }
  };

  // Handle Question 1 YES
  const handleQ1Yes = () => {
    setAnsweredState('primary');
    audioManager.playSparkleFlourish();
    triggerHeartConfetti();
  };

  // Handle Question 2 choices
  const handleQ2Choice = (type: 'primary' | 'secondary') => {
    setAnsweredState(type);
    audioManager.playChime(784, 0.6);
    triggerHeartConfetti();
  };

  // Handle Question 3 choices
  const handleQ3Choice = () => {
    setAnsweredState('primary');
    audioManager.playSparkleFlourish();
    triggerHeartConfetti();
    setTimeout(() => {
      setStepPhase(1);
    }, 1200);
  };

  // Handle Question 4 choices
  const handleQ4Choice = () => {
    setAnsweredState('primary');
    audioManager.playSparkleFlourish();
    triggerHeartConfetti();
  };

  return (
    <motion.div
      key={`question-container-${data.id}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-lg mx-auto p-4 sm:p-6 relative z-10"
    >
      {/* Progress Hearts Indicator */}
      <ProgressHearts currentQuestion={data.questionNumber} />

      {/* Main Question Glass Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden shadow-xl border border-rose-pink/40">
        {/* Decorative soft glowing gradients */}
        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-baby-pink/35 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-soft-lavender/35 blur-2xl pointer-events-none" />

        {/* Top Illustration */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="mb-4"
        >
          {renderIllustration()}
        </motion.div>

        {/* Content Area */}
        {answeredState === 'none' ? (
          <motion.div
            key="prompt-state"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <h2 className="text-xl sm:text-2xl font-extrabold text-dark-plum leading-snug mb-6">
              {data.question}
            </h2>

            {/* Buttons Area */}
            {data.id === 1 ? (
              /* Question 1: Fixed YES button on left, smooth floating NO button on right */
              <div className="relative flex items-center justify-center gap-4 sm:gap-6 min-h-[90px] w-full max-w-[340px] mx-auto px-2">
                {/* FIXED YES BUTTON - never moves, never covered */}
                <div className="z-10 flex-shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleQ1Yes}
                    className="cute-btn-primary px-7 py-3 rounded-full font-extrabold text-sm sm:text-base cursor-pointer shadow-md select-none"
                  >
                    {data.primaryBtnText}
                  </motion.button>
                </div>

                {/* FLOATING NO BUTTON - floats smoothly inside card without going behind YES */}
                <div className="z-20 flex-shrink-0">
                  <DodgeButton initialText={data.secondaryBtnText} />
                </div>
              </div>
            ) : data.id === 2 ? (
              /* Question 2: Two interactive buttons */
              <div className="flex flex-wrap items-center justify-center gap-4 min-h-[80px] w-full">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQ2Choice('primary')}
                  className="cute-btn-primary px-6 py-3.5 rounded-full font-bold text-sm sm:text-base cursor-pointer"
                >
                  {data.primaryBtnText}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleQ2Choice('secondary')}
                  className="cute-btn-secondary px-6 py-3.5 rounded-full font-bold text-sm sm:text-base cursor-pointer"
                >
                  {data.secondaryBtnText}
                </motion.button>
              </div>
            ) : data.id === 3 ? (
              /* Question 3: Two friendly buttons */
              <div className="flex flex-wrap items-center justify-center gap-4 min-h-[80px] w-full">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleQ3Choice}
                  className="cute-btn-primary px-6 py-3.5 rounded-full font-bold text-sm sm:text-base cursor-pointer"
                >
                  {data.primaryBtnText}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleQ3Choice}
                  className="cute-btn-secondary px-6 py-3.5 rounded-full font-bold text-sm sm:text-base cursor-pointer"
                >
                  {data.secondaryBtnText}
                </motion.button>
              </div>
            ) : (
              /* Question 4: Two options */
              <div className="flex flex-wrap items-center justify-center gap-4 min-h-[80px] w-full">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleQ4Choice}
                  className="cute-btn-primary px-6 py-3.5 rounded-full font-bold text-sm sm:text-base cursor-pointer"
                >
                  {data.primaryBtnText}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleQ4Choice}
                  className="cute-btn-secondary px-6 py-3.5 rounded-full font-bold text-sm sm:text-base cursor-pointer"
                >
                  {data.secondaryBtnText}
                </motion.button>
              </div>
            )}
          </motion.div>
        ) : (
          /* Follow-up / Response Content */
          <motion.div
            key="response-state"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full flex flex-col items-center py-2"
          >
            {data.id === 1 && (
              <div className="flex flex-col items-center">
                <p className="text-xl sm:text-2xl font-bold text-rose-pink mb-2">
                  Hehe, at least we're agreeing on something! 💕
                </p>
                <p className="text-sm text-dark-plum/70 font-medium mb-4">
                  (You really are super cute, you know...)
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onNext}
                  className="cute-btn-primary px-8 py-3 rounded-full font-bold text-base shadow-md cursor-pointer"
                >
                  Continue 💕 →
                </motion.button>
              </div>
            )}

            {data.id === 2 && (
              <div className="flex flex-col items-center">
                <p className="text-lg sm:text-xl font-bold text-dark-plum mb-4 leading-relaxed">
                  "Well, someone thinks you're pretty special. And that someone might be a little obsessed with your smile. 🤭💗"
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onNext}
                  className="cute-btn-primary px-8 py-3 rounded-full font-bold text-base shadow-md cursor-pointer"
                >
                  Continue 💕 →
                </motion.button>
              </div>
            )}

            {data.id === 3 && (
              <div className="flex flex-col items-center">
                <p className="text-lg sm:text-xl font-bold text-dark-plum mb-3 leading-snug">
                  "Give me your prettiest smile right now. No excuses! 🥹💗"
                </p>
                {stepPhase === 1 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col items-center"
                  >
                    <p className="text-base text-rose-pink font-semibold mb-4 leading-relaxed">
                      "Okay, I can't see you through this screen... but I'm imagining the cutest smile ever. 🤭"
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={onNext}
                      className="cute-btn-primary px-8 py-3 rounded-full font-bold text-base shadow-md cursor-pointer"
                    >
                      Okay, next! 🎀
                    </motion.button>
                  </motion.div>
                ) : (
                  <p className="text-xs text-rose-pink/80 font-medium animate-pulse mt-2">
                    Imagining that smile right now... ✨
                  </p>
                )}
              </div>
            )}

            {data.id === 4 && (
              <div className="flex flex-col items-center">
                <p className="text-lg sm:text-xl font-bold text-dark-plum mb-4 leading-relaxed">
                  "Okay, don't blame me if you end up smiling at your screen. 🤭💕"
                </p>
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    audioManager.playSparkleFlourish();
                    triggerHeartConfetti();
                    onNext();
                  }}
                  className="cute-btn-primary px-8 py-3.5 rounded-full font-extrabold text-base sm:text-lg shadow-lg cursor-pointer"
                >
                  Read what I wanted to say 💌
                </motion.button>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
