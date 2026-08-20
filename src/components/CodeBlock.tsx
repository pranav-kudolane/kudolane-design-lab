import { useMemo } from 'react';
import { useCopy } from '../hooks/useCopy';
import { highlight } from '../lib/highlight';
import type { CodeLang } from '../types';

interface Props {
  code: string;
  lang?: CodeLang;
  /** what the toast says on success */
  toastMessage?: string;
}

export function CodeBlock({ code, lang = 'css', toastMessage }: Props) {
  const { copy, copied } = useCopy();
  const tokens = useMemo(() => highlight(code), [code]);
  const message = toastMessage ?? `${lang.toUpperCase()} copied`;

  return (
    <div className="code">
      <button
        type="button"
        className={`copy${copied ? ' done' : ''}`}
        onClick={() => void copy(code, message)}
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
      <pre>{tokens}</pre>
    </div>
  );
}
