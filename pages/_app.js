import '../styles/global.css' ;
import App from 'next/app' ;

const MyApp = ({ Component, pageprops }) => {    
    return <Component { ...pageprops } /> ;    
}

MyApp.getInitialProps = async ( appContext ) => {
    const appProps = await App.getInitialProps( appContext ) ;
    return { ...appProps } ;
}

export default App;