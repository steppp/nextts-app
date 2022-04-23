import '../styles/globals.css'
import type { AppProps } from 'next/app'

/**
 * Defines the type which contains all the data needed by a page to render.
 */
export type PageContents<T> = {
  title: string
  decription: string
  contents: T
}

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
      <Component {...pageProps} />
    </div>
}

export default MyApp
