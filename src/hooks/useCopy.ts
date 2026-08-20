import { useCallback, useEffect, useRef, useState } from 'react';
import { useToast } from './useToast';

const CONFIRM_MS = 1300;

async function writeClipboard(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  // execCommand fallback for non-secure contexts (e.g. plain http on LAN)
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
  } finally {
    document.body.removeChild(ta);
  }
}

/**
 * Copies text and flips `copied` to true for a moment so the caller can
 * swap a label or add a `.done` class.
 */
export function useCopy() {
  const ping = useToast();
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = useCallback(
    async (text: string, toastMessage = 'Copied to clipboard') => {
      await writeClipboard(text);
      ping(toastMessage);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), CONFIRM_MS);
    },
    [ping],
  );

  return { copy, copied };
}
