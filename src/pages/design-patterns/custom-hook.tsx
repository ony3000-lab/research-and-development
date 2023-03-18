import PageHead from '@/components/PageHead';
import { HookedCounter as Counter } from '@/3rd-party/Counter';
import { useCounter } from '@/3rd-party/Counter/hooks';

export default function CustomHook() {
  const {
    count: firstCount,
    decrementHandler: firstDecrementHandler,
    incrementHandler: firstIncrementHandler,
  } = useCounter(0);
  const {
    count: secondCount,
    decrementHandler: secondDecrementHandler,
    incrementHandler: secondIncrementHandler,
  } = useCounter(0);

  const doubleDecrementHandler = () => {
    secondDecrementHandler();
    secondDecrementHandler();
  };

  const doubleIncrementHandler = () => {
    secondIncrementHandler();
    secondIncrementHandler();
  };

  return (
    <>
      <PageHead title="Custom Hook Pattern" />
      <main className="prose min-h-screen p-8 dark:prose-invert">
        <h1>Custom Hook Pattern</h1>

        <p>
          이제 주요 로직은 커스텀 hook으로 이동된다. 이 hook은 여러 내부 로직(state, handler)을
          노출하여 개발자에게 많은 제어 권한을 부여한다.
        </p>

        <section>
          <h2>장점</h2>

          <ul>
            <li>
              <p>
                더 많은 제어권 제공: 개발자는 <code>useCounter</code>와 <code>Counter</code> 사이에
                자체 로직을 삽입해서 <code>Counter</code>의 기본 동작을 수정할 수 있다.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>단점</h2>

          <ul>
            <li>
              <p>
                구현 복잡성: 로직과 마크업이 분리되어 있으므로, 개발자는 두 부분을 직접 연결해야
                한다. 따라서, 올바르게 구현하기 위해서는 <code>Counter</code>가 어떻게 동작하는지 잘
                이해해야 한다.
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
              <Counter.Decrement onClick={doubleDecrementHandler} />
              <Counter.Label>Double Counter</Counter.Label>
              <Counter.Count />
              <Counter.Increment onClick={doubleIncrementHandler} />
            </Counter>
          </div>

          <div>
            <Counter value={0}>
              <Counter.Decrement />
              <Counter.Label>Not Working</Counter.Label>
              <Counter.Count />
              <Counter.Increment />
            </Counter>
          </div>
        </section>
      </main>
    </>
  );
}
