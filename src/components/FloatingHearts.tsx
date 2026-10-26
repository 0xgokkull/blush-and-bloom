import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface FloatingItem {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  type: 'heart' | 'sparkle' | 'petal';
  color: string;
}

export const FloatingHearts: React.FC = () => {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    // Generate gentle floating hearts, petals, and sparkles
    const colors = ['#FF8FAB', '#FFD6E7', '#CDB4FF', '#FFCBA4', '#FB6F92', '#E6DFFF'];
    const generated: FloatingItem[] = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 94 + 3, // 3% to 97% width
      size: Math.random() * 14 + 10, // 10px to 24px
      duration: Math.random() * 8 + 10, // 10s to 18s smooth float
      delay: Math.random() * 8,
      type: i % 3 === 0 ? 'sparkle' : i % 3 === 1 ? 'petal' : 'heart',
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setItems(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute bottom-0 opacity-40 select-none"
          style={{ left: `${item.x}%` }}
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: ['0vh', '-110vh'],
            x: [0, Math.sin(item.id) * 35, 0],
            rotate: [0, item.id % 2 === 0 ? 180 : -180],
            opacity: [0, 0.45, 0.6, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {item.type === 'heart' ? (
            <svg
              width={item.size}
              height={item.size}
              viewBox="0 0 24 24"
              fill={item.color}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : item.type === 'petal' ? (
            <svg
              width={item.size * 0.9}
              height={item.size * 1.3}
              viewBox="0 0 20 28"
              fill={item.color}
            >
              <path d="M 10 0 C 18 10 18 20 10 28 C 2 20 2 10 10 0 Z" />
            </svg>
          ) : (
            <svg
              width={item.size * 0.85}
              height={item.size * 0.85}
              viewBox="0 0 24 24"
              fill="#FDE68A"
            >
              <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
};
