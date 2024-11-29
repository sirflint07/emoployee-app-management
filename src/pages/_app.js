import Layout from '@/layout'
import '@/styles/globals.css'
import Header from './Header'
import { QueryClient, QueryClientProvider } from 'react-query'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  )
}
