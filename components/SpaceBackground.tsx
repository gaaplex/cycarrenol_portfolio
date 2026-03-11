import React, { useEffect, useRef } from 'react';

const WarpSpeedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let w: number, h: number;
    let centerX: number, centerY: number;
    const stars: Star[] = [];
    const numStars = 400;

    class Star {
      x: number;
      y: number;
      z: number;
      prevZ: number;

      constructor() {
        this.x = (Math.random() - 0.5) * 2000;
        this.y = (Math.random() - 0.5) * 2000;
        this.z = Math.random() * 2000;
        this.prevZ = this.z;
      }

      update() {
        this.prevZ = this.z;
        this.z -= 8; // Speed of travel (reduced for a calmer effect)
        if (this.z <= 0) {
          this.z = 2000;
          this.prevZ = this.z;
        }
      }

      draw() {
        if (!ctx) return;
        
        const x = this.x * (1000 / this.z) + centerX;
        const y = this.y * (1000 / this.z) + centerY;
        
        const px = this.x * (1000 / this.prevZ) + centerX;
        const py = this.y * (1000 / this.prevZ) + centerY;

        const size = (1 - this.z / 2000) * 3;
        const opacity = (1 - this.z / 2000);

        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(px, py);
        ctx.stroke();
      }
    }

    const init = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      centerX = w / 2;
      centerY = h / 2;

      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
    };

    const animate = () => {
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, w, h);

      // Add nebula glow
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, w);
      gradient.addColorStop(0, 'rgba(51, 153, 51, 0.05)');
      gradient.addColorStop(0.5, 'rgba(29, 78, 216, 0.02)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      centerX = w / 2;
      centerY = h / 2;
    };

    init();
    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ background: '#020617' }}
    />
  );
};

export default WarpSpeedBackground;
