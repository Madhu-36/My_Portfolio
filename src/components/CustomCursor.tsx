import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect non-touch (fine pointer) devices
  useEffect(() => {
    const match = window.matchMedia("(pointer: fine)").matches;
    setIsDesktop(match);
  }, []);

  // Track mouse position
  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDesktop]);

  // Track hover over clickable elements
  useEffect(() => {
    if (!isDesktop) return;

    const clickableSelector = "a, button, input, textarea, [role=button]";

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(clickableSelector)) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(clickableSelector)) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isDesktop]);

  // Hide default cursor globally
  useEffect(() => {
    if (!isDesktop) return;

    const style = document.createElement("style");
    style.textContent = "* { cursor: none !important; }";
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  const { x, y } = position;

  const outerSize = 40;
  const innerSize = 8;

  return (
    <>
      {/* Outer ring */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${outerSize}px`,
          height: `${outerSize}px`,
          borderRadius: "50%",
          border: isHovering
            ? "2px solid rgba(86, 211, 100, 0.8)"
            : "2px solid rgba(56, 139, 253, 0.5)",
          pointerEvents: "none",
          zIndex: 9999,
          transform: `translate(${x - outerSize / 2}px, ${y - outerSize / 2}px) scale(${isHovering ? 1.5 : 1})`,
          transition: "transform 150ms ease-out, border-color 150ms ease-out",
          mixBlendMode: "difference",
        }}
      />
      {/* Inner dot */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${innerSize}px`,
          height: `${innerSize}px`,
          borderRadius: "50%",
          background: "#58a6ff",
          pointerEvents: "none",
          zIndex: 9999,
          transform: `translate(${x - innerSize / 2}px, ${y - innerSize / 2}px) scale(${isHovering ? 0.5 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor;
