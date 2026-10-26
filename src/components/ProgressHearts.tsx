import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface ProgressHeartsProps {
  currentQuestion: number;
  totalQuestions?: number;
}

export const ProgressHearts: React.FC<ProgressHeartsProps> = ({ 
  currentQuestion, 
  totalQuestions = 4 
}) => {
  return (
    <div className="flex items-center justify-center gap-2.5 my-3 select-none">
      {Array.from({ length: totalQuestions }).map((_, index) => {
        const questionNum = index + 1;
        const isPassed = questionNum < currentQuestion;
        const isCurrent = questionNum === currentQuestion;

        return (
          <motion.div
            key={index}
            initial={{ scale: 0.8 }}
            animate={{ 
              scale: isCurrent ? [1, 1.25, 1.1] : 1,
            }}
            transition={{ 
              duration: 1.5, 
              repeat: isCurrent ? Infinity : 0,
              repeatType: 'reverse'
            }}
            className="relative flex items-center justify-center"
          >
            <Heart
              className={`w-6 h-6 transition-all duration-300 ${
                isPassed
                  ? 'fill-rose-pink text-rose-pink'
                  : isCurrent
                  ? 'fill-rose-pink text-rose-pink filter drop-shadow-[0_0_8px_rgba(255,143,171,0.8)]'
                  : 'fill-transparent text-rose-pink/40'
              }`}
            />
            {isCurrent && (
              <motion.div
                className="absolute inset-0 rounded-full bg-rose-pink/25 -z-10 blur-sm pointer-events-none"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
