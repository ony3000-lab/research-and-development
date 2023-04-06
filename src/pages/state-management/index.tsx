import PageHead from '@/components/PageHead';

export default function StateManagement() {
  return (
    <>
      <PageHead title="State Management" />
      <main className="prose mx-auto min-h-screen p-8 dark:prose-invert">
        <h1>State Management</h1>

        <ul>
          <li>
            <h2>React State Management</h2>

            <ul>
              <li>
                <h3>참고 문서</h3>

                <ul>
                  <li>
                    <a
                      href="https://tech.osci.kr/2023/03/20/state/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      State, 슬기롭게 관리 하기
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tech.osci.kr/2022/07/13/react-query/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React-Query 도입을 위한 고민 (feat. Recoil)
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
