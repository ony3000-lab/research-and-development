import { useState } from 'react';
import PageHead from '@/components/PageHead';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="inline-flex items-center space-x-1 rounded-md border-2 border-solid border-blue-500 py-0.5 px-1 dark:border-sky-400">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-1"
        onClick={() => {
          setCount((c) => c - 1);
        }}
      >
        <span className="inline-flex h-5 w-5 items-center justify-center text-[18px]">
          <i className="fa-solid fa-minus" />
        </span>
      </button>
      <span className="px-1">Counter</span>
      <span className="px-1 font-bold">{count}</span>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-1"
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        <span className="inline-flex h-5 w-5 items-center justify-center text-[18px]">
          <i className="fa-solid fa-plus" />
        </span>
      </button>
    </div>
  );
}

export default function NormalPattern() {
  return (
    <>
      <PageHead title="Normal Pattern" />
      <main className="prose mx-auto min-h-screen p-8 dark:prose-invert">
        <h1>Normal Pattern</h1>

        <p>
          한 덩어리의 컴포넌트 내부에 prop, state, event handler 등을 모두 정의하는, 가장 단순한
          패턴이며, 흔히 사용된다. 로직과 UI가 한 컴포넌트에 결합되어 있어 유지보수 비용이 증가할 수
          있다.
        </p>

        <pre>
          {/* prettier-ignore */}
          <code>{`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="inline-flex items-center space-x-1 rounded-md border-2 border-solid border-blue-500 py-0.5 px-1 dark:border-sky-400">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-1"
        onClick={() => {
          setCount((c) => c - 1);
        }}
      >
        <span className="inline-flex h-5 w-5 items-center justify-center text-[18px]">
          <i className="fa-solid fa-minus" />
        </span>
      </button>
      <span className="px-1">Counter</span>
      <span className="px-1 font-bold">{count}</span>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-1"
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        <span className="inline-flex h-5 w-5 items-center justify-center text-[18px]">
          <i className="fa-solid fa-plus" />
        </span>
      </button>
    </div>
  );
}`}</code>
        </pre>
      </main>
    </>
  );
}
