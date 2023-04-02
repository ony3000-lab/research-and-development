import { useState } from 'react';
import PageHead from '@/components/PageHead';
import { ControlledCounter as Counter } from '@/3rd-party/Counter';

export default function ControlPropsPattern() {
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  const firstChangeHandler = (newCount: number) => {
    console.log('count changed:', newCount);
    setFirstCount(newCount);
  };

  const secondChangeHandler = (newCount: number) => {
    if (newCount <= 10) {
      console.log('count changed:', newCount);
      setSecondCount(newCount);
    }
  };

  return (
    <>
      <PageHead title="Control Props Pattern" />
      <main className="prose mx-auto min-h-screen p-8 dark:prose-invert">
        <h1>Control Props Pattern</h1>

        <p>
          이 패턴은 컴포넌트를{' '}
          <a
            href="https://ko.reactjs.org/docs/forms.html#controlled-components"
            target="_blank"
            rel="noopener noreferrer"
          >
            제어 컴포넌트
          </a>
          로 전환한다. 컴포넌트 외부의 state는 개발자가 자체 로직을 삽입하여 컴포넌트의 기본 동작을
          수정할 수 있는 &ldquo;단일 소스&rdquo;로 사용된다.
        </p>

        <section>
          <h2>장점</h2>

          <ul>
            <li>
              <p>
                더 많은 제어권 제공: 개발자가 주요 state를 제어하므로 <code>Counter</code> 동작에
                직접 영향을 줄 수 있다.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>단점</h2>

          <ul>
            <li>
              <p>
                구현 복잡성: 이전에는 단일 통합(<code>JSX</code>)으로 컴포넌트를 작동시키기에
                충분했으나, 이제 세 곳(<code>JSX</code>, <code>useState</code>,{' '}
                <code>changeHandler</code>)에 분산되어 있다.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>사용 예</h2>

          <div>
            <Counter
              value={firstCount}
              onChange={firstChangeHandler}
            >
              <Counter.Decrement icon="minus" />
              <Counter.Label>Counter</Counter.Label>
              <Counter.Count max={10} />
              <Counter.Increment icon="plus" />
            </Counter>
          </div>

          <div>
            <Counter
              value={secondCount}
              onChange={secondChangeHandler}
            >
              <Counter.Decrement icon="minus" />
              <Counter.Count />
              <Counter.Increment icon="plus" />
            </Counter>
          </div>
        </section>
      </main>
    </>
  );
}
