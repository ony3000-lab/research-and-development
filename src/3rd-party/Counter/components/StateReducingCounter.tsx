import type { ReactNode } from 'react';
import { useMemo } from 'react';
import type { CounterContextWithHookState } from '../contexts';
import { CounterContextWithHook } from '../contexts';
import { CounterContainer } from '../layouts';

// 재사용
import { CounterCount, CounterDecrement, CounterIncrement } from './HookedCounter/parts';
import { CounterLabel } from './CompoundCounter/parts';

export type StateReducingCounterProps = {
  value: number;
  children?: ReactNode;
};

function StateReducingCounter({ value, children = null }: StateReducingCounterProps) {
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

StateReducingCounter.Count = CounterCount;
StateReducingCounter.Decrement = CounterDecrement;
StateReducingCounter.Increment = CounterIncrement;
StateReducingCounter.Label = CounterLabel;

export { StateReducingCounter };
