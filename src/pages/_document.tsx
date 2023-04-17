import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

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
        <meta
          name="google-site-verification"
          content="Dz8GndEFIFnKmwi0ezgX5w8s7-ZcbcjPTs7B9SwT5fs"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FQHQK3HGYQ"
        ></script>
        <Script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {(window as any).dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-FQHQK3HGYQ');
        </Script>
      </body>
    </Html>
  )
}
