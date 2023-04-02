import PageHead from '@/components/PageHead';
import { HookedCounter as Counter, useCounter } from '@/3rd-party/Counter';

export default function CustomHookPattern() {
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
      <main className="prose mx-auto min-h-screen p-8 dark:prose-invert">
        <h1>Custom Hook Pattern</h1>

        <p>
          이제 주요 로직이 커스텀 hook으로 이동한다. 이 hook은 여러 내부 로직(state, handler)을
          노출하여 개발자에게 뛰어난 제어 기능을 제공한다.
        </p>

        <section>
          <h2>장점</h2>

          <ul>
            <li>
              <p>
                더 많은 제어권 제공: 개발자는 <code>useCounter</code>와 <code>Counter</code> 사이에
                자체 로직을 삽입하여 <code>Counter</code>의 기본 동작을 수정할 수 있다.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>단점</h2>

          <ul>
            <li>
              <p>
                구현 복잡성: 로직과 마크업이 분리되어 있기 때문에 두 부분을 연결하는 것은 개발자의
                몫이다. 따라서 <code>Counter</code>의 작동 방식을 잘 이해해야 올바르게 구현할 수
                있다.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>사용 예</h2>

          <div>
            <Counter value={firstCount}>
              <Counter.Decrement
                icon="minus"
                onClick={firstDecrementHandler}
              />
              <Counter.Label>Counter</Counter.Label>
              <Counter.Count />
              <Counter.Increment
                icon="plus"
                onClick={firstIncrementHandler}
              />
            </Counter>
          </div>

          <div>
            <Counter value={secondCount}>
              <Counter.Decrement
                icon="minus"
                onClick={doubleDecrementHandler}
              />
              <Counter.Label>Double Counter</Counter.Label>
              <Counter.Count />
              <Counter.Increment
                icon="plus"
                onClick={doubleIncrementHandler}
              />
            </Counter>
          </div>

          <div>
            <Counter value={0}>
              <Counter.Decrement icon="minus" />
              <Counter.Label>Not Working</Counter.Label>
              <Counter.Count />
              <Counter.Increment icon="plus" />
            </Counter>
          </div>
        </section>
      </main>
    </>
  );
}
