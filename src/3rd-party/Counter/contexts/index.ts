import type { Dispatch, SetStateAction } from 'react';

import { createContext } from 'react';

export type CounterContextState = {
  count: number;
  maxCount?: number;
  setMaxCount: Dispatch<SetStateAction<number | undefined>>;
  decrementHandler: () => void;
  incrementHandler: () => void;
};

export const CounterContext = createContext<CounterContextState>({
  count: 0,
  maxCount: undefined,
  setMaxCount: () => {},
  decrementHandler: () => {},
  incrementHandler: () => {},
});
