import PageHead from '@/components/PageHead';
import { useCounterWithComponent as useCounter } from '@/3rd-party/Counter/hooks';

export default function PartialApplicationPattern() {
  const { count, decrementHandler, incrementHandler, Counter } = useCounter(0);

  return (
    <>
      <PageHead title="Partial Application Pattern" />
      <main className="prose min-h-screen p-8 dark:prose-invert">
        <h1>Partial Application Pattern</h1>

        <p>Lorem ipsum dolor sit amet.</p>

        <section>
          <h2>주관적 장점</h2>

          <ul>
            <li>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>주관적 단점</h2>

          <ul>
            <li>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>사용 예</h2>

          <div>
            <Counter value={count}>
              <Counter.Decrement onClick={decrementHandler} />
              <Counter.Label>Counter</Counter.Label>
              <Counter.Count />
              <Counter.Increment onClick={incrementHandler} />
            </Counter>
          </div>
        </section>
      </main>
    </>
  );
}
