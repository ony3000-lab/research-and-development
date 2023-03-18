import { useContext } from 'react';
import { CounterContextWithHook } from '../../../contexts';

export default function CounterCount() {
  const { count } = useContext(CounterContextWithHook);

  return <span className="px-1 font-bold">{count}</span>;
}
