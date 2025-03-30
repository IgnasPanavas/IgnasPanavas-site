'use client';
// StockChartRealTime.tsx
import React, { useRef, useEffect } from 'react';

// Generate a normally distributed random number (Box–Muller transform)
function generateNormalRandom(): number {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

const StockChartRealTime: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return; // Ensures ctx is not null

    // Use the rendered size of the canvas container
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    // Set the actual canvas width and height to match the element's dimensions
    canvas.width = width;
    canvas.height = height;

    // Fill background with black
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);

    // Set up stroke styles for the white line
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;

    // Start drawing from the middle of the canvas
    let currentX = 0;
    let currentY = height / 2;
    const volatility = 3;

    ctx.beginPath();
    ctx.moveTo(currentX, currentY);

    const updateInterval = 50; // Update every 50ms
    let lastUpdate = performance.now();

    function draw(timestamp: number) {
      if (timestamp - lastUpdate >= updateInterval) {
        lastUpdate = timestamp;
        currentX += 2;
        if (currentX >= width) {
          cancelAnimationFrame(animationFrameId.current);
          return;
        }
        const step = generateNormalRandom() * volatility;
        currentY += step;
        // Clamp currentY to the canvas bounds
        currentY = Math.max(0, Math.min(height, currentY));

        // Use non-null assertion operator since we've verified ctx is not null
        ctx!.lineTo(currentX, currentY);
        ctx!.stroke();
      }
      animationFrameId.current = requestAnimationFrame(draw);
    }

    animationFrameId.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationFrameId.current);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
};

export default StockChartRealTime;
