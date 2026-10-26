import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { audioManager } from '../utils/audio';

interface DodgeButtonProps {
  initialText?: string;
  onAttemptClick?: () => void;
}

export const DodgeButton: React.FC<DodgeButtonProps> = ({ 
  initialText = "NOPE 🙈",
  onAttemptClick 
}) => {
  const [positionIndex, setPositionIndex] = useState<number>(0);
  const [dodgeCount, setDodgeCount] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Short, playful labels that prevent button from widening and overflowing the card
  const playfulMessages = [
    initialText,
    "Hey! 😜",
    "Nope! 💨",
    "Nuh-uh! 💕",
    "Click YES! 🥺",
    "Too fast! 🏃‍♀️",
    "Hehe! 💗",
    "Not today! 🙈",
  ];

  // Strictly bounded waypoints:
  // - X is kept between -18px and +22px: NEVER breaches card right edge, and NEVER overlaps the YES button on the left!
  // - Y is kept between -35px and +35px: floats smoothly up and down within the card height!
  const safeWaypoints = [
    { x: 0, y: 0 },
    { x: 15, y: -32 },
    { x: -15, y: 28 },
    { x: 20, y: 15 },
    { x: -18, y: -25 },
    { x: 12, y: 32 },
    { x: -10, y: -34 },
    { x: 18, y: -18 },
  ];

  const dodge = useCallback(() => {
    audioManager.playCutePop();
    setDodgeCount((prev) => prev + 1);

    // Pick a new waypoint that is different from current one
    setPositionIndex((prevIdx) => {
      let nextIdx = (prevIdx + 1 + Math.floor(Math.random() * (safeWaypoints.length - 2))) % safeWaypoints.length;
      if (nextIdx === 0) nextIdx = 1;
      return nextIdx;
    });

    if (onAttemptClick) onAttemptClick();
  }, [onAttemptClick, safeWaypoints.length]);

  const handleInteraction = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dodge();
  };

  const currentLabel = playfulMessages[dodgeCount % playfulMessages.length];
  const currentPos = safeWaypoints[positionIndex];

  return (
    <div className="relative inline-block z-20 select-none">
      <motion.button
        ref={buttonRef}
        animate={{ 
          x: currentPos.x, 
          y: currentPos.y,
          rotate: (currentPos.x / 20) * 4
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 120, 
          damping: 14,
          mass: 0.5
        }}
        onMouseEnter={handleInteraction}
        onTouchStart={handleInteraction}
        onPointerDown={handleInteraction}
        onClick={handleInteraction}
        aria-label="No option"
        className="px-5 py-3 rounded-full font-bold text-sm sm:text-base cute-btn-secondary cursor-pointer select-none active:scale-95 shadow-md border-2 border-rose-pink/40 hover:border-rose-pink whitespace-nowrap"
      >
        {currentLabel}
      </motion.button>
    </div>
  );
};
