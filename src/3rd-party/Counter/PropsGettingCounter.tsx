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

export type PropsGettingCounterProps = Pick<Parameters<typeof CounterContainer>[0], 'children'> & {
  value: number;
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

PropsGettingCounter.Count = function CounterCount() {
  const { count } = useContext(CounterContextWithHook);

  return <span className="px-1 font-bold">{count}</span>;
};

type CounterDecrementProps = {
  icon?: string;
  onClick?: () => void;
};

PropsGettingCounter.Decrement = function CounterDecrement({
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

PropsGettingCounter.Increment = function CounterIncrement({
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

PropsGettingCounter.Label = function CounterLabel({ children }: CounterLabelProps) {
  return <span className="px-1">{children}</span>;
};

export default PropsGettingCounter;

export function useCounterWithGetters(initialCount: number) {
  const [count, setCount] = useState(initialCount);

  const decrementHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const getCounterProps = (
    props?: Partial<Omit<PropsGettingCounterProps, 'children'>>,
  ): PropsGettingCounterProps => ({
    value: count,
    ...props,
  });
  const getDecrementProps = (
    props?: Partial<CounterDecrementProps>,
  ): Required<CounterDecrementProps> => ({
    icon: 'minus',
    onClick: decrementHandler,
    ...props,
  });
  const getIncrementProps = (
    props?: Partial<CounterIncrementProps>,
  ): Required<CounterIncrementProps> => ({
    icon: 'plus',
    onClick: incrementHandler,
    ...props,
  });

  return {
    count,
    getCounterProps,
    getDecrementProps,
    getIncrementProps,
  };
}
