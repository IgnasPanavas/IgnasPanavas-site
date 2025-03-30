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

    // Set up drawing settings
    ctx.lineWidth = 2;

    // Define the baseline (imaginary 0 line)
    const baseline = height / 2;

    // Start drawing from the middle of the canvas
    let currentX = 0;
    let currentY = baseline;
    const volatility = 3;

    const updateInterval = 50; // update interval in ms
    let lastUpdate = performance.now();

    function draw(timestamp: number) {
      if (timestamp - lastUpdate >= updateInterval) {
        lastUpdate = timestamp;

        // Store previous point
        const prevX = currentX;
        const prevY = currentY;

        // Update x and calculate new y based on a random step
        currentX += 2;
        if (currentX >= width) {
          cancelAnimationFrame(animationFrameId.current);
          return;
        }
        const step = generateNormalRandom() * volatility;
        currentY += step;
        // Clamp currentY to the canvas bounds
        currentY = Math.max(0, Math.min(height, currentY));

        // Determine if the segment crosses the baseline.
        // If both points are on the same side, draw one segment.
        if ((prevY - baseline) * (currentY - baseline) >= 0) {
          // Determine color based on which side of the baseline we're on.
          const color = prevY < baseline ? "lime" : "red";
          ctx!.beginPath();
          ctx!.strokeStyle = color;
          ctx!.moveTo(prevX, prevY);
          ctx!.lineTo(currentX, currentY);
          ctx!.stroke();
        } else {
          // The segment crosses the baseline.
          // Calculate the intersection point with the baseline.
          const t = (baseline - prevY) / (currentY - prevY);
          const intersectX = prevX + t * (currentX - prevX);
          
          // Draw segment from previous point to the intersection.
          const color1 = prevY < baseline ? "lime" : "red";
          ctx!.beginPath();
          ctx!.strokeStyle = color1;
          ctx!.moveTo(prevX, prevY);
          ctx!.lineTo(intersectX, baseline);
          ctx!.stroke();
          
          // Draw segment from the intersection to the current point.
          const color2 = currentY < baseline ? "lime" : "red";
          ctx!.beginPath();
          ctx!.strokeStyle = color2;
          ctx!.moveTo(intersectX, baseline);
          ctx!.lineTo(currentX, currentY);
          ctx!.stroke();
        }
      }
      animationFrameId.current = requestAnimationFrame(draw);
    }

    animationFrameId.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationFrameId.current);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
};

export default StockChartRealTime;
