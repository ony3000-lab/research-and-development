import { useState } from 'react';
import type { PropsGettingCounterProps } from '../components/PropsGettingCounter';
import type {
  CounterDecrementProps,
  CounterIncrementProps,
} from '../components/PropsGettingCounter/types';

export default function useCounterWithGetters(initialCount: number) {
  const [count, setCount] = useState(initialCount);

  const decrementHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const getCounterProps = (
    props?: Partial<Omit<PropsGettingCounterProps, 'children'>>,
  ): PropsGettingCounterProps => ({
    value: count,
    ...props,
  });
  const getDecrementProps = (
    props?: Partial<CounterDecrementProps>,
  ): Required<CounterDecrementProps> => ({
    onClick: decrementHandler,
    ...props,
  });
  const getIncrementProps = (
    props?: Partial<CounterIncrementProps>,
  ): Required<CounterIncrementProps> => ({
    onClick: incrementHandler,
    ...props,
  });

  return {
    count,
    getCounterProps,
    getDecrementProps,
    getIncrementProps,
  };
}
