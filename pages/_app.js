import 'tailwindcss/tailwind.css'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        #__next {
          height: 100%;
        }
      `}</style>
    </Layout>
  )
}

export default MyApp
