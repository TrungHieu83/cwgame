import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/common.css'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NextNProgress from 'nextjs-progressbar'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from '@/configs/redux/setup'
import { DefaultSeo } from 'next-seo'
import SEO from '../configs/seo/seo.config'

const Layout = ({ Component, pageProps }: any) => {
  const renderLayout = () => {
    const getLayout = (Component as any).getLayout
    if (getLayout) {
      return getLayout(<Component {...pageProps} />)
    } else {
      return (
        <div>
          <Component {...pageProps} />
        </div>
      )
    }
  }

  return <>{renderLayout()}</>
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <NextNProgress />
            <DefaultSeo {...SEO}/>
            <Layout Component={Component} pageProps={pageProps} />
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              closeButton={false}
            />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
