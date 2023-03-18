import { useContext } from 'react';
import { MinusIcon } from '@heroicons/react/24/solid';
import { CounterContext } from '@/contexts';

export default function CounterDecrement() {
  const { decrementHandler } = useContext(CounterContext);

  return (
    <button
      type="button"
      className="rounded-md p-1"
      onClick={decrementHandler}
    >
      <MinusIcon className="h-6 w-6" />
    </button>
  );
}
