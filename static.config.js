import path from 'path'
import React from 'react'





export default {
  
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,800|Open+Sans:400,700,800&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdn.iconmonstr.com/1.3.0/css/iconmonstr-iconic-font.min.css"/>
      </Head>
      <Body>{children}</Body>
    </Html>
  )
}
