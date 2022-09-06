import '../styles/global.css' ;
import { AppProps, AppContext } from 'next/app' ;
import App from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {    
    return <Component { ...pageProps } /> ;    
}

MyApp.getInitialProps = async ( appContext: AppContext ) => {
    const appProps = await App.getInitialProps( appContext ) ;
    return { ...appProps } ;
}

export default App;