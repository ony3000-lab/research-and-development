import { useState } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';

type NaiveCounterProps = {
  label?: string;
  max?: number;
  onChange?: (newCount: number) => void;
};

export default function NaiveCounter({
  label = 'Counter',
  max = Infinity,
  onChange = undefined,
}: NaiveCounterProps) {
  const min = 0;
  const [count, setCount] = useState(min);

  const decrementHandler = () => {
    if (count > min) {
      const newCount = count - 1;

      setCount(newCount);
      onChange?.(newCount);
    }
  };
  const incrementHandler = () => {
    if (count < max) {
      const newCount = count + 1;

      setCount(newCount);
      onChange?.(newCount);
    }
  };

  return (
    <div className="inline-flex items-center space-x-1 rounded-md border-2 border-solid border-blue-500 dark:border-sky-400">
      <button
        type="button"
        className="rounded-md p-1"
        onClick={decrementHandler}
      >
        <MinusIcon className="h-6 w-6" />
      </button>
      <span className="px-1">{label}</span>
      <span className="px-1 font-bold">{count}</span>
      <button
        type="button"
        className="rounded-md p-1"
        onClick={incrementHandler}
      >
        <PlusIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
