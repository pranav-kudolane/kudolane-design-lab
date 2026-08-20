import { useEffect, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface TiltOptions {
  /** maximum rotation in degrees at the edge of the container */
  maxDeg?: number;
  perspective?: number;
}

/**
 * Rotates `targetRef` toward the pointer while it is over `containerRef`.
 * No-ops entirely when the user prefers reduced motion.
 */
export function useTilt<C extends HTMLElement, T extends HTMLElement>({
  maxDeg = 7,
  perspective = 1000,
}: TiltOptions = {}) {
  const containerRef = useRef<C>(null);
  const targetRef = useRef<T>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target) return;

    const rest = `perspective(${perspective}px) rotateY(0deg) rotateX(0deg)`;

    const onMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      target.style.transform =
        `perspective(${perspective}px) rotateY(${x * maxDeg}deg) rotateX(${-y * maxDeg}deg)`;
    };
    const onLeave = () => {
      target.style.transform = rest;
    };

    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);
    return () => {
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);
      target.style.transform = '';
    };
  }, [maxDeg, perspective, reduced]);

  return { containerRef, targetRef };
}
