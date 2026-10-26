import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { ScreenState } from './types';
import { questionsData } from './data/questions';
import { audioManager } from './utils/audio';
import { FloatingHearts } from './components/FloatingHearts';
import { MusicPlayer } from './components/MusicPlayer';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuestionCard } from './components/QuestionCard';
import { BouquetReveal } from './components/BouquetReveal';

export const App: React.FC = () => {
  const [screen, setScreen] = useState<ScreenState>('welcome');
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  useEffect(() => {
    audioManager.initAutoplay();
  }, []);

  const handleStartQuestions = () => {
    setQuestionIndex(0);
    setScreen('questions');
  };

  const handleNextQuestion = () => {
    if (questionIndex < questionsData.length - 1) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      setScreen('final-reveal');
    }
  };

  const handleReplay = () => {
    setQuestionIndex(0);
    setScreen('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen w-full romantic-bg flex flex-col justify-center items-center overflow-x-hidden selection:bg-rose-pink selection:text-white">
      {/* Background Floating Hearts, Petals & Sparkles */}
      <FloatingHearts />

      {/* Floating Audio Controller */}
      <MusicPlayer />

      {/* Main Content Area */}
      <div className="w-full flex items-center justify-center py-6 px-3 min-h-screen">
        <AnimatePresence mode="wait">
          {screen === 'welcome' && (
            <motion.div
              key="welcome-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full flex justify-center"
            >
              <WelcomeScreen onStart={handleStartQuestions} />
            </motion.div>
          )}

          {screen === 'questions' && (
            <motion.div
              key="questions-flow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full flex justify-center"
            >
              <QuestionCard
                data={questionsData[questionIndex]}
                onNext={handleNextQuestion}
              />
            </motion.div>
          )}

          {screen === 'final-reveal' && (
            <motion.div
              key="final-reveal-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full flex justify-center"
            >
              <BouquetReveal onReplay={handleReplay} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default App;
