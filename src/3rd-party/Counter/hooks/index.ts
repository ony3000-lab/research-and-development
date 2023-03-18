import { useState } from 'react';

export function useCounter(initialCount: number) {
  const [count, setCount] = useState(initialCount);

  const decrementHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return {
    count,
    decrementHandler,
    incrementHandler,
  };
}
