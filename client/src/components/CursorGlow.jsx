import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed w-[300px] h-[300px] rounded-full blur-[120px] opacity-20 z-40"
      style={{
        background: "radial-gradient(circle, #22D3EE, transparent)",
        left: position.x - 150,
        top: position.y - 150,
      }}
    />
  );
};

export default CursorGlow;