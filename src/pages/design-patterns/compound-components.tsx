import { ArrowDownIcon } from '@heroicons/react/24/solid';
import PageHead from '@/components/PageHead';
import { CompoundCounter as Counter } from '@/3rd-party/Counter';

export default function CompoundComponents() {
  return (
    <>
      <PageHead title="Compound Components Pattern" />
      <main className="prose min-h-screen p-8 dark:prose-invert">
        <h1>Compound Components Pattern</h1>

        <p>
          이 패턴을 사용하면 prop 드릴링을 피하면서 표현적이고 선언적인 컴포넌트를 만들 수 있다.
          관심사를 더 잘 분리하고, 이해할 수 있는 API를 사용하여 커스텀 가능한 컴포넌트를 원하는
          경우 이 패턴을 사용하는 것이 좋다.
        </p>

        <section>
          <h2>장점</h2>

          <ul>
            <li>
              <p>
                API 복잡성 감소: 하나의 거대한 상위 컴포넌트에 모든 prop을 전달하고 하위 컴포넌트로
                드릴링 하는 대신, 가장 말이 되는 컴포넌트에 prop이 연결된다.
              </p>
              <pre>
                {/* prettier-ignore */}
                <code>{`<Counter
  label="Counter"
  max={10}
  onChange={changeHandler}
/>`}</code>
              </pre>
              <div className="flex justify-center">
                <ArrowDownIcon className="h-6 w-6" />
              </div>
              <pre>
                {/* prettier-ignore */}
                <code>{`<Counter onChange={changeHandler}>
  <Counter.Decrement />
  <Counter.Label>Counter</Counter.Label>
  <Counter.Count max={10} />
  <Counter.Increment />
</Counter>`}</code>
              </pre>
            </li>
            <li>
              <p>
                유연한 마크업 구조: 다양한 케이스 생성을 허용하여 뛰어난 UI 유연성을 제공한다. 예를
                들어, 컴포넌트를 사용하는 개발자는 <code>Counter</code>의 자식 순서를 쉽게
                변경하거나 표시할 항목을 정의할 수 있다. (아래 사용 예 참고)
              </p>
            </li>
            <li>
              <p>
                관심사의 분리: 대부분의 로직은 <code>Counter</code>에 집중되어 있다. context는
                state와 handler를 <code>Counter</code>의 자식 간에 공유하는 데 사용된다. 이것은
                우리에게 명확한 책임 분배를 제공한다.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>단점</h2>

          <ul>
            <li>
              <p>
                과도한 UI 유연성: 이 수준의 유연성을 가지면 예상하지 못한 상황(예: 원하지 않는 코드,
                잘못된 <code>Counter</code>의 자식 순서, 필수 자식 누락)이 발생할 수도 있다. 사용
                사례에 따라 그렇게 많은 유연성을 허용하고 싶지 않을 수 있다.
              </p>
            </li>
            <li>
              <p>
                무거운 JSX: 이 패턴은 특히 linter 또는 code formatter를 사용하는 경우 JSX 행 수를
                증가시킨다. 컴포넌트 하나만 놓고 봤을 때는 큰 문제가 아닌 것 같지만, 큰 그림을 보면
                확실히 큰 차이를 만들 수 있다.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>사용 예</h2>

          <div>
            <Counter onChange={(newCount) => console.log('count changed:', newCount)}>
              <Counter.Decrement />
              <Counter.Label>Counter</Counter.Label>
              <Counter.Count max={10} />
              <Counter.Increment />
            </Counter>
          </div>

          <div>
            <Counter onChange={(newCount) => console.log('count changed:', newCount)}>
              <Counter.Decrement />
              <Counter.Increment />
              <Counter.Label>Counter</Counter.Label>
              <Counter.Count max={10} />
            </Counter>
          </div>

          <div>
            <Counter onChange={(newCount) => console.log('count changed:', newCount)}>
              <Counter.Decrement />
              <Counter.Increment />
            </Counter>
          </div>
        </section>
      </main>
    </>
  );
}
