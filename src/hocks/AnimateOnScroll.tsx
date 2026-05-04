"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  direction?: "left" | "right" | "bottom";
  className?: string;
  enableDesktop?: boolean;
  delay?: number; // NEW (ms)
  stagger?: boolean; // NEW
};

export default function AnimateOnScroll({
  children,
  direction = "bottom",
  className = "",
  enableDesktop = false,
  delay = 0,
  stagger = false,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          // delay support
          setTimeout(() => {
            setActive(true);

            // stagger logic
            if (stagger) {
              const children = el.children;
              Array.from(children).forEach((child, i) => {
                (child as HTMLElement).style.setProperty("--i", i.toString());
              });
            }
          }, delay);

          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay, stagger]);

  return (
    <div
      ref={ref}
      className={`
        ${stagger ? "stagger" : `animate animate-${direction}`}
        ${active ? "active" : ""}
        ${enableDesktop ? "desktop-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}