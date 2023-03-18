import { useContext } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import { CounterContext } from '@/contexts';

export default function CounterIncrement() {
  const { incrementHandler } = useContext(CounterContext);

  return (
    <button
      type="button"
      className="rounded-md p-1"
      onClick={incrementHandler}
    >
      <PlusIcon className="h-6 w-6" />
    </button>
  );
}
