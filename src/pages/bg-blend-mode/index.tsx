import PageHead from '@/components/PageHead';

export default function BackgroundBlendMode() {
  return (
    <>
      <PageHead title="Background Blend Mode" />
      <main className="prose mx-auto min-h-screen p-8 dark:prose-invert">
        <h1>Background Blend Mode</h1>

        <ul>
          <li>
            <h2>참고 문서</h2>

            <ul>
              <li>
                <a
                  href="https://htmlcolorcodes.com/color-names/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HTML Color Names
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3.org/TR/compositing-1/#blending"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blending
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </main>
    </>
  );
}
