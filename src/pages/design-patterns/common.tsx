import PageHead from '@/components/PageHead';
import { CommonCounter as Counter } from '@/3rd-party/Counter';

export default function CommonPattern() {
  return (
    <>
      <PageHead title="Common Pattern" />
      <main className="prose mx-auto min-h-screen p-8 dark:prose-invert">
        <h1>Common Pattern</h1>

        <p>
          특별한 설계 패턴 없이, 한 덩어리의 컴포넌트 내부에 prop, state, event handler 등을 모두
          정의하는 방법. 가장 흔한 방법이다.
        </p>

        <section>
          <h2>주관적 장점</h2>

          <ul>
            <li>컴포넌트 규모가 작을 수록 빨리 만들 수 있다.</li>
          </ul>
        </section>

        <section>
          <h2>주관적 단점</h2>

          <ul>
            <li>컴포넌트 규모가 클 수록 variation을 주기 어렵다.</li>
          </ul>
        </section>

        <section>
          <h2>사용 예</h2>

          <Counter
            label="Counter"
            max={10}
            onChange={(newCount) => console.log('count changed:', newCount)}
          />
        </section>
      </main>
    </>
  );
}
