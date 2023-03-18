import type { ReactNode } from 'react';
import { useMemo } from 'react';
import type { CounterContextWithHookState } from '../../contexts';
import { CounterContextWithHook } from '../../contexts';
import { CounterCount, CounterDecrement, CounterIncrement } from './parts';

// 재사용
import { CounterLabel } from '../CompoundCounter/parts';

type HookedCounterProps = {
  value: number;
  children?: ReactNode;
};

function HookedCounter({ value, children = null }: HookedCounterProps) {
  const contextState = useMemo<CounterContextWithHookState>(
    () => ({
      count: value,
    }),
    [value],
  );

  return (
    <CounterContextWithHook.Provider value={contextState}>
      <div className="inline-flex items-center space-x-1 rounded-md border-2 border-solid border-blue-500 dark:border-sky-400">
        {children}
      </div>
    </CounterContextWithHook.Provider>
  );
}

HookedCounter.Count = CounterCount;
HookedCounter.Decrement = CounterDecrement;
HookedCounter.Increment = CounterIncrement;
HookedCounter.Label = CounterLabel;

export { HookedCounter };
