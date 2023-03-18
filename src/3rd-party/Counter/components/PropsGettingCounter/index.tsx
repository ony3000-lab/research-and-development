import type { ReactNode } from 'react';
import { useMemo } from 'react';
import type { CounterContextWithHookState } from '../../contexts';
import { CounterContextWithHook } from '../../contexts';

// 재사용
import { CounterCount, CounterDecrement, CounterIncrement } from '../HookedCounter/parts';
import { CounterLabel } from '../CompoundCounter/parts';

export type PropsGettingCounterProps = {
  value: number;
  children?: ReactNode;
};

function PropsGettingCounter({ value, children = null }: PropsGettingCounterProps) {
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

PropsGettingCounter.Count = CounterCount;
PropsGettingCounter.Decrement = CounterDecrement;
PropsGettingCounter.Increment = CounterIncrement;
PropsGettingCounter.Label = CounterLabel;

export { PropsGettingCounter };
