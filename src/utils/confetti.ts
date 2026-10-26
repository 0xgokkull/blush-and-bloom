import confetti from 'canvas-confetti';

export const triggerHeartConfetti = () => {
  const count = 40;
  const defaults = {
    origin: { y: 0.7 },
    colors: ['#FF8FAB', '#FFD6E7', '#CDB4FF', '#FFCBA4', '#FB6F92'],
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 30,
    startVelocity: 55,
    shapes: ['circle'],
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.4,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

export const triggerCelebrationShower = () => {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;
  const colors = ['#FF8FAB', '#FFD6E7', '#CDB4FF', '#FFF9F5', '#FB6F92', '#FFCBA4'];

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.65 },
      colors,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.65 },
      colors,
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  };
  frame();
};
