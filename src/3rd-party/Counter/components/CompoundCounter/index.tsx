import type { ReactNode } from 'react';
import { useState, useMemo } from 'react';
import type { CounterContextState } from '../../contexts';
import { CounterContext } from '../../contexts';
import { CounterContainer } from '../../layouts';
import { CounterCount, CounterDecrement, CounterIncrement, CounterLabel } from './parts';

type CompoundCounterProps = {
  onChange?: (newCount: number) => void;
  children?: ReactNode;
};

function CompoundCounter({ onChange = undefined, children = null }: CompoundCounterProps) {
  const minCount = 0;
  const [maxCount, setMaxCount] = useState<number>();
  const [count, setCount] = useState(minCount);

  const contextState = useMemo<CounterContextState>(() => {
    const decrementHandler = () => {
      if (count > minCount) {
        const newCount = count - 1;

        setCount(newCount);
        onChange?.(newCount);
      }
    };
    const incrementHandler = () => {
      if (maxCount === undefined || count < maxCount) {
        const newCount = count + 1;

        setCount(newCount);
        onChange?.(newCount);
      }
    };

    return { count, maxCount, setMaxCount, decrementHandler, incrementHandler };
  }, [count, maxCount, onChange]);

  return (
    <CounterContext.Provider value={contextState}>
      <CounterContainer>{children}</CounterContainer>
    </CounterContext.Provider>
  );
}

CompoundCounter.Count = CounterCount;
CompoundCounter.Decrement = CounterDecrement;
CompoundCounter.Increment = CounterIncrement;
CompoundCounter.Label = CounterLabel;

export { CompoundCounter };
