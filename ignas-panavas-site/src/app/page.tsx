'use client';
import dynamic from 'next/dynamic';

const DotWave = dynamic(() => import('../components/DotWave'), { ssr: false });

export default function Home() {
  return (
    <div className="items-center justify-center">
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
    <DotWave />
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        pointerEvents: 'none',
      }}
    />
  </div>
  <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white', // adjust as needed
          fontSize: '5rem',
          zIndex: 1,
        }}
      >
        Welcome
      </div>
  </div>
  
  );
}