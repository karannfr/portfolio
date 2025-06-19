import { useState, useEffect } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        backgroundColor: 'white',
        pointerEvents: 'none',
        transform: `translate(${position.x + 4}px, ${position.y + 4}px)`,
        transition: 'transform 0.05s linear',
      }}
    />
  );
}

export default CustomCursor;