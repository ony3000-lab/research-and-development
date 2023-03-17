import { useState } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';

type CommonCounterProps = {
  label?: string;
  max?: number;
  onChange?: (newCount: number) => void;
};

export default function CommonCounter({
  label = 'Counter',
  max = 10,
  onChange = undefined,
}: CommonCounterProps) {
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
    <div className="inline-flex items-center border-2 border-solid border-blue-500 dark:border-sky-400 rounded-md space-x-1">
      <button
        type="button"
        className="p-1 rounded-md"
        onClick={decrementHandler}
      >
        <MinusIcon className="w-6 h-6" />
      </button>
      <span className="px-1">{label}</span>
      <span className="font-bold px-1">{count}</span>
      <button
        type="button"
        className="p-1 rounded-md"
        onClick={incrementHandler}
      >
        <PlusIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
