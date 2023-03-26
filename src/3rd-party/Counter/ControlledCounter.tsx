import type { ComponentProps, Dispatch, SetStateAction } from 'react';
import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { CounterContainer } from './layouts';
import { CounterButton } from './parts';

type CounterContextState = {
  count: number;
  minCount?: number;
  setMinCount: Dispatch<SetStateAction<number>>;
  maxCount?: number;
  setMaxCount: Dispatch<SetStateAction<number>>;
  decrementHandler: () => void;
  incrementHandler: () => void;
};

const CounterContext = createContext<CounterContextState>({
  count: 0,
  minCount: 0,
  setMinCount: () => {},
  maxCount: Infinity,
  setMaxCount: () => {},
  decrementHandler: () => {},
  incrementHandler: () => {},
});

type ControlledCounterProps = Pick<Parameters<typeof CounterContainer>[0], 'children'> & {
  value: number;
  onChange?: (newCount: number) => void;
};

function ControlledCounter({
  value,
  onChange = undefined,
  children = null,
}: ControlledCounterProps) {
  const [minCount, setMinCount] = useState(0);
  const [maxCount, setMaxCount] = useState(Infinity);

  const contextState = useMemo<CounterContextState>(() => {
    const decrementHandler = () => {
      if (value > minCount) {
        onChange?.(value - 1);
      }
    };
    const incrementHandler = () => {
      if (value < maxCount) {
        onChange?.(value + 1);
      }
    };

    return {
      count: value,
      minCount,
      setMinCount,
      maxCount,
      setMaxCount,
      decrementHandler,
      incrementHandler,
    };
  }, [maxCount, minCount, onChange, value]);

  return (
    <CounterContext.Provider value={contextState}>
      <CounterContainer>{children}</CounterContainer>
    </CounterContext.Provider>
  );
}

type CounterCountProps = {
  min?: number;
  max?: number;
};

ControlledCounter.Count = function CounterCount({ min = 0, max = Infinity }: CounterCountProps) {
  const { count, minCount, setMinCount, maxCount, setMaxCount } = useContext(CounterContext);

  useEffect(() => {
    if (minCount !== min) {
      setMinCount(min);
    }
  }, [min, minCount, setMinCount]);

  useEffect(() => {
    if (maxCount !== max) {
      setMaxCount(max);
    }
  }, [max, maxCount, setMaxCount]);

  return <span className="px-1 font-bold">{count}</span>;
};

type CounterDecrementProps = {
  icon?: string;
};

ControlledCounter.Decrement = function CounterDecrement({ icon = 'minus' }: CounterDecrementProps) {
  const { decrementHandler } = useContext(CounterContext);

  return (
    <CounterButton
      icon={icon}
      onClick={decrementHandler}
    />
  );
};

type CounterIncrementProps = {
  icon?: string;
};

ControlledCounter.Increment = function CounterIncrement({ icon = 'plus' }: CounterIncrementProps) {
  const { incrementHandler } = useContext(CounterContext);

  return (
    <CounterButton
      icon={icon}
      onClick={incrementHandler}
    />
  );
};

type CounterLabelProps = ComponentProps<'span'>;

ControlledCounter.Label = function CounterLabel({ children }: CounterLabelProps) {
  return <span className="px-1">{children}</span>;
};

export default ControlledCounter;
