import type { ReactNode } from 'react';

type CounterLabelProps = {
  children?: ReactNode;
};

export default function CounterLabel({ children = null }: CounterLabelProps) {
  return <span className="px-1">{children}</span>;
}
