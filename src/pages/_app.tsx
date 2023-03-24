import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(far, fas);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
