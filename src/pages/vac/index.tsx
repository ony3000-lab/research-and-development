import Link from 'next/link';
import PageHead from '@/components/PageHead';

export default function VAC() {
  return (
    <>
      <PageHead title="Design Pattern: VAC" />
      <main className="prose mx-auto min-h-screen p-8 dark:prose-invert">
        <h1>Design Pattern: VAC</h1>

        <ul>
          <li>
            <h2>참고 문서</h2>

            <ul>
              <li>
                <a
                  href="https://velog.io/@inwoong100/React-디자인패턴-Presentational-Container-VAC패턴"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  디자인패턴 (Presentational-Container, VAC패턴)
                </a>
              </li>
            </ul>
          </li>
          <li>
            <h2>Counter 컴포넌트 구현 예시</h2>

            <ol>
              <li>
                <Link href="/vac/normal-pattern">Normal Pattern</Link>
              </li>
              <li>
                <Link href="/vac/vac-pattern">VAC Pattern</Link>
              </li>
            </ol>
          </li>
          <li>
            <h2>로그인 폼 구현 예시</h2>

            <ol>
              <li>
                <Link href="/vac/login-normal">Normal Pattern</Link>
              </li>
              <li>
                <Link href="/vac/login-vac">VAC Pattern</Link>
              </li>
              <li>
                <Link href="/vac/login-custom-hook">(번외) Custom Hook Pattern</Link>
              </li>
            </ol>
          </li>
        </ul>
      </main>
    </>
  );
}
