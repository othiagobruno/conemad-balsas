import Script from 'next/script'
import React from 'react'

const GoogleTagManager: React.FC = () => {
  return (
    <div>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FQHQK3HGYQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FQHQK3HGYQ');
        `}
      </Script>
    </div>
  )
}

export default GoogleTagManager
