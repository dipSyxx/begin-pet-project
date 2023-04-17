import type { AppProps } from 'next/app'
import '@styles/globals.sass'
import '@styles/globalWindowModuleStyles.sass'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
