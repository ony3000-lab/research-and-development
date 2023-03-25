import type { ComponentProps } from 'react';

type CounterButtonProps = {
  icon: string;
  onClick: ComponentProps<'button'>['onClick'];
};

export default function CounterButton({ icon, onClick }: CounterButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-md p-1"
      onClick={onClick}
    >
      <span className="inline-flex h-5 w-5 items-center justify-center text-[18px]">
        <i className={`fa-solid fa-${icon}`} />
      </span>
    </button>
  );
}
