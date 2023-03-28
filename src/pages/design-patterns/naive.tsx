import PageHead from '@/components/PageHead';
import { NaiveCounter as Counter } from '@/3rd-party/Counter';

export default function NaivePattern() {
  return (
    <>
      <PageHead title="Naive Pattern" />
      <main className="prose mx-auto min-h-screen p-8 dark:prose-invert">
        <h1>Naive Pattern</h1>

        <p>
          한 덩어리의 컴포넌트 내부에 prop, state, event handler 등을 모두 정의하는, 가장 단순한
          패턴이다. 이 덩어리를 작은 조각으로 나누는 설계를 적용했을 때, 조각 중 일부는 이 패턴이 될
          수도 있다.
        </p>

        <section>
          <h2>장점</h2>

          <ul>
            <li>
              <p>
                만들기 쉬움: 단순한 컴포넌트를 만들 때 복잡한 설계 패턴을 적용해야 한다면 생산성이
                떨어질 것이다. 이 패턴은 다음에 소개하는 어떤 패턴과 비교해도 적은 양의 코드를
                가진다.
              </p>
            </li>
            <li>
              <p>
                사용하기 쉬움: 개발자는 완성된 컴포넌트를 가져와서, 그것이 렌더링 되어야 할 위치에
                적절한 prop과 함께 배치하기만 하면 된다.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>단점</h2>

          <ul>
            <li>
              <p>
                유지보수의 어려움: 모든 로직이 컴포넌트 내부에 존재하므로, 특정 케이스를 처리하기
                위해서는 새로운 prop과 분기 처리 로직이 필요한데, 이것들은 컴포넌트의 규모가 커질
                수록 디버깅을 어렵게 만들 것이다.
              </p>
            </li>
            <li>
              <p>
                제어권 부족: 개발자의 자체 로직을 컴포넌트 내부 로직에 끼워넣거나, 컴포넌트 내부
                상태를 직접적으로 참조할 수 있는 방법이 없다. prop으로 콜백을 전달할 수 있다면 내부
                상태는 간접적으로 참조할 수 있다.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2>사용 예</h2>

          <div>
            <Counter
              label="Counter"
              max={10}
              iconDecrement="minus"
              iconIncrement="plus"
              onChange={(newCount) => console.log('count changed:', newCount)}
            />
          </div>
        </section>
      </main>
    </>
  );
}
