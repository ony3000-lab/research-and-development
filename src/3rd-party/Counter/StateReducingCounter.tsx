import type { ComponentProps, Reducer } from 'react';
import { createContext, useContext, useReducer, useMemo } from 'react';
import { CounterContainer } from './layouts';
import { CounterButton } from './parts';

type CounterContextWithHookState = {
  count: number;
};

const CounterContextWithHook = createContext<CounterContextWithHookState>({
  count: 0,
});

export type StateReducingCounterProps = Pick<Parameters<typeof CounterContainer>[0], 'children'> & {
  value: number;
};

function StateReducingCounter({ value, children = null }: StateReducingCounterProps) {
  const contextState = useMemo<CounterContextWithHookState>(
    () => ({
      count: value,
    }),
    [value],
  );

  return (
    <CounterContextWithHook.Provider value={contextState}>
      <CounterContainer>{children}</CounterContainer>
    </CounterContextWithHook.Provider>
  );
}

StateReducingCounter.Count = function CounterCount() {
  const { count } = useContext(CounterContextWithHook);

  return <span className="px-1 font-bold">{count}</span>;
};

type CounterDecrementProps = {
  icon?: string;
  onClick?: () => void;
};

StateReducingCounter.Decrement = function CounterDecrement({
  icon = 'minus',
  onClick = undefined,
}: CounterDecrementProps) {
  return (
    <CounterButton
      icon={icon}
      onClick={onClick}
    />
  );
};

type CounterIncrementProps = {
  icon?: string;
  onClick?: () => void;
};

StateReducingCounter.Increment = function CounterIncrement({
  icon = 'plus',
  onClick = undefined,
}: CounterIncrementProps) {
  return (
    <CounterButton
      icon={icon}
      onClick={onClick}
    />
  );
};

type CounterLabelProps = ComponentProps<'span'>;

StateReducingCounter.Label = function CounterLabel({ children }: CounterLabelProps) {
  return <span className="px-1">{children}</span>;
};

export default StateReducingCounter;

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

function useCounterWithReducer({ initialCount, reducer }: CounterWithReducerHookProps) {
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

export { useCounterWithReducer };
