import { useEffect, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';

/** Moves a blurred `glowRef` element to follow the pointer inside `hostRef`. */
export function useSpotlight<H extends HTMLElement, G extends HTMLElement>() {
  const hostRef = useRef<H>(null);
  const glowRef = useRef<G>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const host = hostRef.current;
    const glow = glowRef.current;
    if (!host || !glow) return;

    const onMove = (e: MouseEvent) => {
      const r = host.getBoundingClientRect();
      glow.style.left = `${e.clientX - r.left}px`;
      glow.style.top = `${e.clientY - r.top}px`;
    };

    host.addEventListener('mousemove', onMove);
    return () => host.removeEventListener('mousemove', onMove);
  }, [reduced]);

  return { hostRef, glowRef };
}
