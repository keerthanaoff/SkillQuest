// Self-contained milestone celebration particle burst (zero external dependencies)

export const triggerConfetti = () => {
  // Respect prefers-reduced-motion
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const canvas = document.createElement('canvas');
  canvas.id = 'skillquest-confetti-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '99999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);

  const colors = ['#8B5CF6', '#38BDF8', '#EC4899', '#10B981', '#F59E0B', '#F8FAFC'];
  const particles = [];
  const particleCount = 75;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: width / 2 + (Math.random() - 0.5) * 200,
      y: height * 0.45,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.7) * 16 - 2,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      gravity: 0.38,
      drag: 0.96
    });
  }

  let animationFrameId;
  const startTime = Date.now();
  const duration = 2400; // 2.4s

  const render = () => {
    const elapsed = Date.now() - startTime;
    if (elapsed >= duration) {
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.vx *= p.drag;
      p.vy = (p.vy + p.gravity) * p.drag;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.vRot;
      p.alpha = Math.max(0, 1 - elapsed / duration);

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
      ctx.restore();
    });

    animationFrameId = requestAnimationFrame(render);
  };

  animationFrameId = requestAnimationFrame(render);

  return () => {
    cancelAnimationFrame(animationFrameId);
    if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
  };
};
