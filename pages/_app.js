import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';
import { SessionProvider } from "next-auth/react";
function App({ Component, pageProps }) {
  //console.log("Google Id: ", process.env.GOOGLE_ANALYTICS )
  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
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
