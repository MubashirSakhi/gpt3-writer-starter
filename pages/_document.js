import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Pitch Wise" key="title"/>
        <meta property="og:description" content="Build with Dedication and cool vibes" key="description"/>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dusjh0hzg/image/upload/v1672820088/pitch_wise_og_q5l52u.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
