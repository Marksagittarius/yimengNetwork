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
                    <a className = {style.logo} href={"https://ssdut.dlut.edu.cn/"}>大连理工大学软件学院</a>

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



