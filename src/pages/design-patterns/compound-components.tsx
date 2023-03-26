import { ArrowDownIcon } from '@heroicons/react/24/solid';
import PageHead from '@/components/PageHead';
import { CompoundCounter as Counter } from '@/3rd-party/Counter';

export default function CompoundComponentsPattern() {
  return (
    <>
      <PageHead title="Compound Components Pattern" />
      <main className="prose min-h-screen p-8 dark:prose-invert">
        <h1>Compound Components Pattern</h1>

        <p>
          이 패턴을 사용하면 prop 드릴링을 피하면서 표현적이고 선언적인 컴포넌트를 만들 수 있다.
          관심사를 더 잘 분리하고, 이해하기 쉬운 API를 사용하여 커스텀 가능한 컴포넌트를 원하는 경우
          이 패턴을 사용하는 것이 좋다.
        </p>

        <section>
          <h2>장점</h2>

          <ul>
            <li>
              <p>
                API 복잡성 감소: 모든 prop을 하나의 거대한 부모 컴포넌트에 집어넣고 하위 컴포넌트로
                드릴링하지 않아도 된다. 대신 가장 적합한 하위 컴포넌트에 prop을 연결한다.
              </p>
              <pre>
                {/* prettier-ignore */}
                <code>{`<Counter
  label="Counter"
  max={10}
  iconDecrement="minus"
  iconIncrement="plus"
  onChange={changeHandler}
/>`}</code>
              </pre>
              <div className="flex justify-center">
                <ArrowDownIcon className="h-6 w-6" />
              </div>
              <pre>
                {/* prettier-ignore */}
                <code>{`<Counter onChange={changeHandler}>
  <Counter.Decrement icon="minus" />
  <Counter.Label>Counter</Counter.Label>
  <Counter.Count max={10} />
  <Counter.Increment icon="plus" />
</Counter>`}</code>
              </pre>
            </li>
            <li>
              <p>
                유연한 마크업 구조: 다양한 케이스 생성이 가능하여 뛰어난 UI 유연성을 제공한다. 예를
                들어, 개발자는 하위 컴포넌트 순서를 쉽게 변경하거나 어떤 컴포넌트를 표시할지 정의할
                수 있다.
              </p>
            </li>
            <li>
              <p>
                관심사 분리: 대부분의 로직은 <code>Counter</code>에 중앙 집중화 되어있다. context는
                state와 handler를 자식 컴포넌트 간에 공유하는 데 사용된다. 이를 통해 책임을 명확하게
                분배할 수 있다.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>단점</h2>

          <ul>
            <li>
              <p>
                과도한 UI 유연성: UI 유연성이 너무 높으면 예상하지 못한 상황(예: 원하지 않는 코드,
                잘못된 <code>Counter</code>의 자식 순서, 필수 자식 누락 등)이 발생할 수도 있다. 사용
                사례에 따라 그 정도의 유연성은 허용하지 않는 것이 좋을 수도 있다.
              </p>
            </li>
            <li>
              <p>
                더 무거운 JSX: 이 패턴은 특히 린터(예: ESLint)나 코드 포매터(예: Prettier)를
                사용하는 경우 JSX 행의 수를 증가시킨다. 컴포넌트 하나만 놓고 봤을 때는 큰 문제가
                아닌 것처럼 보이지만, 큰 그림을 보면 큰 차이를 만들 수 있다.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>사용 예</h2>

          <div>
            <Counter onChange={(newCount) => console.log('count changed:', newCount)}>
              <Counter.Decrement icon="minus" />
              <Counter.Label>Counter</Counter.Label>
              <Counter.Count max={10} />
              <Counter.Increment icon="plus" />
            </Counter>
          </div>

          <div>
            <Counter onChange={(newCount) => console.log('count changed:', newCount)}>
              <Counter.Decrement icon="minus" />
              <Counter.Increment icon="plus" />
              <Counter.Label>Counter</Counter.Label>
              <Counter.Count max={10} />
            </Counter>
          </div>

          <div>
            <Counter onChange={(newCount) => console.log('count changed:', newCount)}>
              <Counter.Decrement icon="minus" />
              <Counter.Increment icon="plus" />
            </Counter>
          </div>
        </section>
      </main>
    </>
  );
}
