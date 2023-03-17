import PageHead from '@/components/PageHead';

export default function DesignPatterns() {
  return (
    <>
      <PageHead title="Design Patterns" />
      <main className="min-h-screen p-8 prose dark:prose-invert">
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
            </ul>
          </li>
        </ul>
      </main>
    </>
  );
}
