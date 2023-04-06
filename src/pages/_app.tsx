import '@fortawesome/fontawesome-free/css/all.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import classNames from 'classnames';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { pretendard } from '@/fonts';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <main className={classNames(pretendard.variable, 'font-sans')}>
          <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
