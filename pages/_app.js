import Header from "../components/header"
import Footer from "../components/footer"
import "../public/styles/global.css"

export default function App({ Component, pageProps }){
    return <>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
    </> 
}