import React from 'react';
import { motion } from 'framer-motion';

// Common heart SVG icon component
export const HeartIcon: React.FC<{ className?: string; fill?: string }> = ({ 
  className = "w-5 h-5", 
  fill = "#FF8FAB" 
}) => (
  <svg viewBox="0 0 24 24" fill={fill} className={className}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

// Sparkle Star SVG
export const SparkleStar: React.FC<{ className?: string; fill?: string }> = ({ 
  className = "w-4 h-4", 
  fill = "#FDE68A" 
}) => (
  <svg viewBox="0 0 24 24" fill={fill} className={className}>
    <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
  </svg>
);

// 1. Panda Holding a Heart
export const PandaHoldingHeart: React.FC<{ className?: string }> = ({ className = "w-48 h-48" }) => (
  <div className={`relative inline-block ${className} select-none`}>
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
      <defs>
        <radialGradient id="pandaCheek" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF8FAB" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#FF8FAB" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8FAB" />
          <stop offset="100%" stopColor="#FB6F92" />
        </linearGradient>
        <linearGradient id="pandaBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F5F0EB" />
        </linearGradient>
      </defs>

      {/* Ears */}
      <circle cx="55" cy="55" r="24" fill="#3D2D38" />
      <circle cx="145" cy="55" r="24" fill="#3D2D38" />
      <circle cx="55" cy="55" r="14" fill="#FFD6E7" opacity="0.6" />
      <circle cx="145" cy="55" r="14" fill="#FFD6E7" opacity="0.6" />

      {/* Body */}
      <ellipse cx="100" cy="145" rx="55" ry="45" fill="url(#pandaBodyGrad)" />
      
      {/* Arms */}
      <path d="M 60 135 C 50 145 65 170 85 160 C 88 152 75 138 60 135 Z" fill="#3D2D38" />
      <path d="M 140 135 C 150 145 135 170 115 160 C 112 152 125 138 140 135 Z" fill="#3D2D38" />

      {/* Feet */}
      <ellipse cx="70" cy="180" rx="18" ry="12" fill="#3D2D38" />
      <ellipse cx="130" cy="180" rx="18" ry="12" fill="#3D2D38" />
      <circle cx="70" cy="180" r="6" fill="#FFD6E7" opacity="0.6" />
      <circle cx="130" cy="180" r="6" fill="#FFD6E7" opacity="0.6" />

      {/* Head */}
      <circle cx="100" cy="95" r="54" fill="url(#pandaBodyGrad)" stroke="#F0E8E2" strokeWidth="2" />

      {/* Eye Patches */}
      <ellipse cx="75" cy="92" rx="16" ry="19" fill="#3D2D38" transform="rotate(-15 75 92)" />
      <ellipse cx="125" cy="92" rx="16" ry="19" fill="#3D2D38" transform="rotate(15 125 92)" />

      {/* Eyes & Catchlights */}
      <circle cx="77" cy="91" r="7" fill="#FFFFFF" />
      <circle cx="78" cy="90" r="5" fill="#1C1B1F" />
      <circle cx="76" cy="88" r="2.2" fill="#FFFFFF" />
      <circle cx="80" cy="92" r="1" fill="#FFFFFF" />

      <circle cx="123" cy="91" r="7" fill="#FFFFFF" />
      <circle cx="122" cy="90" r="5" fill="#1C1B1F" />
      <circle cx="120" cy="88" r="2.2" fill="#FFFFFF" />
      <circle cx="124" cy="92" r="1" fill="#FFFFFF" />

      {/* Blushing Cheeks */}
      <circle cx="60" cy="110" r="14" fill="url(#pandaCheek)" />
      <circle cx="140" cy="110" r="14" fill="url(#pandaCheek)" />

      {/* Cute Nose and Kawaii Mouth */}
      <ellipse cx="100" cy="102" rx="5" ry="3.5" fill="#3D2D38" />
      <path d="M 94 107 C 97 113 100 111 100 107 C 100 111 103 113 106 107" fill="none" stroke="#3D2D38" strokeWidth="2.5" strokeLinecap="round" />

      {/* Heart Held In Paws */}
      <g transform="translate(100, 142) scale(1.15)">
        <path 
          d="M 0 5 C 0 5 -25 -25 0 -40 C 25 -25 0 5 0 5 Z" 
          fill="url(#heartGrad)" 
          transform="scale(0.85) translate(0, 15) rotate(180)" 
          className="drop-shadow-md animate-pulse-soft"
        />
        {/* Heart Sparkle */}
        <circle cx="7" cy="-12" r="2.5" fill="#FFFFFF" opacity="0.8" />
        <circle cx="12" cy="-6" r="1.5" fill="#FFFFFF" opacity="0.7" />
      </g>
    </svg>
    {/* Floating tiny sparkles */}
    <motion.div 
      className="absolute top-2 right-4 text-sparkle-gold"
      animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 20, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <SparkleStar className="w-5 h-5" fill="#FFCBA4" />
    </motion.div>
    <motion.div 
      className="absolute top-10 left-3 text-rose-pink"
      animate={{ y: [-2, 2, -2] }}
      transition={{ repeat: Infinity, duration: 2.5 }}
    >
      <HeartIcon className="w-4 h-4" />
    </motion.div>
  </div>
);

// 2. Panda Looking in Mirror & Blushing (Question 1)
export const PandaMirrorBlush: React.FC<{ className?: string }> = ({ className = "w-48 h-48" }) => (
  <div className={`relative inline-block ${className} select-none`}>
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
      <defs>
        <linearGradient id="mirrorFrame" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD6E7" />
          <stop offset="50%" stopColor="#CDB4FF" />
          <stop offset="100%" stopColor="#FF8FAB" />
        </linearGradient>
        <radialGradient id="mirrorGlass" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#F3E8FF" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#E6DFFF" stopOpacity="0.6" />
        </radialGradient>
        <radialGradient id="deepBlush" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FB6F92" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FF8FAB" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Vintage Mirror Back / Handle */}
      <rect x="94" y="150" width="12" height="40" rx="6" fill="url(#mirrorFrame)" />
      <circle cx="100" cy="188" r="8" fill="url(#mirrorFrame)" />

      {/* Mirror Outer Oval Frame */}
      <ellipse cx="100" cy="90" rx="68" ry="74" fill="url(#mirrorFrame)" stroke="#FFFFFF" strokeWidth="2.5" />
      {/* Decorative Mirror Bow on Top */}
      <path d="M 90 20 C 82 12 70 20 84 28 C 94 34 100 26 100 26 C 100 26 106 34 116 28 C 130 20 118 12 110 20 Z" fill="#FF8FAB" />
      <circle cx="100" cy="24" r="4" fill="#FB6F92" />

      {/* Mirror Glass Surface */}
      <ellipse cx="100" cy="90" rx="58" ry="64" fill="url(#mirrorGlass)" />

      {/* Panda Reflected in the Mirror */}
      {/* Ears */}
      <circle cx="68" cy="58" r="16" fill="#3D2D38" />
      <circle cx="132" cy="58" r="16" fill="#3D2D38" />
      <circle cx="68" cy="58" r="8" fill="#FFD6E7" />
      <circle cx="132" cy="58" r="8" fill="#FFD6E7" />

      {/* Panda Head */}
      <circle cx="100" cy="90" r="40" fill="#FFFFFF" />

      {/* Eye Patches */}
      <ellipse cx="82" cy="88" rx="12" ry="14" fill="#3D2D38" transform="rotate(-15 82 88)" />
      <ellipse cx="118" cy="88" rx="12" ry="14" fill="#3D2D38" transform="rotate(15 118 88)" />

      {/* Starry anime shy eyes */}
      <circle cx="83" cy="88" r="6" fill="#FFFFFF" />
      <circle cx="83" cy="88" r="4" fill="#1C1B1F" />
      <circle cx="81" cy="86" r="1.8" fill="#FFFFFF" />
      <circle cx="84" cy="89" r="1" fill="#FFFFFF" />

      <circle cx="117" cy="88" r="6" fill="#FFFFFF" />
      <circle cx="117" cy="88" r="4" fill="#1C1B1F" />
      <circle cx="115" cy="86" r="1.8" fill="#FFFFFF" />
      <circle cx="118" cy="89" r="1" fill="#FFFFFF" />

      {/* Super Blushing Cheeks */}
      <ellipse cx="70" cy="102" rx="14" ry="10" fill="url(#deepBlush)" />
      <ellipse cx="130" cy="102" rx="14" ry="10" fill="url(#deepBlush)" />
      {/* Blush lines */}
      <line x1="66" y1="100" x2="74" y2="105" stroke="#FB6F92" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="72" y1="99" x2="78" y2="104" stroke="#FB6F92" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="122" y1="100" x2="130" y2="105" stroke="#FB6F92" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="128" y1="99" x2="134" y2="104" stroke="#FB6F92" strokeWidth="1.5" strokeLinecap="round" />

      {/* Nose and Shy W-smile */}
      <ellipse cx="100" cy="96" rx="4" ry="2.8" fill="#3D2D38" />
      <path d="M 96 100 Q 100 104 104 100" fill="none" stroke="#3D2D38" strokeWidth="2" strokeLinecap="round" />

      {/* Cute Paws pressed against blushing cheeks */}
      <circle cx="68" cy="106" r="10" fill="#3D2D38" />
      <circle cx="132" cy="106" r="10" fill="#3D2D38" />
      <circle cx="68" cy="106" r="4" fill="#FFD6E7" />
      <circle cx="132" cy="106" r="4" fill="#FFD6E7" />

      {/* Glass Glare Highlights */}
      <path d="M 68 45 Q 100 35 125 45 Q 115 55 75 52 Z" fill="#FFFFFF" opacity="0.45" />
    </svg>
    {/* Floating tiny blush hearts */}
    <motion.div 
      className="absolute top-6 left-6"
      animate={{ y: [-4, 4, -4], scale: [0.9, 1.1, 0.9] }}
      transition={{ repeat: Infinity, duration: 2.2 }}
    >
      <HeartIcon className="w-5 h-5 text-rose-pink" fill="#FF8FAB" />
    </motion.div>
    <motion.div 
      className="absolute top-10 right-4"
      animate={{ rotate: [-10, 10, -10] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <SparkleStar className="w-4 h-4 text-sparkle-gold" fill="#FDE68A" />
    </motion.div>
  </div>
);

// 3. Cute Teddy Bear Holding Little Heart (Question 2)
export const TeddyBearHoldingHeart: React.FC<{ className?: string }> = ({ className = "w-48 h-48" }) => (
  <div className={`relative inline-block ${className} select-none`}>
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
      <defs>
        <radialGradient id="teddyGrad" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#FFE0B2" />
          <stop offset="60%" stopColor="#FFCBA4" />
          <stop offset="100%" stopColor="#F5B288" />
        </radialGradient>
        <radialGradient id="teddySnout" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF9F5" />
          <stop offset="100%" stopColor="#FFEBDC" />
        </radialGradient>
        <linearGradient id="teddyHeart" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8FAB" />
          <stop offset="100%" stopColor="#FB6F92" />
        </linearGradient>
      </defs>

      {/* Teddy Ears */}
      <circle cx="58" cy="56" r="22" fill="url(#teddyGrad)" />
      <circle cx="142" cy="56" r="22" fill="url(#teddyGrad)" />
      <circle cx="58" cy="56" r="12" fill="#FFB5A7" opacity="0.6" />
      <circle cx="142" cy="56" r="12" fill="#FFB5A7" opacity="0.6" />

      {/* Teddy Body */}
      <ellipse cx="100" cy="145" rx="52" ry="44" fill="url(#teddyGrad)" />

      {/* Teddy Feet with Paw Pads */}
      <ellipse cx="65" cy="178" rx="19" ry="14" fill="url(#teddyGrad)" />
      <ellipse cx="135" cy="178" rx="19" ry="14" fill="url(#teddyGrad)" />
      {/* Pads */}
      <ellipse cx="65" cy="178" rx="11" ry="8" fill="#FFB5A7" opacity="0.8" />
      <circle cx="58" cy="170" r="3" fill="#FFB5A7" opacity="0.8" />
      <circle cx="65" cy="168" r="3" fill="#FFB5A7" opacity="0.8" />
      <circle cx="72" cy="170" r="3" fill="#FFB5A7" opacity="0.8" />

      <ellipse cx="135" cy="178" rx="11" ry="8" fill="#FFB5A7" opacity="0.8" />
      <circle cx="128" cy="170" r="3" fill="#FFB5A7" opacity="0.8" />
      <circle cx="135" cy="168" r="3" fill="#FFB5A7" opacity="0.8" />
      <circle cx="142" cy="170" r="3" fill="#FFB5A7" opacity="0.8" />

      {/* Teddy Arms */}
      <path d="M 55 130 Q 55 160 85 155 Q 75 135 65 125 Z" fill="url(#teddyGrad)" />
      <path d="M 145 130 Q 145 160 115 155 Q 125 135 135 125 Z" fill="url(#teddyGrad)" />

      {/* Teddy Head */}
      <circle cx="100" cy="92" r="48" fill="url(#teddyGrad)" />

      {/* Cute Teddy Snout */}
      <ellipse cx="100" cy="102" rx="20" ry="15" fill="url(#teddySnout)" />
      
      {/* Heart-shaped Nose */}
      <path d="M 100 95 C 97 92 93 94 95 98 L 100 102 L 105 98 C 107 94 103 92 100 95 Z" fill="#593A50" />
      
      {/* Stitched Teddy Smile */}
      <path d="M 100 102 L 100 107" stroke="#593A50" strokeWidth="2" strokeLinecap="round" />
      <path d="M 94 107 Q 100 112 106 107" fill="none" stroke="#593A50" strokeWidth="2" strokeLinecap="round" />

      {/* Button Eyes with Highlights */}
      <circle cx="78" cy="86" r="6" fill="#3D2D38" />
      <circle cx="76" cy="84" r="2.2" fill="#FFFFFF" />
      <circle cx="79" cy="87" r="1" fill="#FFFFFF" />

      <circle cx="122" cy="86" r="6" fill="#3D2D38" />
      <circle cx="120" cy="84" r="2.2" fill="#FFFFFF" />
      <circle cx="123" cy="87" r="1" fill="#FFFFFF" />

      {/* Soft Rosy Cheeks */}
      <circle cx="68" cy="100" r="9" fill="#FF8FAB" opacity="0.6" />
      <circle cx="132" cy="100" r="9" fill="#FF8FAB" opacity="0.6" />

      {/* Heart Puffy Pillow held tight */}
      <g transform="translate(100, 142)">
        <path 
          d="M 0 10 C -25 -15 -35 -40 0 -60 C 35 -40 25 -15 0 10 Z" 
          fill="url(#teddyHeart)" 
          transform="scale(0.55) translate(0, 10)" 
          className="drop-shadow-md"
        />
        {/* Heart stitches */}
        <path 
          d="M 0 10 C -25 -15 -35 -40 0 -60 C 35 -40 25 -15 0 10 Z" 
          fill="none" 
          stroke="#FFFFFF" 
          strokeWidth="1.8" 
          strokeDasharray="4 3" 
          transform="scale(0.50) translate(0, 8)"
          opacity="0.8"
        />
      </g>
    </svg>
    <motion.div 
      className="absolute top-2 left-6"
      animate={{ y: [-3, 3, -3] }}
      transition={{ repeat: Infinity, duration: 2.5 }}
    >
      <HeartIcon className="w-5 h-5 text-rose-pink" fill="#FF8FAB" />
    </motion.div>
  </div>
);

// 4. Adorable Panda Holding a Flower (Question 3)
export const PandaHoldingFlower: React.FC<{ className?: string }> = ({ className = "w-48 h-48" }) => (
  <div className={`relative inline-block ${className} select-none`}>
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
      <defs>
        <radialGradient id="pandaCheek3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF8FAB" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FF8FAB" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="flowerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF8FAB" />
          <stop offset="100%" stopColor="#FB6F92" />
        </linearGradient>
      </defs>

      {/* Ears */}
      <circle cx="56" cy="54" r="22" fill="#3D2D38" />
      <circle cx="144" cy="54" r="22" fill="#3D2D38" />
      <circle cx="56" cy="54" r="12" fill="#FFD6E7" opacity="0.6" />
      <circle cx="144" cy="54" r="12" fill="#FFD6E7" opacity="0.6" />

      {/* Body */}
      <ellipse cx="100" cy="144" rx="52" ry="42" fill="#FFFFFF" stroke="#F0E8E2" strokeWidth="2" />

      {/* Legs */}
      <ellipse cx="68" cy="178" rx="17" ry="12" fill="#3D2D38" />
      <ellipse cx="132" cy="178" rx="17" ry="12" fill="#3D2D38" />

      {/* Head */}
      <circle cx="100" cy="94" r="50" fill="#FFFFFF" stroke="#F0E8E2" strokeWidth="2" />

      {/* Eye Patches */}
      <ellipse cx="76" cy="92" rx="15" ry="18" fill="#3D2D38" transform="rotate(-15 76 92)" />
      <ellipse cx="124" cy="92" rx="15" ry="18" fill="#3D2D38" transform="rotate(15 124 92)" />

      {/* Eyes Smiling Kawaii curved arcs */}
      <path d="M 70 94 Q 76 86 82 94" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <path d="M 118 94 Q 124 86 130 94" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />

      {/* Rosy Cheeks */}
      <circle cx="62" cy="108" r="14" fill="url(#pandaCheek3)" />
      <circle cx="138" cy="108" r="14" fill="url(#pandaCheek3)" />

      {/* Nose and Joyful Mouth */}
      <ellipse cx="100" cy="100" rx="4.5" ry="3" fill="#3D2D38" />
      <path d="M 94 105 Q 100 114 106 105" fill="#FF8FAB" stroke="#3D2D38" strokeWidth="2" />

      {/* Flower Stem held by cute paws */}
      <path d="M 108 170 Q 120 145 126 115" fill="none" stroke="#68B984" strokeWidth="4" strokeLinecap="round" />
      {/* Flower Leaf */}
      <path d="M 118 140 Q 135 135 130 148 Q 120 145 118 140 Z" fill="#84D296" />

      {/* Paws */}
      <circle cx="95" cy="150" r="10" fill="#3D2D38" />
      <circle cx="115" cy="148" r="10" fill="#3D2D38" />

      {/* Tulip / Rose Flower Blossom */}
      <g transform="translate(126, 110)">
        <path d="M 0 0 C -15 -10 -15 -35 0 -38 C 15 -35 15 -10 0 0 Z" fill="url(#flowerGrad)" />
        <path d="M -8 -8 C -22 -18 -10 -35 0 -38 C -4 -25 0 -15 -8 -8 Z" fill="#FFAEC0" />
        <path d="M 8 -8 C 22 -18 10 -35 0 -38 C 4 -25 0 -15 8 -8 Z" fill="#FF7096" />
        <circle cx="-1" cy="-22" r="2" fill="#FFFFFF" opacity="0.8" />
      </g>
    </svg>
    <motion.div 
      className="absolute top-1 right-2 text-sparkle-gold"
      animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 15, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <SparkleStar className="w-5 h-5" fill="#FDE68A" />
    </motion.div>
  </div>
);

// 5. Cute Kawaii Doll Holding Pink Heart (Question 4)
export const KawaiiDollWithHeart: React.FC<{ className?: string }> = ({ className = "w-48 h-48" }) => (
  <div className={`relative inline-block ${className} select-none`}>
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
      <defs>
        <radialGradient id="dollFace" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#FFF9F5" />
          <stop offset="100%" stopColor="#FFEBDC" />
        </radialGradient>
        <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E6DFFF" />
          <stop offset="50%" stopColor="#CDB4FF" />
          <stop offset="100%" stopColor="#B39DDB" />
        </linearGradient>
        <linearGradient id="dressGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD6E7" />
          <stop offset="100%" stopColor="#FF8FAB" />
        </linearGradient>
      </defs>

      {/* Twin Buns Hair */}
      <circle cx="48" cy="62" r="24" fill="url(#hairGrad)" />
      <circle cx="152" cy="62" r="24" fill="url(#hairGrad)" />
      {/* Hair Ribbon Ribbons on Buns */}
      <ellipse cx="48" cy="78" rx="8" ry="5" fill="#FF8FAB" />
      <ellipse cx="152" cy="78" rx="8" ry="5" fill="#FF8FAB" />
      <circle cx="48" cy="78" r="3" fill="#FB6F92" />
      <circle cx="152" cy="78" r="3" fill="#FB6F92" />

      {/* Cute Dress */}
      <path d="M 75 140 L 60 185 L 140 185 L 125 140 Z" fill="url(#dressGrad)" />
      {/* White lace trim on dress bottom */}
      <path d="M 60 185 Q 70 190 80 185 Q 90 190 100 185 Q 110 190 120 185 Q 130 190 140 185" fill="none" stroke="#FFFFFF" strokeWidth="3" />

      {/* Little shoes */}
      <ellipse cx="85" cy="188" rx="10" ry="6" fill="#593A50" />
      <ellipse cx="115" cy="188" rx="10" ry="6" fill="#593A50" />

      {/* Doll Face */}
      <circle cx="100" cy="98" r="46" fill="url(#dollFace)" />

      {/* Front Hair Bangs */}
      <path d="M 54 90 C 54 50 146 50 146 90 C 136 78 122 75 100 78 C 78 75 64 78 54 90 Z" fill="url(#hairGrad)" />

      {/* Huge expressive anime doll eyes */}
      <ellipse cx="80" cy="100" rx="9" ry="12" fill="#593A50" />
      <ellipse cx="120" cy="100" rx="9" ry="12" fill="#593A50" />
      {/* Eye highlights */}
      <circle cx="77" cy="95" r="4" fill="#FFFFFF" />
      <circle cx="82" cy="104" r="2" fill="#FFFFFF" />
      <circle cx="117" cy="95" r="4" fill="#FFFFFF" />
      <circle cx="122" cy="104" r="2" fill="#FFFFFF" />

      {/* Eyelashes */}
      <path d="M 72 92 Q 80 88 88 92" stroke="#593A50" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 112 92 Q 120 88 128 92" stroke="#593A50" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Blushing Peachy Pink Cheeks */}
      <ellipse cx="70" cy="112" rx="10" ry="7" fill="#FF8FAB" opacity="0.75" />
      <ellipse cx="130" cy="112" rx="10" ry="7" fill="#FF8FAB" opacity="0.75" />

      {/* Sweet Smiling Mouth */}
      <path d="M 96 116 Q 100 122 104 116" fill="none" stroke="#FB6F92" strokeWidth="2.5" strokeLinecap="round" />

      {/* Holding Pink Heart in Both Hands */}
      <g transform="translate(100, 148) scale(0.9)">
        <path 
          d="M 12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
          fill="#FB6F92" 
          transform="translate(-12, -12) scale(2)"
          className="drop-shadow-sm"
        />
        <circle cx="4" cy="-4" r="2.5" fill="#FFFFFF" opacity="0.8" />
      </g>
      {/* Little doll hands */}
      <circle cx="82" cy="148" r="6" fill="#FFEBDC" />
      <circle cx="118" cy="148" r="6" fill="#FFEBDC" />
    </svg>
    <motion.div 
      className="absolute top-4 left-6"
      animate={{ scale: [0.9, 1.15, 0.9] }}
      transition={{ repeat: Infinity, duration: 2.2 }}
    >
      <HeartIcon className="w-5 h-5 text-rose-pink" fill="#FF8FAB" />
    </motion.div>
  </div>
);

// 6. Masterpiece Illustrated Flower Bouquet (Final Reveal Highlight)
export const FlowerBouquetIllustration: React.FC<{ className?: string }> = ({ className = "w-72 h-80" }) => (
  <div className={`relative inline-block ${className} select-none`}>
    <svg viewBox="0 0 320 340" className="w-full h-full drop-shadow-xl overflow-visible">
      <defs>
        {/* Rose Gradients */}
        <radialGradient id="rosePink" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#FFD6E7" />
          <stop offset="70%" stopColor="#FF8FAB" />
          <stop offset="100%" stopColor="#E2557B" />
        </radialGradient>
        <radialGradient id="roseDeep" cx="45%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FFC2D1" />
          <stop offset="45%" stopColor="#FF8FAB" />
          <stop offset="100%" stopColor="#D93864" />
        </radialGradient>
        {/* Tulip White & Cream Gradient */}
        <linearGradient id="tulipWhite" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#FFF9F5" />
          <stop offset="100%" stopColor="#FFE5EC" />
        </linearGradient>
        {/* Lavender Sprig Gradient */}
        <linearGradient id="lavenderGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E6DFFF" />
          <stop offset="50%" stopColor="#CDB4FF" />
          <stop offset="100%" stopColor="#9C77D9" />
        </linearGradient>
        {/* Leaf Gradients */}
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A8D5BA" />
          <stop offset="100%" stopColor="#5B9A76" />
        </linearGradient>
        <linearGradient id="eucalyptusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4E4D3" />
          <stop offset="100%" stopColor="#7EAF96" />
        </linearGradient>
        {/* Wrapping Paper Gradient */}
        <linearGradient id="paperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF0F5" />
          <stop offset="50%" stopColor="#FFD6E7" />
          <stop offset="100%" stopColor="#FFC2D1" />
        </linearGradient>
        {/* Ribbon Gradient */}
        <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD6E7" />
          <stop offset="50%" stopColor="#FF8FAB" />
          <stop offset="100%" stopColor="#FB6F92" />
        </linearGradient>
      </defs>

      {/* Fresh Stems emerging from under the bow */}
      <g stroke="#5B9A76" strokeWidth="6" strokeLinecap="round">
        <line x1="150" y1="210" x2="135" y2="295" />
        <line x1="160" y1="210" x2="160" y2="305" />
        <line x1="170" y1="210" x2="185" y2="295" />
        <line x1="145" y1="212" x2="125" y2="285" />
        <line x1="175" y1="212" x2="195" y2="285" />
      </g>

      {/* Wrapping Paper Cone cradling the bouquet */}
      <path 
        d="M 95 155 Q 85 205 145 225 L 175 225 Q 235 205 225 155 Q 160 175 95 155 Z" 
        fill="url(#paperGrad)" 
        stroke="#FFAEC0" 
        strokeWidth="1.5" 
        opacity="0.9"
      />
      {/* Paper fold flap detail */}
      <path 
        d="M 95 155 Q 160 190 195 185 Q 155 218 145 225 Z" 
        fill="#FFE5EC" 
        opacity="0.75" 
      />

      {/* Background Foliage and Eucalyptus Leaves */}
      <g>
        {/* Eucalyptus left */}
        <path d="M 120 180 C 80 140 60 110 80 70 C 95 95 115 130 130 170 Z" fill="url(#eucalyptusGrad)" opacity="0.9" />
        <circle cx="85" cy="85" r="14" fill="url(#eucalyptusGrad)" />
        <circle cx="95" cy="115" r="15" fill="url(#eucalyptusGrad)" />
        <circle cx="110" cy="150" r="16" fill="url(#eucalyptusGrad)" />

        {/* Eucalyptus right */}
        <path d="M 200 180 C 240 140 260 110 240 70 C 225 95 205 130 190 170 Z" fill="url(#eucalyptusGrad)" opacity="0.9" />
        <circle cx="235" cy="85" r="14" fill="url(#eucalyptusGrad)" />
        <circle cx="225" cy="115" r="15" fill="url(#eucalyptusGrad)" />
        <circle cx="210" cy="150" r="16" fill="url(#eucalyptusGrad)" />

        {/* Sage foliage top center */}
        <path d="M 160 140 C 150 70 170 40 160 30 C 150 50 140 80 150 140 Z" fill="url(#leafGrad)" />
      </g>

      {/* Lavender Sprigs sticking out beautifully */}
      <g>
        {/* Left Lavender */}
        <path d="M 130 160 Q 100 100 85 45" stroke="#7EAF96" strokeWidth="2.5" fill="none" />
        {[45, 60, 75, 90].map((y, idx) => (
          <ellipse key={idx} cx={85 + idx * 5} cy={y} rx="5" ry="8" fill="url(#lavenderGrad)" transform={`rotate(${-20 + idx * 5} ${85 + idx * 5} ${y})`} />
        ))}

        {/* Right Lavender */}
        <path d="M 190 160 Q 220 100 235 45" stroke="#7EAF96" strokeWidth="2.5" fill="none" />
        {[45, 60, 75, 90].map((y, idx) => (
          <ellipse key={idx} cx={235 - idx * 5} cy={y} rx="5" ry="8" fill="url(#lavenderGrad)" transform={`rotate(${20 - idx * 5} ${235 - idx * 5} ${y})`} />
        ))}
      </g>

      {/* White Delicate Tulips (Background layer) */}
      <g transform="translate(110, 85)">
        <path d="M 0 35 C -25 15 -25 -20 0 -30 C 25 -20 25 15 0 35 Z" fill="url(#tulipWhite)" stroke="#FFD6E7" strokeWidth="1" />
        <path d="M -8 30 C -20 10 -15 -20 0 -30 C -10 -10 -5 15 -8 30 Z" fill="#FFFFFF" />
        <path d="M 8 30 C 20 10 15 -20 0 -30 C 10 -10 5 15 8 30 Z" fill="#FFF0F5" />
      </g>
      <g transform="translate(210, 85)">
        <path d="M 0 35 C -25 15 -25 -20 0 -30 C 25 -20 25 15 0 35 Z" fill="url(#tulipWhite)" stroke="#FFD6E7" strokeWidth="1" />
        <path d="M -8 30 C -20 10 -15 -20 0 -30 C -10 -10 -5 15 -8 30 Z" fill="#FFF0F5" />
        <path d="M 8 30 C 20 10 15 -20 0 -30 C 10 -10 5 15 8 30 Z" fill="#FFFFFF" />
      </g>

      {/* Baby's Breath (Gypsophila) delicate clusters */}
      <g fill="#FFFFFF" stroke="#E6DFFF" strokeWidth="0.5">
        {[
          { cx: 100, cy: 130 }, { cx: 108, cy: 125 }, { cx: 96, cy: 122 },
          { cx: 220, cy: 130 }, { cx: 212, cy: 125 }, { cx: 224, cy: 122 },
          { cx: 160, cy: 75 },  { cx: 152, cy: 68 },  { cx: 168, cy: 70 },
          { cx: 125, cy: 55 },  { cx: 195, cy: 55 }
        ].map((pt, i) => (
          <circle key={i} cx={pt.cx} cy={pt.cy} r={3.2} />
        ))}
      </g>

      {/* Supporting Roses (Left and Right) */}
      <g transform="translate(118, 155) scale(0.82)">
        <circle cx="0" cy="0" r="42" fill="url(#rosePink)" />
        <path d="M -30 -10 C -35 20 0 35 25 20 C 35 -5 10 -30 -10 -30 Z" fill="url(#roseDeep)" />
        <path d="M -8 -3 C -8 6 6 8 8 0 C 8 -7 -4 -8 -6 -3" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <g transform="translate(202, 155) scale(0.82)">
        <circle cx="0" cy="0" r="42" fill="url(#rosePink)" />
        <path d="M -30 -10 C -35 20 0 35 25 20 C 35 -5 10 -30 -10 -30 Z" fill="url(#roseDeep)" />
        <path d="M -8 -3 C -8 6 6 8 8 0 C 8 -7 -4 -8 -6 -3" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Main Blooming Pink Rose - Centerpiece */}
      <g transform="translate(160, 145)">
        <circle cx="0" cy="0" r="46" fill="url(#roseDeep)" />
        <path d="M -40 -10 C -45 25 0 45 35 30 C 45 -5 10 -40 -15 -40 Z" fill="url(#rosePink)" />
        <path d="M -28 -18 C -35 15 0 32 25 18 C 30 -5 10 -30 -10 -30 Z" fill="url(#roseDeep)" />
        <path d="M -18 -8 C -22 10 0 22 18 10 C 22 -5 5 -20 -8 -20 Z" fill="url(#rosePink)" />
        <path d="M -10 -3 C -10 6 6 8 8 0 C 8 -7 -4 -8 -6 -3" fill="none" stroke="#D93864" strokeWidth="3" strokeLinecap="round" />
        <circle cx="0" cy="0" r="5" fill="#FFAEC0" />
      </g>

      {/* Additional bottom rosebud bridging directly into the ribbon */}
      <g transform="translate(160, 185) scale(0.68)">
        <circle cx="0" cy="0" r="36" fill="url(#rosePink)" />
        <path d="M -22 -8 C -28 14 0 26 20 14 C 24 -4 8 -22 -6 -22 Z" fill="url(#roseDeep)" />
        <path d="M -6 -2 C -6 4 4 6 6 0 C 6 -5 -2 -6 -4 -2" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Elegant Pastel Satin Ribbon and Bow tied tight around stems */}
      <g transform="translate(160, 215)">
        {/* Bow Tails */}
        <path d="M -5 8 C -20 35 -30 60 -35 80 C -25 65 -15 50 -5 15 Z" fill="url(#ribbonGrad)" />
        <path d="M 5 8 C 20 35 30 60 35 80 C 25 65 15 50 5 15 Z" fill="url(#ribbonGrad)" />

        {/* Bow Loops */}
        <path d="M 0 0 C -35 -20 -50 15 -10 15 C -2 15 0 5 0 0 Z" fill="url(#ribbonGrad)" stroke="#FB6F92" strokeWidth="1" />
        <path d="M 0 0 C 35 -20 50 15 10 15 C 2 15 0 5 0 0 Z" fill="url(#ribbonGrad)" stroke="#FB6F92" strokeWidth="1" />

        {/* Bow Knot */}
        <circle cx="0" cy="5" r="9" fill="#FB6F92" />
        <circle cx="0" cy="5" r="6" fill="#FF8FAB" />
      </g>

      {/* Floating Petals and Sparkles */}
      <g>
        <path d="M 60 210 C 50 200 55 185 70 190 C 75 205 65 215 60 210 Z" fill="#FF8FAB" opacity="0.85" />
        <path d="M 255 190 C 245 180 250 165 265 170 C 270 185 260 195 255 190 Z" fill="#FFD6E7" opacity="0.85" />
      </g>
    </svg>
    {/* Floating magical sparkles */}
    <motion.div 
      className="absolute top-4 left-10"
      animate={{ scale: [0.7, 1.3, 0.7], rotate: [0, 45, 0] }}
      transition={{ repeat: Infinity, duration: 2.4 }}
    >
      <SparkleStar className="w-5 h-5 text-sparkle-gold" fill="#FDE68A" />
    </motion.div>
    <motion.div 
      className="absolute top-8 right-8"
      animate={{ scale: [1, 0.7, 1], rotate: [0, -30, 0] }}
      transition={{ repeat: Infinity, duration: 2.8 }}
    >
      <SparkleStar className="w-6 h-6 text-sparkle-gold" fill="#FDE68A" />
    </motion.div>
  </div>
);

