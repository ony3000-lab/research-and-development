import type { ReactNode } from 'react';
import type { CounterContextState } from '../../contexts';

import { useState, useMemo } from 'react';
import { CounterContext } from '../../contexts';
import { CounterCount, CounterDecrement, CounterIncrement, CounterLabel } from './parts';

type CompoundCounterProps = {
  onChange?: (newCount: number) => void;
  children?: ReactNode;
};

function CompoundCounter({ onChange = undefined, children = null }: CompoundCounterProps) {
  const minCount = 0;
  const [maxCount, setMaxCount] = useState<number>();
  const [count, setCount] = useState(minCount);

  const contextState = useMemo<CounterContextState>(() => {
    const decrementHandler = () => {
      if (count > minCount) {
        const newCount = count - 1;

        setCount(newCount);
        onChange?.(newCount);
      }
    };
    const incrementHandler = () => {
      if (maxCount === undefined || count < maxCount) {
        const newCount = count + 1;

        setCount(newCount);
        onChange?.(newCount);
      }
    };

    return { count, maxCount, setMaxCount, decrementHandler, incrementHandler };
  }, [count, maxCount, onChange]);

  return (
    <CounterContext.Provider value={contextState}>
      <div className="inline-flex items-center space-x-1 rounded-md border-2 border-solid border-blue-500 dark:border-sky-400">
        {children}
      </div>
    </CounterContext.Provider>
  );
}

CompoundCounter.Count = CounterCount;
CompoundCounter.Decrement = CounterDecrement;
CompoundCounter.Increment = CounterIncrement;
CompoundCounter.Label = CounterLabel;

export { CompoundCounter };
