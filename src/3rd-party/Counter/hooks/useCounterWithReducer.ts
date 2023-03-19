import type { Reducer } from 'react';
import { useReducer } from 'react';

export type CounterState = {
  count: number;
};

export type CounterAction = { type: 'decrement' | 'increment' };

const defaultReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'decrement':
      return {
        count: state.count - 1,
      };
    case 'increment':
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
};

type CounterWithReducerHookProps = {
  initialCount: number;
  reducer: Reducer<CounterState, CounterAction>;
};

export function useCounterWithReducer({ initialCount, reducer }: CounterWithReducerHookProps) {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };
  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  return {
    count: state.count,
    decrementHandler,
    incrementHandler,
  };
}

useCounterWithReducer.reducer = defaultReducer;
