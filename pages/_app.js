import Layout from '../components/layout/layout'
import '../styles/globals.css'
import '../components/ui/fontawesome-free-6.4.2/css/all.css'

function App({ Component, pageProps }) {
  return (<Layout> 
    <Component {...pageProps} />
    </Layout>
  );
}

export default App;