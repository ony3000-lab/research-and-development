import type { ReactNode } from 'react';
import { useMemo } from 'react';
import type { CounterContextWithHookState } from './contexts';
import { CounterContextWithHook } from './contexts';
import { CounterContainer } from './layouts';
import { CounterCount, CounterDecrement, CounterIncrement } from './components/HookedCounter/parts';

// 재사용
import { CounterLabel } from './components/CompoundCounter/parts';

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
      <CounterContainer>{children}</CounterContainer>
    </CounterContextWithHook.Provider>
  );
}

HookedCounter.Count = CounterCount;
HookedCounter.Decrement = CounterDecrement;
HookedCounter.Increment = CounterIncrement;
HookedCounter.Label = CounterLabel;

export { HookedCounter };
