import type { ReactNode } from 'react';
import { useMemo } from 'react';
import type { CounterContextWithHookState } from './contexts';
import { CounterContextWithHook } from './contexts';
import { CounterContainer } from './layouts';

// 재사용
import { CounterCount, CounterDecrement, CounterIncrement } from './components/HookedCounter/parts';
import { CounterLabel } from './components/CompoundCounter/parts';

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
      <CounterContainer>{children}</CounterContainer>
    </CounterContextWithHook.Provider>
  );
}

PropsGettingCounter.Count = CounterCount;
PropsGettingCounter.Decrement = CounterDecrement;
PropsGettingCounter.Increment = CounterIncrement;
PropsGettingCounter.Label = CounterLabel;

export { PropsGettingCounter };
