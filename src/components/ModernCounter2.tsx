import type { EffectCallback } from 'react';
import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

function decoratedLog(message?: any) {
  console.log(
    `%cModernCounter II%c ${message}`,
    'background-color: #34d399; color: #262626; font-weight: bold; padding: 2px 4px; border-radius: 4px;',
    'background-color: transparent; color: initial;',
  );
}

function useEffectOnce(effect: EffectCallback): void {
  useEffect(() => {
    const timerId = window.setTimeout(effect, 0);

    return () => {
      window.clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default function ModernCounter2() {
  const [count, setCount] = useState(0);
  const [isCalledOnce, setIsCalledOnce] = useState(false);

  const incrementHandler = useCallback(() => {
    decoratedLog('[4] setState');
    setCount((prevCount) => prevCount + 1);
  }, []);

  useEffectOnce(() => {
    decoratedLog('[2-0] useEffect');
    (async () => {
      const response = await axios.get('http://localhost:3500/posts');

      console.log(response);
    })();
    setIsCalledOnce(true);
  });

  useEffect(() => {
    if (isCalledOnce) {
      decoratedLog('[2] useEffect');
    }

    return () => {
      if (isCalledOnce) {
        decoratedLog('[3] clean-up');
      }
    };
  });

  decoratedLog('[1] render');
  return (
    <div className="inline-flex items-center space-x-1 rounded-md border-2 border-solid border-green-500 py-0.5 px-1 dark:border-emerald-400">
      <span className="px-1">ModernCounter II</span>
      <span className="px-1 font-bold">{count}</span>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-1"
        onClick={incrementHandler}
      >
        <span className="inline-flex h-5 w-5 items-center justify-center text-[18px]">
          <i className="fa-solid fa-plus" />
        </span>
      </button>
    </div>
  );
}
