import React, { useRef, useEffect } from 'react';

const DotWave: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;

    // Resize the canvas to fill the window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Parameters for the dot grid and wave animation
    const spacing = 30;    // Space between dots
    const baseRadius = 2;  // Base radius of each dot
    const wavelength = 50; // Controls the frequency of the wave
    const speed = 2;       // Speed of the ripple animation
    const amplitude = 2;   // How much the dot radius oscillates

    // Render loop: update and redraw the dots
    const render = () => {
      const time = performance.now() / 1000;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Loop over a grid of dots
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const dx = x - canvas.width / 2;
          const dy = y - canvas.height / 2;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const offset = Math.sin(distance / wavelength - time * speed) * amplitude;

          ctx.beginPath();
          ctx.arc(x, y, baseRadius + offset, 0, Math.PI * 2);
          ctx.fillStyle = '#3498db'; // Customize color as needed
          ctx.fill();
        }
      }
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    // Cleanup on component unmount
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: 'block' }} />;
};

export default DotWave;
