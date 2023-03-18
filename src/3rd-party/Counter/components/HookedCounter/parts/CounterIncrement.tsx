import { PlusIcon } from '@heroicons/react/24/solid';

type CounterIncrementProps = {
  onClick?: () => void;
};

export default function CounterIncrement({ onClick = undefined }: CounterIncrementProps) {
  return (
    <button
      type="button"
      className="rounded-md p-1"
      onClick={onClick}
    >
      <PlusIcon className="h-6 w-6" />
    </button>
  );
}
