import { useState } from 'react';
import PageHead from '@/components/PageHead';

type CounterViewProps = {
  count: number;
  onDecrement: () => void;
  onIncrement: () => void;
};

function CounterView({ count, onDecrement, onIncrement }: CounterViewProps) {
  return (
    <div className="inline-flex items-center space-x-1 rounded-md border-2 border-solid border-blue-500 py-0.5 px-1 dark:border-sky-400">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-1"
        onClick={onDecrement}
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
        onClick={onIncrement}
      >
        <span className="inline-flex h-5 w-5 items-center justify-center text-[18px]">
          <i className="fa-solid fa-plus" />
        </span>
      </button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const vacProps: CounterViewProps = {
    count,
    onDecrement: () => {
      setCount((c) => c - 1);
    },
    onIncrement: () => {
      setCount((c) => c + 1);
    },
  };

  return <CounterView {...vacProps} />;
}

export default function VACPattern() {
  return (
    <>
      <PageHead title="VAC Pattern" />
      <main className="prose mx-auto min-h-screen p-8 dark:prose-invert">
        <h1>VAC Pattern</h1>

        <p>
          로직과 UI를 분리하는 Container-Presentational 패턴의 한 종류로 볼 수 있다.
          <br />이 패턴은 컴포넌트를 두 부분으로 나누는데, 하나는 로직만 다루는 Container
          Component(이하 컨테이너)이고, 다른 하나는 UI만 다루는 View Asset Component(이하 VAC)이다.
          <br />
          VAC는 컨테이너에서 넘겨주는 props를 통해서만 제어되고, 내부에 어떤 로직도 가지지 않는다.
          컨테이너는 이벤트 핸들러나 동적으로 렌더링되는 값 등을 하나의 props로 모아서 VAC에
          전달하고, VAC를 반환하는 구문을 제외하고 어떤 JSX도 가지지 않는다.
        </p>

        <pre>
          {/* prettier-ignore */}
          <code>{`type CounterViewProps = {
  count: number;
  onDecrement: () => void;
  onIncrement: () => void;
};

function CounterView({ count, onDecrement, onIncrement }: CounterViewProps) {
  return (
    <div className="inline-flex items-center space-x-1 rounded-md border-2 border-solid border-blue-500 py-0.5 px-1 dark:border-sky-400">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-1"
        onClick={onDecrement}
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
        onClick={onIncrement}
      >
        <span className="inline-flex h-5 w-5 items-center justify-center text-[18px]">
          <i className="fa-solid fa-plus" />
        </span>
      </button>
    </div>
  );
}`}</code>
        </pre>

        <pre>
          {/* prettier-ignore */}
          <code>{`function Counter() {
  const [count, setCount] = useState(0);

  const vacProps: CounterViewProps = {
    count,
    onDecrement: () => {
      setCount((c) => c - 1);
    },
    onIncrement: () => {
      setCount((c) => c + 1);
    },
  };

  return <CounterView {...vacProps} />;
}`}</code>
        </pre>
      </main>
    </>
  );
}
