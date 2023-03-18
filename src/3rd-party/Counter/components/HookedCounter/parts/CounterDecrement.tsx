import { MinusIcon } from '@heroicons/react/24/solid';

type CounterDecrementProps = {
  onClick?: () => void;
};

export default function CounterDecrement({ onClick = undefined }: CounterDecrementProps) {
  return (
    <button
      type="button"
      className="rounded-md p-1"
      onClick={onClick}
    >
      <MinusIcon className="h-6 w-6" />
    </button>
  );
}
