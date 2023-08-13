import { useState, useCallback, useEffect } from 'react';

function decoratedLog(message?: any) {
  console.log(
    `%cModernCounter%c ${message}`,
    'background-color: #38bdf8; color: #262626; font-weight: bold; padding: 2px 4px; border-radius: 4px;',
    'background-color: transparent; color: initial;',
  );
}

export default function ModernCounter() {
  const [count, setCount] = useState(0);

  const incrementHandler = useCallback(() => {
    decoratedLog('[4] setState');
    setCount((prevCount) => prevCount + 1);
  }, []);

  useEffect(() => {
    decoratedLog('[2] useEffect');

    return () => {
      decoratedLog('[3] clean-up');
    };
  });

  decoratedLog('[1] render');
  return (
    <div className="inline-flex items-center space-x-1 rounded-md border-2 border-solid border-blue-500 py-0.5 px-1 dark:border-sky-400">
      <span className="px-1">ModernCounter</span>
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
