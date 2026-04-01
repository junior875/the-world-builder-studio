import { useEffect, useState, useCallback } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const onMouseMove = useCallback((e: MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
    if (!visible) setVisible(true);
  }, [visible]);

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.body.style.cursor = 'none';
    window.addEventListener('mousemove', onMouseMove);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], [data-cursor-hover]')) {
        setHovering(true);
      }
    };
    const onOut = () => setHovering(false);

    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, [onMouseMove]);

  if (!visible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] rounded-full bg-primary"
        style={{
          width: 7,
          height: 7,
          left: pos.x - 3.5,
          top: pos.y - 3.5,
          transition: 'transform 0.05s',
        }}
      />
      <div
        className="fixed pointer-events-none z-[9998] rounded-full border border-primary"
        style={{
          width: hovering ? 55 : 40,
          height: hovering ? 55 : 40,
          left: pos.x - (hovering ? 27.5 : 20),
          top: pos.y - (hovering ? 27.5 : 20),
          opacity: hovering ? 0.6 : 0.3,
          transition: 'width 0.25s, height 0.25s, left 0.25s, top 0.25s, opacity 0.25s',
        }}
      />
    </>
  );
};

export default CustomCursor;
