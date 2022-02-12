import 'antd/dist/antd.css';
import  style from "../../styles/ArticleMenu.module.css"
import { Card} from 'antd';
import Image from "next/image"
import article1 from "../../public/article/article1.jpg"
import article2 from "../../public/article/article2.jpg"
import article3 from "../../public/article/article3.jpg"
import article4 from "../../public/article/article4.jpg"
import article5 from "../../public/article/article5.jpg"
import article6 from "../../public/article/article6.jpg"
const width = 325


export default function ArticleMenu() {
    const { Meta } = Card;
    return (
    <div className={style.container}>
        <div className={style.menu}>
            <a className={style.card} href = "https://mp.weixin.qq.com/s/ksqWVeQwhdHGDwGrd9st_Q">
            <Card
                className={style.inner}
                style={{ width: width}}
                hoverable={true}
                cover={
                    <div className={style.innerImage}>
                    <Image
                        alt="example"
                        src={article1}
                    />
                        </div>
                }
            >
                <Meta

                    title="忆往昔峥嵘岁月，看今朝赤旗烈烈"
                    description="访临沂华东烈士陵园"
                />
            </Card>
            </a>

            <a className={style.card} href = "https://mp.weixin.qq.com/s/7s_5ahU_TosFzjbjbZVplg">
                <Card
                    className={style.inner}
                    style={{ width: width}}
                    hoverable={true}
                    cover={
                        <div className={style.innerImage}>
                            <Image
                                alt="example"
                                src={article2}
                            />
                        </div>
                    }
                >
                    <Meta

                        title="访书圣故里，寻活水源头"
                        description="访王羲之故居"
                    />
                </Card>
            </a>

            <a className={style.card} href = "https://mp.weixin.qq.com/s/0EboX5jrgzTeDYza62D-hA">
                <Card
                    className={style.inner}
                    style={{ width: width}}
                    hoverable={true}
                    cover={
                        <div className={style.innerImage}>
                            <Image
                                alt="example"
                                src={article3}
                            />
                        </div>
                    }
                >
                    <Meta

                        title="沂蒙精神护卫家国，青春战疫壮怀大我"
                        description="坚决打赢疫情防控阻击战"
                    />
                </Card>
            </a>

            <a className={style.card} href = "https://mp.weixin.qq.com/s/_2SbbSGNIMqix8kWyS6OaA">
                <Card
                    className={style.inner}
                    style={{ width: width}}
                    hoverable={true}
                    cover={
                        <div className={style.innerImage}>
                            <Image
                                alt="example"
                                src={article4}
                            />
                        </div>
                    }
                >
                    <Meta

                        title="百年星火，弦歌不辍"
                        description="访沂蒙革命纪念馆"
                    />
                </Card>
            </a>

            <a className={style.card} href = "https://mp.weixin.qq.com/s/4HNQMbzvuICu0OqPc4uMaA">
                <Card
                    className={style.inner}
                    style={{ width: width}}
                    hoverable={true}
                    cover={
                        <div className={style.innerImage}>
                            <Image
                                alt="example"
                                src={article5}
                            />
                        </div>
                    }
                >
                    <Meta

                        title="牢记使命，做时代的答卷人"
                        description="十九届六中全会专题报道"
                    />
                </Card>
            </a>

            <a className={style.card} href = "https://mp.weixin.qq.com/s/G9VQpuadfgnwOfrAcjiSnA">
                <Card
                    className={style.inner}
                    style={{ width: width}}
                    hoverable={true}
                    cover={
                        <div className={style.innerImage}>
                            <Image
                                alt="example"
                                src={article5}
                            />
                        </div>
                    }
                >
                    <Meta

                        title="新时代的沂蒙精神"
                        description="历久弥新，源远流长"
                    />
                </Card>
            </a>


            <a className={style.card} href = "https://mp.weixin.qq.com/s/VCFttvLcYwp5BT3bsiQ5wQ">
                <Card
                    className={style.inner}
                    style={{ width: width}}
                    hoverable={true}
                    cover={
                        <div className={style.innerImage}>
                            <Image
                                alt="example"
                                src={article6}
                            />
                        </div>
                    }
                >
                    <Meta

                        title="大连理工大学实践队专访王恺教授"
                        description="把沂蒙文化传播出去，才是我的愿景"
                    />
                </Card>
            </a>

        </div>
        </div>
    )
}

