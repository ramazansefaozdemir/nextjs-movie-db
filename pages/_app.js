import Header from "../components/header"
import "../public/styles/global.css"

export default function App({ Component, pageProps }){
    return <>
        <Header></Header>
        <Component {...pageProps} />
    </> 
}