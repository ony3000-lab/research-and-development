import type { ReactNode } from 'react';
import { useState, useMemo } from 'react';
import type { CounterContextWithHookState } from '../contexts';
import { CounterContextWithHook } from '../contexts';
import { CounterContainer } from '../layouts';

// 재사용
import {
  CounterCount,
  CounterDecrement,
  CounterIncrement,
} from '../components/HookedCounter/parts';
import { CounterLabel } from '../components/CompoundCounter/parts';

type HookedCounterInHookProps = {
  value: number;
  children?: ReactNode;
};

export default function useCounterWithComponent(initialCount: number) {
  const [count, setCount] = useState(initialCount);

  const decrementHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  /**
   * useMemo 등으로 캐싱하지 않으면, hook이 호출될 때마다 기존 컴포넌트를 unmount 하고 새 컴포넌트를 mount한다.
   */
  const MemoizedCounter = useMemo(() => {
    function HookedCounterInHook({ value, children = null }: HookedCounterInHookProps) {
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

    HookedCounterInHook.Count = CounterCount;
    HookedCounterInHook.Decrement = CounterDecrement;
    HookedCounterInHook.Increment = CounterIncrement;
    HookedCounterInHook.Label = CounterLabel;

    return HookedCounterInHook;
  }, []);

  return {
    count,
    decrementHandler,
    incrementHandler,
    Counter: MemoizedCounter,
  };
}
