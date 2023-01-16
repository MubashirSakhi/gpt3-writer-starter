import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';
import { SessionProvider } from "next-auth/react";
function App({ Component, pageProps }) {
  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`} />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>

    </>
  )
}
export default App;
