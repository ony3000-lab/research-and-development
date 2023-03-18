import Link from 'next/link';
import PageHead from '@/components/PageHead';

export default function DesignPatterns() {
  return (
    <>
      <PageHead title="Design Patterns" />
      <main className="prose min-h-screen p-8 dark:prose-invert">
        <h1>Design Patterns</h1>

        <ul>
          <li>
            <h2>React Component Design Pattern</h2>

            <ul>
              <li>
                <h3>참고 문서</h3>

                <ul>
                  <li>
                    <a
                      href="https://javascript.plainenglish.io/5-advanced-react-patterns-a6b7624267a6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      5 Advanced React Patterns
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://velog.io/@dnr6054/유용한-리액트-패턴-5가지"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      유용한 리액트 패턴 5가지
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h3>Patterns</h3>

                <ol start={0}>
                  <li>
                    <Link href="/design-patterns/common">Common Pattern</Link>
                  </li>
                  <li>
                    <Link href="/design-patterns/compound-components">
                      Compound Components Pattern
                    </Link>
                  </li>
                  <li>
                    <Link href="/design-patterns/control-props">Control Props Pattern</Link>
                  </li>
                </ol>
              </li>
            </ul>
          </li>
        </ul>
      </main>
    </>
  );
}
