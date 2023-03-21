import { PlusIcon } from '@heroicons/react/24/solid';
import PageHead from '@/components/PageHead';
import { PropsGettingCounter as Counter } from '@/3rd-party/Counter';
import { useCounterWithGetters as useCounter } from '@/3rd-party/Counter/hooks';

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
          <code>Custom Hook Pattern</code>은 뛰어난 제어 기능을 제공하지만, 개발자가 hook prop을
          처리하고 자신의 로직을 다시 만들어야 하기 때문에 컴포넌트를 통합하기 어렵게 만든다.
        </p>
        <p>
          <code>Props Getters Pattern</code>은 이 복잡성을 숨기려고 시도한다. hook에서 native prop을
          노출하는 대신 <code>getter</code> 목록을 제공한다.
        </p>

        <blockquote>
          여기서 <code>getter</code>란 native prop들을 반환하는 함수이며, 의미있는 이름을 가지고
          있어서, <code>getter</code>에 대응되는 JSX 요소가 무엇인지 개발자가 명확하게 알 수 있다.
        </blockquote>

        <section>
          <h2>장점</h2>

          <ul>
            <li>
              <p>
                사용하기 쉬움: 복잡성이 숨겨져 있다. 개발자는 <code>useCounter</code>에서 제공하는{' '}
                <code>getter</code>를 올바른 JSX 요소에 연결하기만 하면 된다.
              </p>
            </li>
            <li>
              <p>
                유연성: <code>getter</code>에서 반환하는 prop들을 특정 케이스에 맞게 재정의할 수
                있다.
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
                가져왔지만, 마치 &ldquo;마법&rdquo;처럼 이해하기 어렵다. 개발자는 노출된 getter
                props와 영향을 받는 내부 로직을 제대로 이해해야 올바르게 재정의할 수 있다. (
                <code>TypeScript</code>가 도움이 됨)
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
              <PlusIcon className="h-4 w-4" />
              <span className="px-1 text-base">2</span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
