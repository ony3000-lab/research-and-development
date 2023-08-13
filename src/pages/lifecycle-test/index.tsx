import { useState } from 'react';
import PageHead from '@/components/PageHead';
import { LegacyCounter, ModernCounter, ModernCounter2 } from '@/components';

export default function LifecycleTest() {
  const [isActiveLegacyCounter, setIsActiveLegacyCounter] = useState(false);
  const [isActiveModernCounter, setIsActiveModernCounter] = useState(false);
  const [isActiveModernCounter2, setIsActiveModernCounter2] = useState(false);

  return (
    <>
      <PageHead title="Lifecycle Test" />
      <main className="prose mx-auto min-h-screen p-8 dark:prose-invert">
        <h1>Lifecycle Test</h1>

        <div className="space-y-4">
          <div>
            <div>
              <button
                type="button"
                onClick={() => setIsActiveLegacyCounter((prevState) => !prevState)}
              >
                클래스형 컴포넌트 토글
              </button>
            </div>
            {isActiveLegacyCounter && (
              <div>
                <LegacyCounter />
              </div>
            )}
          </div>
          <div>
            <div>
              <button
                type="button"
                onClick={() => setIsActiveModernCounter((prevState) => !prevState)}
              >
                함수형 컴포넌트 토글
              </button>
            </div>
            {isActiveModernCounter && (
              <div>
                <ModernCounter />
              </div>
            )}
          </div>
          <div>
            <div>
              <button
                type="button"
                onClick={() => setIsActiveModernCounter2((prevState) => !prevState)}
              >
                함수형 컴포넌트 II 토글
              </button>
            </div>
            {isActiveModernCounter2 && (
              <div>
                <ModernCounter2 />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
