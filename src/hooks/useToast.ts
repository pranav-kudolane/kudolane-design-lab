import { createContext, useContext } from 'react';

export type Ping = (message: string) => void;

export const ToastContext = createContext<Ping | null>(null);

/** Shows a transient confirmation pill at the bottom of the screen. */
export function useToast(): Ping {
  const ping = useContext(ToastContext);
  if (!ping) throw new Error('useToast must be used inside <ToastProvider>');
  return ping;
}
