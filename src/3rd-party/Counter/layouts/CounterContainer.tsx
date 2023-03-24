import type { ComponentProps } from 'react';

export default function CounterContainer({ children }: ComponentProps<'div'>) {
  return (
    <div className="inline-flex items-center space-x-1 rounded-md border-2 border-solid border-blue-500 dark:border-sky-400">
      {children}
    </div>
  );
}
