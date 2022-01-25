import  style from "../../styles/HomePage.module.css"
import  Image from "next/image"
import  Script from 'next/script'
import  person1 from "../../public/img/homePage/person.png"
import  mountain1 from "../../public/img/homePage/mountain1.png"
import  mountain2 from "../../public/img/homePage/mountain2.png"
import  mountain3 from "../../public/img/homePage/mountain3.png"
import  sky from "../../public/img/homePage/sky.png"
import  image from "../../public/img/homePage/image.jpg"
import  Head from "next/head";
import  {Body} from "next/dist/server/web/spec-compliant/body";

export default function HomePage() {

    return <body className = {style.myBody}>

        <div className = {style.myHeader}>
            <div className = {style.myNav}>

                <div className = {style.container}>
                    <h3 className = {style.logo}>大连理工大学软件学院</h3>
                    <div>
                    <a href="https://github.com/Marksagittarius/yimengNetwork" className = {style.githubCorner} aria-label="View source on GitHub">
                        <svg width="80" height="80" viewBox="0 0 250 250"
                             className = {style.gitcat}
                             aria-hidden="true">
                            <path d = "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                            <path
                                d = "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                                fill = "currentColor"  className = {style.octoarm}></path>
                            <path
                                d = "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                                fill="currentColor" className = "octo-body"></path>
                        </svg>
                    </a>

                    </div>
                </div>
            </div>

            <h1 className = {style.bigTitle} data-speed="0.1">水乳交融 生死与共</h1>
            <h3 className = {style.bigSubTitle} data-speed="0.1"> 大连理工大学 “蒙山巍秀·沂水流长” 社会实践团</h3>


            <a href = "#about" className = {style.scrollButton} data-iconfont="ETmodules" data-icon>
            </a>
            <a href = "#about" className = {style.scrollButton1} data-iconfont="ETmodules" data-icon>
            </a>
            <a href = "#about" className = {style.scrollButton2} data-iconfont="ETmodules" data-icon>
            </a>

           <div className = {style.person} >
            <Image src = {person1} data-speed="-0.25" alt=""/>
           </div>

            <div className = {style.mountain1} >
            <Image src = {mountain1} className = {style.mountain1} data-speed="-0.2" alt=""/>
            </div>

            <div className = {style.mountain2}>
            <Image src = {mountain2} className = {style.mountain2} data-speed="0.4" alt=""/>
            </div>

            <div className={style.mountain3}>
            <Image src = {mountain3}  data-speed="0.3" alt=""/>
            </div>

            <div className = {style.sky}>
            <Image src = {sky}  data-speed="0.5" alt=""/>
            </div>

        </div>

        <div className = {style.mySection}>
            <div className={style.shadow}/>

            <div className={style.container}>
                <div className={style.content}>
                    <h3 className={style.title} id = "about">
                       关于我们
                        <div className={style.borderd}>
                            <p>大连理工大学“蒙山巍秀，沂水流长”社会实践团是一支由大连理工大学软件学院实践部社会实践中心、实践部青年志愿者协会以及红色先锋团成员共同组织的社会实践队伍。</p>
                        </div>
                    </h3>
                    <p className={style.text}></p>
                </div>

                <div className ={style.imgContainer}>
                    <Image src = {image} alt=""/>
                </div>
            </div>
        </div>

        <Script
            src = "./HomePageScript.js"
            strategy = {"beforeInteractive"}
        />
    </body>


}



