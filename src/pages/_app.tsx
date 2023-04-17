import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { themeApp } from '@/theme'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import GoogleTagManager from '@/shared/GoogleTagManager'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider>
      <ChakraProvider theme={themeApp}>
        <GoogleTagManager />
        <GoogleAnalytics trackPageViews strategy="lazyOnload" />
        <Component {...pageProps} />
      </ChakraProvider>
    </CacheProvider>
  )
}
