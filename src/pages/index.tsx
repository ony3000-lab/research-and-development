import { classNames } from '@/adaptors';
import { BoxLink, Callout, NextByVercel, PageHead } from '@/components';

export default function Home() {
  return (
    <>
      <PageHead />
      <div
        className={classNames(
          `flex min-h-screen flex-col gap-8 px-5 py-8 sm:gap-16 sm:px-12 sm:py-16 lg:gap-24 lg:px-20
          lg:py-24`,
        )}
      >
        <NextByVercel />

        <div className="flex justify-center font-mono text-[14px]">
          <Callout>
            Get started by editing <code className="font-bold">src/pages/index.tsx</code>
          </Callout>
        </div>

        <div
          className={classNames(
            `mx-auto grid max-w-[1100px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`,
          )}
        >
          <BoxLink
            href="/design-patterns"
            title="Design Patterns"
            description="리액트 컴포넌트 설계 패턴"
          />

          <BoxLink
            href="/state-management"
            title="State Management"
            description="리액트 상태 관리"
          />

          <BoxLink
            href="/lifecycle-test"
            title="Lifecycle Test"
            description="리액트 생명주기 테스트"
          />

          <BoxLink
            href="/vac"
            title="Design Pattern: VAC"
            description="리액트 컴포넌트 설계 패턴: VAC"
          />

          <BoxLink
            href="/bg-blend-mode"
            title="Background Blend Mode"
            description="배경색 혼합 방법"
          />

          <BoxLink
            href="/clean-architecture"
            title="Clean Architecture"
            description="클린 아키텍처"
          />
        </div>
      </div>
    </>
  );
}
