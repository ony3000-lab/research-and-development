// 0. Naive Pattern
export { default as NaiveCounter } from './NaiveCounter';

// 1. Compound Components Pattern
export { default as CompoundCounter } from './CompoundCounter';

// 2. Control Props Pattern
export { default as ControlledCounter } from './ControlledCounter';

// 3. Custom Hook Pattern
export { default as HookedCounter, useCounter } from './HookedCounter';

// 4. Props Getters Pattern
export { default as PropsGettingCounter, useCounterWithGetters } from './PropsGettingCounter';

// 5. State Reducer Pattern
export type { CounterState, CounterAction } from './StateReducingCounter';
export { default as StateReducingCounter, useCounterWithReducer } from './StateReducingCounter';
