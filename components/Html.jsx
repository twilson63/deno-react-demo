import React from 'react'

export function Html({ assets, title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<b>Enable JavaScript to run this app.</b>`,
          }}
        />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `assetManifest = ${JSON.stringify(assets)};`,
          }}
        />
        <script async src={assets['client.js']} />
      </body>
    </html>
  )
}