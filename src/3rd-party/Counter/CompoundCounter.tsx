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

type CompoundCounterProps = Pick<Parameters<typeof CounterContainer>[0], 'children'> & {
  onChange?: (newCount: number) => void;
};

function CompoundCounter({ onChange = undefined, children = null }: CompoundCounterProps) {
  const [minCount, setMinCount] = useState(0);
  const [maxCount, setMaxCount] = useState(Infinity);
  const [count, setCount] = useState(0);

  const contextState = useMemo<CounterContextState>(() => {
    const decrementHandler = () => {
      if (count > minCount) {
        setCount((prevCount) => prevCount - 1);
        onChange?.(count - 1);
      }
    };
    const incrementHandler = () => {
      if (count < maxCount) {
        setCount((prevCount) => prevCount + 1);
        onChange?.(count + 1);
      }
    };

    return {
      count,
      minCount,
      setMinCount,
      maxCount,
      setMaxCount,
      decrementHandler,
      incrementHandler,
    };
  }, [count, maxCount, minCount, onChange]);

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

CompoundCounter.Count = function CounterCount({ min = 0, max = Infinity }: CounterCountProps) {
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

CompoundCounter.Decrement = function CounterDecrement({ icon = 'minus' }: CounterDecrementProps) {
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

CompoundCounter.Increment = function CounterIncrement({ icon = 'plus' }: CounterIncrementProps) {
  const { incrementHandler } = useContext(CounterContext);

  return (
    <CounterButton
      icon={icon}
      onClick={incrementHandler}
    />
  );
};

type CounterLabelProps = ComponentProps<'span'>;

CompoundCounter.Label = function CounterLabel({ children }: CounterLabelProps) {
  return <span className="px-1">{children}</span>;
};

export default CompoundCounter;
