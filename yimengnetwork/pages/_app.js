import  Nav from "../components/Nav/Nav"
import  style from "../styles/global.css"

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
          <Nav/>
          <Component {...pageProps} />
        </div>
    )
}

