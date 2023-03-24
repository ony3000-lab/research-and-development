import { useState } from 'react';
import type { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CounterContainer } from './layouts';

type NaiveCounterProps = {
  label?: string;
  min?: number;
  max?: number;
  iconDecrement?: IconName;
  iconIncrement?: IconName;
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
        className="rounded-md p-1"
        onClick={decrementHandler}
      >
        <FontAwesomeIcon
          icon={['fas', iconDecrement]}
          className="h-5 w-5"
        />
      </button>
      <span className="px-1">{label}</span>
      <span className="px-1 font-bold">{count}</span>
      <button
        type="button"
        className="rounded-md p-1"
        onClick={incrementHandler}
      >
        <FontAwesomeIcon
          icon={['fas', iconIncrement]}
          className="h-5 w-5"
        />
      </button>
    </CounterContainer>
  );
}
