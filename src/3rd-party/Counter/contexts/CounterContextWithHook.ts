import { createContext } from 'react';

export type CounterContextWithHookState = {
  count: number;
};

export const CounterContextWithHook = createContext<CounterContextWithHookState>({
  count: 0,
});
