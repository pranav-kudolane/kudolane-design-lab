import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { ToastContext } from '../hooks/useToast';

const VISIBLE_MS = 1400;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState('');
  const [shown, setShown] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const ping = useCallback((next: string) => {
    setMessage(next);
    setShown(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setShown(false), VISIBLE_MS);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <ToastContext.Provider value={ping}>
      {children}
      <div className={`toast${shown ? ' show' : ''}`} role="status" aria-live="polite">
        {message}
      </div>
    </ToastContext.Provider>
  );
}
