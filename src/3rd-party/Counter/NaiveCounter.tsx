import { useState } from 'react';
import { CounterContainer } from './layouts';
import { CounterButton, CounterLabel } from './parts';

type NaiveCounterProps = {
  label?: string;
  min?: number;
  max?: number;
  iconDecrement?: string;
  iconIncrement?: string;
  onChange?: (newCount: number) => void;
};

export default function NaiveCounter({
  label = 'Counter',
  min = 0,
  max = Infinity,
  iconDecrement = 'minus',
  iconIncrement = 'plus',
  onChange = undefined,
}: NaiveCounterProps) {
  const [count, setCount] = useState(0);

  const decrementHandler = () => {
    if (count > min) {
      setCount((prevCount) => prevCount - 1);
      onChange?.(count - 1);
    }
  };
  const incrementHandler = () => {
    if (count < max) {
      setCount((prevCount) => prevCount + 1);
      onChange?.(count + 1);
    }
  };

  return (
    <CounterContainer>
      <CounterButton
        icon={iconDecrement}
        onClick={decrementHandler}
      />
      <CounterLabel label={label} />
      <span className="px-1 font-bold">{count}</span>
      <CounterButton
        icon={iconIncrement}
        onClick={incrementHandler}
      />
    </CounterContainer>
  );
}
