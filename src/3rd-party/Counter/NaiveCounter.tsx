import { useState } from 'react';
import { CounterContainer } from './layouts';

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
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-1"
        onClick={decrementHandler}
      >
        <span className="inline-flex h-5 w-5 items-center justify-center text-[18px]">
          <i className={`fa-solid fa-${iconDecrement}`} />
        </span>
      </button>
      <span className="px-1">{label}</span>
      <span className="px-1 font-bold">{count}</span>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-1"
        onClick={incrementHandler}
      >
        <span className="inline-flex h-5 w-5 items-center justify-center text-[18px]">
          <i className={`fa-solid fa-${iconIncrement}`} />
        </span>
      </button>
    </CounterContainer>
  );
}
