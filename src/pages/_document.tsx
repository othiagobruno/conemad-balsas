import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="CONEMAD" />
        <meta name="og:title" content="CONEMAD" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CONEMAD MA" />
        <meta name="twitter:creator" content="@CONEMAD MA" />
        <meta name="twitter:title" content="CONEMAD MA" />
        <meta name="twitter:description" content="CONEMAD MA" />
        <meta name="twitter:image" content="https://CONEMAD MA.com/og.png" />
        <meta property="og:url" content="https://CONEMAD MA.com" />
        <meta property="og:title" content="CONEMAD MA" />
        <meta property="og:description" content="CONEMAD MA" />
        <meta property="og:image" content="https://CONEMAD MA.com/og.png" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
