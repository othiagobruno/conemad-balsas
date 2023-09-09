import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { themeApp } from '@/theme'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider>
      <ChakraProvider theme={themeApp}>
        <Head>
          <title>CONEMAD</title>
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </CacheProvider>
  )
}
