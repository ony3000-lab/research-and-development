import { useContext, useEffect } from 'react';
import { CounterContext } from '@/contexts';

type CounterCountProps = {
  max?: number;
};

export default function CounterCount({ max = 10 }: CounterCountProps) {
  const { count, maxCount, setMaxCount } = useContext(CounterContext);

  useEffect(() => {
    if (maxCount !== max) {
      setMaxCount(max);
    }
  }, [max, maxCount, setMaxCount]);

  return <span className="px-1 font-bold">{count}</span>;
}
