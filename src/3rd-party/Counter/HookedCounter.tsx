import type { ComponentProps } from 'react';
import { createContext, useContext, useState, useMemo } from 'react';
import { CounterContainer } from './layouts';
import { CounterButton } from './parts';

type CounterContextWithHookState = {
  count: number;
};

const CounterContextWithHook = createContext<CounterContextWithHookState>({
  count: 0,
});

type HookedCounterProps = Pick<Parameters<typeof CounterContainer>[0], 'children'> & {
  value: number;
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

HookedCounter.Count = function CounterCount() {
  const { count } = useContext(CounterContextWithHook);

  return <span className="px-1 font-bold">{count}</span>;
};

type CounterDecrementProps = {
  icon?: string;
  onClick?: () => void;
};

HookedCounter.Decrement = function CounterDecrement({
  icon = 'minus',
  onClick = undefined,
}: CounterDecrementProps) {
  return (
    <CounterButton
      icon={icon}
      onClick={onClick}
    />
  );
};

type CounterIncrementProps = {
  icon?: string;
  onClick?: () => void;
};

HookedCounter.Increment = function CounterIncrement({
  icon = 'plus',
  onClick = undefined,
}: CounterIncrementProps) {
  return (
    <CounterButton
      icon={icon}
      onClick={onClick}
    />
  );
};

type CounterLabelProps = ComponentProps<'span'>;

HookedCounter.Label = function CounterLabel({ children }: CounterLabelProps) {
  return <span className="px-1">{children}</span>;
};

export default HookedCounter;

export function useCounter(initialCount: number) {
  const [count, setCount] = useState(initialCount);

  const decrementHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return {
    count,
    decrementHandler,
    incrementHandler,
  };
}
