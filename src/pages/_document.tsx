import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Despezzas</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Despezzas" />
        <meta name="og:title" content="Despezzas" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@despezzas" />
        <meta name="twitter:creator" content="@despezzas" />
        <meta name="twitter:title" content="Despezzas" />
        <meta name="twitter:description" content="Despezzas" />
        <meta name="twitter:image" content="https://despezzas.com/og.png" />
        <meta property="og:url" content="https://despezzas.com" />
        <meta property="og:title" content="Despezzas" />
        <meta property="og:description" content="Despezzas" />
        <meta property="og:image" content="https://despezzas.com/og.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
