import  "../styles/global.css"
import  Nav from "../components/Nav/Nav"

export default function MyApp({ Component, pageProps }) {
    return <div>
        <Nav/>
        <Component {...pageProps} />
        </div>
}