// 7. Virtual Hug: Panda and Teddy Embracing warmly
export const TeddyPandaHug: React.FC<{ className?: string }> = ({ className = "w-56 h-56" }) => (
  <div className={`relative inline-block ${className} select-none`}>
    <svg viewBox="0 0 240 200" className="w-full h-full drop-shadow-lg">
      <defs>
        <radialGradient id="hugPandaCheek" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FB6F92" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FB6F92" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hugTeddyGrad" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#FFE0B2" />
          <stop offset="60%" stopColor="#FFCBA4" />
          <stop offset="100%" stopColor="#F5B288" />
        </radialGradient>
      </defs>

      {/* Hugging Hearts Floating above */}
      <g transform="translate(120, 30)">
        <path d="M 0 0 C -15 -15 -25 0 0 20 C 25 0 15 -15 0 0 Z" fill="#FB6F92" transform="scale(0.8)" className="animate-pulse-soft" />
      </g>

      {/* Panda (Left) */}
      <g transform="translate(10, 20)">
        {/* Panda Ears */}
        <circle cx="50" cy="50" r="18" fill="#3D2D38" />
        <circle cx="50" cy="50" r="9" fill="#FFD6E7" />
        {/* Panda Body */}
        <ellipse cx="80" cy="130" rx="42" ry="36" fill="#FFFFFF" />
        {/* Panda Head */}
        <circle cx="80" cy="85" r="38" fill="#FFFFFF" />
        {/* Eye patch */}
        <ellipse cx="68" cy="82" rx="11" ry="14" fill="#3D2D38" transform="rotate(-15 68 82)" />
        {/* Eye: happily closed curved arc */}
        <path d="M 62 82 Q 68 76 74 82" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Blushing cheek */}
        <circle cx="62" cy="95" r="10" fill="url(#hugPandaCheek)" />
        {/* Little smile */}
        <path d="M 76 92 Q 80 97 84 92" stroke="#3D2D38" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Arm hugging around Teddy */}
        <path d="M 85 110 C 105 105 130 115 135 125 C 130 135 105 125 85 125 Z" fill="#3D2D38" />
      </g>

      {/* Teddy Bear (Right) */}
      <g transform="translate(70, 20)">
        {/* Teddy Ears */}
        <circle cx="110" cy="50" r="18" fill="url(#hugTeddyGrad)" />
        <circle cx="110" cy="50" r="9" fill="#FFB5A7" />
        {/* Teddy Body */}
        <ellipse cx="80" cy="130" rx="42" ry="36" fill="url(#hugTeddyGrad)" />
        {/* Teddy Head */}
        <circle cx="80" cy="85" r="38" fill="url(#hugTeddyGrad)" />
        {/* Snout */}
        <ellipse cx="72" cy="92" rx="15" ry="11" fill="#FFEBDC" />
        <ellipse cx="70" cy="88" rx="4" ry="2.5" fill="#593A50" />
        {/* Eye: happily closed curved arc */}
        <path d="M 85 82 Q 91 76 97 82" stroke="#593A50" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Rosy cheek */}
        <circle cx="95" cy="95" r="9" fill="#FF8FAB" opacity="0.8" />
        {/* Smile */}
        <path d="M 68 94 Q 72 98 76 94" stroke="#593A50" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Arm hugging around Panda */}
        <path d="M 65 110 C 45 105 20 115 15 125 C 20 135 45 125 65 125 Z" fill="url(#hugTeddyGrad)" />
      </g>
    </svg>
    <motion.div 
      className="absolute -top-1 left-12"
      animate={{ y: [-4, 4, -4], scale: [0.9, 1.1, 0.9] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <HeartIcon className="w-6 h-6 text-rose-pink" fill="#FF8FAB" />
    </motion.div>
    <motion.div 
      className="absolute -top-1 right-12"
      animate={{ y: [-3, 3, -3], scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 2.4 }}
    >
      <HeartIcon className="w-5 h-5 text-rose-pink" fill="#FB6F92" />
    </motion.div>
  </div>
);

// 8. Animated Envelope with Heart Wax Seal Stamp
export const CuteEnvelopeIllustration: React.FC<{ 
  isOpen?: boolean; 
  className?: string;
}> = ({ isOpen = false, className = "w-44 h-36" }) => (
  <div className={`relative inline-block ${className} select-none`}>
    <svg viewBox="0 0 180 140" className="w-full h-full drop-shadow-md">
      <defs>
        <linearGradient id="envBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF9F5" />
          <stop offset="100%" stopColor="#FFD6E7" />
        </linearGradient>
        <linearGradient id="envFlap" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD6E7" />
          <stop offset="100%" stopColor="#FFAEC0" />
        </linearGradient>
        <linearGradient id="waxSeal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8FAB" />
          <stop offset="100%" stopColor="#FB6F92" />
        </linearGradient>
      </defs>

      {/* Envelope Back & Interior */}
      <rect x="15" y="30" width="150" height="95" rx="12" fill="#E6DFFF" />

      {/* Letter popping out if open */}
      {isOpen && (
        <g transform="translate(0, -25)">
          <rect x="30" y="25" width="120" height="70" rx="8" fill="#FFFFFF" stroke="#FFD6E7" strokeWidth="2" />
          <line x1="45" y1="42" x2="95" y2="42" stroke="#FF8FAB" strokeWidth="3" strokeLinecap="round" />
          <line x1="45" y1="54" x2="135" y2="54" stroke="#CDB4FF" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="45" y1="66" x2="115" y2="66" stroke="#CDB4FF" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="130" cy="42" r="5" fill="#FB6F92" />
        </g>
      )}

      {/* Envelope Body Front Pockets */}
      <path d="M 15 125 L 90 75 L 165 125 Z" fill="url(#envBody)" />
      <path d="M 15 30 L 90 85 L 15 125 Z" fill="#FFEBF2" />
      <path d="M 165 30 L 90 85 L 165 125 Z" fill="#FFEBF2" />

      {/* Envelope Top Flap */}
      {!isOpen ? (
        <g>
          <path d="M 15 30 L 90 88 L 165 30 Z" fill="url(#envFlap)" stroke="#FFAEC0" strokeWidth="1" />
          {/* Wax Seal Heart Stamp */}
          <circle cx="90" cy="85" r="15" fill="url(#waxSeal)" stroke="#FFFFFF" strokeWidth="1.5" className="drop-shadow-sm" />
          <path d="M 90 88 C 88 86 84 84 84 81 C 84 78 86 76 89 78 L 90 79 L 91 78 C 94 76 96 78 96 81 C 96 84 92 86 90 88 Z" fill="#FFFFFF" transform="translate(90, 84) scale(1.1) translate(-90, -84)" />
        </g>
      ) : (
        <path d="M 15 30 L 90 -20 L 165 30 Z" fill="url(#envFlap)" opacity="0.9" />
      )}
    </svg>
  </div>
);
