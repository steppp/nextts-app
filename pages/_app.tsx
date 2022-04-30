import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TransitionProvider } from '../src/contexts/TransitionContext'
import TransitionLayout from '../src/Layouts/TransitionLayout'

/**
 * Defines the type which contains all the data needed by a page to render.
 */
export type PageContents<T> = {
  title: string
  decription: string
  contents: T
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TransitionProvider>
      <TransitionLayout>
          <Component {...pageProps} />
      </TransitionLayout>
    </TransitionProvider>
  )
}

export default MyApp
