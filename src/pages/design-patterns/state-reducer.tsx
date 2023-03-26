import PageHead from '@/components/PageHead';
import type { CounterState, CounterAction } from '@/3rd-party/Counter';
import {
  StateReducingCounter as Counter,
  useCounterWithReducer as useCounter,
} from '@/3rd-party/Counter';

const firstReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    default:
      return useCounter.reducer(state, action);
  }
};

const secondReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'decrement':
      return {
        count: state.count - 2,
      };
    case 'increment':
      return {
        count: state.count + 2,
      };
    default:
      return useCounter.reducer(state, action);
  }
};

export default function StateReducerPattern() {
  const {
    count: firstCount,
    decrementHandler: firstDecrementHandler,
    incrementHandler: firstIncrementHandler,
  } = useCounter({
    initialCount: 0,
    reducer: firstReducer,
  });
  const {
    count: secondCount,
    decrementHandler: secondDecrementHandler,
    incrementHandler: secondIncrementHandler,
  } = useCounter({
    initialCount: 0,
    reducer: secondReducer,
  });

  return (
    <>
      <PageHead title="State Reducer Pattern" />
      <main className="prose min-h-screen p-8 dark:prose-invert">
        <h1>State Reducer Pattern</h1>

        <p>
          개발자에게 제어권을 넘기는 측면에서 가장 진보된 패턴이다. 개발자가 컴포넌트의 내부 작동
          방식을 변경할 수 있는 고급 방법을 제공한다.
        </p>
        <p>
          이 코드는 <code>Custom Hook Pattern</code>과 유사하지만, hook에 전달되는{' '}
          <code>reducer</code>가 추가되었다. 이 <code>reducer</code>는 컴포넌트의 모든 내부 동작을
          재정의할 수 있다.
        </p>

        <section>
          <h2>장점</h2>

          <ul>
            <li>
              <p>
                더 많은 제어권 제공: 가장 복잡한 케이스에서는, state reducer를 사용하는 것이
                개발자에게 제어권을 맡기는 가장 좋은 방법이다. <code>useCounter</code>의 모든 내부
                action은 이제 외부에서 접근할 수 있고 재정의도 할 수 있다.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>단점</h2>

          <ul>
            <li>
              <p>
                구현 복잡성: 이 패턴은 제작자와 개발자 모두에게 구현하기 가장 복잡한 패턴일 것이다.
              </p>
            </li>
            <li>
              <p>
                가시성 부족: 모든 reducer의 action은 변경될 수 있으므로, 컴포넌트의 내부 로직에 대한
                충분한 이해가 필요하다.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>사용 예</h2>

          <div>
            <Counter value={firstCount}>
              <Counter.Decrement onClick={firstDecrementHandler} />
              <Counter.Label>Counter</Counter.Label>
              <Counter.Count />
              <Counter.Increment onClick={firstIncrementHandler} />
            </Counter>
          </div>

          <div>
            <Counter value={secondCount}>
              <Counter.Decrement onClick={secondDecrementHandler} />
              <Counter.Label>Double Counter</Counter.Label>
              <Counter.Count />
              <Counter.Increment onClick={secondIncrementHandler} />
            </Counter>
          </div>
        </section>
      </main>
    </>
  );
}
