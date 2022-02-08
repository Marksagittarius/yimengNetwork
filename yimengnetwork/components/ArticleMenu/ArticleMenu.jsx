import 'antd/dist/antd.css';
import  style from "../../styles/ArticleMenu.module.css"
import { Card, Avatar } from 'antd';
const width = 325

export default function ArticleMenu() {
    const { Meta } = Card;
    return (
    <div className={style.container}>
        <div className={style.menu}>
            <div className={style.card}>
            <Card
                className={style.inner}
                style={{ width: width}}
                hoverable={true}
                cover={
                    <img
                        className = {style.innerImage}
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
            >
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
            </div>

            <div className={style.card}>
                <Card
                    className={style.inner}
                    style={{ width: width}}
                    hoverable={true}
                    cover={
                        <img
                            className = {style.innerImage}
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </div>

            <div className={style.card}>
                <Card
                    className={style.inner}
                    style={{ width: width}}
                    hoverable={true}
                    cover={
                        <img
                            className = {style.innerImage}
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </div>

            <div className={style.card}>
                <Card
                    className={style.inner}
                    style={{ width: width}}
                    hoverable={true}
                    cover={
                        <img
                            className = {style.innerImage}
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </div>

            <div className={style.card}>
                <Card
                    className={style.inner}
                    style={{ width: width}}
                    hoverable={true}
                    cover={
                        <img
                            className = {style.innerImage}
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </div>

            <div className={style.card}>
                <Card
                    className={style.inner}
                    style={{ width: width}}
                    hoverable={true}
                    cover={
                        <img
                            className = {style.innerImage}
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </div>
            
        </div>
        </div>
    )
}

