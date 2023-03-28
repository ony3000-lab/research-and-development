import PageHead from '@/components/PageHead';
import {
  PropsGettingCounter as Counter,
  useCounterWithGetters as useCounter,
} from '@/3rd-party/Counter';

export default function PropsGettersPattern() {
  const { getCounterProps, getDecrementProps, getIncrementProps } = useCounter(0);

  const { onClick: incrementHandler } = getIncrementProps();

  const doubleIncrementHandler = () => {
    incrementHandler();
    incrementHandler();
  };

  return (
    <>
      <PageHead title="Props Getters Pattern" />
      <main className="prose min-h-screen p-8 dark:prose-invert">
        <h1>Props Getters Pattern</h1>

        <p>
          <code>Custom Hook Pattern</code>은 뛰어난 제어 기능을 제공하지만, 개발자가 수많은 native
          hook prop을 처리하고 로직을 다시 만들어야 하기 때문에 컴포넌트를 통합하기 더 어렵다.
        </p>
        <p>
          <code>Props Getters Pattern</code>은 이러한 복잡성을 감추려고 시도한다. native prop을
          노출하는 대신 <code>getter</code> 목록을 제공한다.
        </p>

        <blockquote>
          여기서 <code>getter</code>란 많은 prop들을 반환하는 함수이며, 의미있는 이름을 가지고 있기
          때문에, 어떤 <code>getter</code>가 어떤 JSX 요소에 해당하는지 개발자가 명확하게 알 수
          있다.
        </blockquote>

        <section>
          <h2>장점</h2>

          <ul>
            <li>
              <p>
                사용하기 쉬움: 복잡성은 숨겨져 있다. 개발자는 <code>useCounter</code>에서 제공하는{' '}
                <code>getter</code>를 올바른 JSX 요소에 연결하기만 하면 된다.
              </p>
            </li>
            <li>
              <p>
                유연성: 특정 케이스에 맞게 <code>getter</code>의 prop을 재정의할 수 있다.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>단점</h2>

          <ul>
            <li>
              <p>
                가시성 부족: <code>getter</code>는 컴포넌트를 통합하기 쉽게 만드는 추상화를
                가져왔지만, 동시에 더 불투명하고 &ldquo;마법&rdquo;처럼 이해하기 어렵다. 개발자는
                노출된 getter prop과 영향을 받는 내부 로직을 잘 이해해야 제대로 재정의할 수 있다. (
                <code>TypeScript</code>가 도움이 될 것이다.)
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>사용 예</h2>

          <div className="flex items-center space-x-2">
            <Counter {...getCounterProps()}>
              <Counter.Decrement {...getDecrementProps()} />
              <Counter.Label>Counter</Counter.Label>
              <Counter.Count />
              <Counter.Increment {...getIncrementProps()} />
            </Counter>
            <button
              type="button"
              className="inline-flex items-center -space-x-1.5 rounded-md border-2 border-solid border-green-500 p-1 dark:border-emerald-400"
              {...getIncrementProps({ onClick: doubleIncrementHandler })}
            >
              <span className="inline-flex h-5 w-5 items-center justify-center text-[16px]">
                <i className="fa-solid fa-plus" />
              </span>
              <span className="px-1 text-base font-bold">2</span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
