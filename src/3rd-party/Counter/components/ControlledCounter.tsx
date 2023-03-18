import type { ReactNode } from 'react';
import { useState, useMemo } from 'react';
import type { CounterContextState } from '../contexts';
import { CounterContext } from '../contexts';

// 재사용
import {
  CounterCount,
  CounterDecrement,
  CounterIncrement,
  CounterLabel,
} from './CompoundCounter/parts';

type ControlledCounterProps = {
  value: number;
  onChange?: (newCount: number) => void;
  children?: ReactNode;
};

function ControlledCounter({
  value,
  onChange = undefined,
  children = null,
}: ControlledCounterProps) {
  const minCount = 0;
  const [maxCount, setMaxCount] = useState<number>();

  const contextState = useMemo<CounterContextState>(() => {
    const decrementHandler = () => {
      if (value > minCount) {
        const newCount = value - 1;

        onChange?.(newCount);
      }
    };
    const incrementHandler = () => {
      if (maxCount === undefined || value < maxCount) {
        const newCount = value + 1;

        onChange?.(newCount);
      }
    };

    return { count: value, maxCount, setMaxCount, decrementHandler, incrementHandler };
  }, [maxCount, onChange, value]);

  return (
    <CounterContext.Provider value={contextState}>
      <div className="inline-flex items-center space-x-1 rounded-md border-2 border-solid border-blue-500 dark:border-sky-400">
        {children}
      </div>
    </CounterContext.Provider>
  );
}

ControlledCounter.Count = CounterCount;
ControlledCounter.Decrement = CounterDecrement;
ControlledCounter.Increment = CounterIncrement;
ControlledCounter.Label = CounterLabel;

export { ControlledCounter };
