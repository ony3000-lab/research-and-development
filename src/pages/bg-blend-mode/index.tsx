import { classNames } from '@/adaptors';
import PageHead from '@/components/PageHead';
import styles from './index.module.css';

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

        <section>
          <h2>multiply</h2>

          <div className="flex flex-wrap gap-2">
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgb(0,100,0),rgb(0,100,0)),linear-gradient(rgba(255,255,255,1),rgba(255,255,255,1))] bg-blend-multiply',
              )}
            >
              darkgreen &times; white/100
              <br />
              rgb(0, 100, 0)
            </div>
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgb(0,100,0),rgb(0,100,0)),linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))] bg-blend-multiply',
              )}
            >
              darkgreen &times; white/50
              <br />
              rgb(0, 100, 0)
            </div>
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgb(0,100,0),rgb(0,100,0)),linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0))] bg-blend-multiply',
              )}
            >
              darkgreen &times; white/0
              <br />
              rgb(0, 99, 0)
            </div>
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgb(0,100,0),rgb(0,100,0)),linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))] bg-blend-multiply',
              )}
            >
              darkgreen &times; black/50
              <br />
              rgb(0, 50, 0)
            </div>
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgb(0,100,0),rgb(0,100,0)),linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2))] bg-blend-multiply',
              )}
            >
              darkgreen &times; black/20
              <br />
              rgb(0, 80, 0)
            </div>
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgb(0,100,0),rgb(0,100,0)),linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0))] bg-blend-multiply',
              )}
            >
              darkgreen &times; black/0
              <br />
              rgb(0, 100, 0)
            </div>

            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgba(255,255,255,1),rgba(255,255,255,1)),linear-gradient(rgb(0,100,0),rgb(0,100,0))] bg-blend-multiply',
              )}
            >
              white/100 &times; darkgreen
              <br />
              rgb(0, 100, 0)
            </div>
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),linear-gradient(rgb(0,100,0),rgb(0,100,0))] bg-blend-multiply',
              )}
            >
              white/50 &times; darkgreen
              <br />
              rgb(0, 100, 0)
            </div>
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)),linear-gradient(rgb(0,100,0),rgb(0,100,0))] bg-blend-multiply',
              )}
            >
              white/0 &times; darkgreen
              <br />
              rgb(0, 100, 0)
            </div>
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),linear-gradient(rgb(0,100,0),rgb(0,100,0))] bg-blend-multiply',
              )}
            >
              black/50 &times; darkgreen
              <br />
              rgb(0, 50, 0)
            </div>
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(rgb(0,100,0),rgb(0,100,0))] bg-blend-multiply',
              )}
            >
              black/20 &times; darkgreen
              <br />
              rgb(0, 80, 0)
            </div>
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(rgb(0,100,0),rgb(0,100,0))] bg-blend-multiply',
              )}
            >
              black/0 &times; darkgreen
              <br />
              rgb(0, 100, 0)
            </div>

            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgb(210,180,140),rgb(210,180,140)),linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))] bg-blend-multiply',
              )}
            >
              tan &times; black/50
              <br />
              rgb(105, 90, 70)
            </div>
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgb(210,180,140),rgb(210,180,140)),linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2))] bg-blend-multiply',
              )}
            >
              tan &times; black/20
              <br />
              rgb(168, 144, 112)
            </div>
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgb(210,180,140),rgb(210,180,140)),linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0))] bg-blend-multiply',
              )}
            >
              tan &times; black/0
              <br />
              rgb(210, 180, 140)
            </div>
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),linear-gradient(rgb(210,180,140),rgb(210,180,140))] bg-blend-multiply',
              )}
            >
              black/50 &times; tan
              <br />
              rgb(105, 90, 70)
            </div>
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(rgb(210,180,140),rgb(210,180,140))] bg-blend-multiply',
              )}
            >
              black/20 &times; tan
              <br />
              rgb(168, 144, 112)
            </div>
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(rgb(210,180,140),rgb(210,180,140))] bg-blend-multiply',
              )}
            >
              black/0 &times; tan
              <br />
              rgb(210, 180, 140)
            </div>

            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgb(210,180,140),rgb(210,180,140)),linear-gradient(rgba(102,51,153,0.8),rgba(102,51,153,0.8))] bg-blend-multiply',
              )}
            >
              tan &times; rebeccapurple/80
              <br />
              rgb(110, 65, 96)
            </div>
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgb(210,180,140),rgb(210,180,140)),linear-gradient(rgba(102,51,153,0.5),rgba(102,51,153,0.5))] bg-blend-multiply',
              )}
            >
              tan &times; rebeccapurple/50
              <br />
              rgb(146, 107, 111)
            </div>
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgb(210,180,140),rgb(210,180,140)),linear-gradient(rgba(102,51,153,0.2),rgba(102,51,153,0.2))] bg-blend-multiply',
              )}
            >
              tan &times; rebeccapurple/20
              <br />
              rgb(184, 151, 128)
            </div>
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgba(102,51,153,0.8),rgba(102,51,153,0.8)),linear-gradient(rgb(210,180,140),rgb(210,180,140))] bg-blend-multiply',
              )}
            >
              rebeccapurple/80 &times; tan
              <br />
              rgb(109, 65, 95)
            </div>
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgba(102,51,153,0.5),rgba(102,51,153,0.5)),linear-gradient(rgb(210,180,140),rgb(210,180,140))] bg-blend-multiply',
              )}
            >
              rebeccapurple/50 &times; tan
              <br />
              rgb(146, 107, 112)
            </div>
            <div
              className={classNames(
                styles['blend-box'],
                styles['is-dark'],
                'bg-[image:linear-gradient(rgba(102,51,153,0.2),rgba(102,51,153,0.2)),linear-gradient(rgb(210,180,140),rgb(210,180,140))] bg-blend-multiply',
              )}
            >
              rebeccapurple/20 &times; tan
              <br />
              rgb(185, 151, 129)
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
