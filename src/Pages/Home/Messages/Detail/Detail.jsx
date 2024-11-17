import React, { Component } from "react";
// import qs from "querystring-es3"

const message = [
    { id: "1", content: "this is first message" },
    { id: "2", content: "this is second message" },
    { id: "3", content: "this is third message" }
];

export default class Detail extends Component {
    
    render() {
        /* 接收路由组件传过来的params参数 */
        // const {id, title} = this.props.match.params;


        /* 接收路由组件传过来的search参数 */
        // const {search} = this.props.location
        /*
            方法 qs.parse() 表示将search类型字符串, 转换为键值对象
            其中search.slice(1) 表示将字串第一个字符 ? 截取掉,
            注意querystring不再使用, 更新为querystring-es3
        */
        // const {id, title} = qs.parse(search.slice(1))


        /* 接收路由组件传过来的state参数 */
        /* {} 表示内容为空 */
        const {id, title} = this.props.location.state || {}

        /* 由传来的id, 在数据库中寻找对应的content */
        const messageObj = message.find(detail=>{
            return detail.id == id /* 当条件满足时返回 */
        }) || {}
        

        return (
            <ul>
                <li>id: {id}</li>
                <li>title: {title}</li>

                {/*
                    <li>content: {messageObj.content}</li>
                    这里写成如上内容时, 会报错:content, 找不到如链接<img src="https://img.eksnotebook.com/images/202411171832310.png"/>
                    
                    原因1 是 messageObj数组在find后, 可能undefind, 而undefind后, 无法展示内容
                    原因2 是 注意props.match.params 传入的id为字串...
                */}
                <li>content: {messageObj.content ? messageObj.content : "message not found"}</li>
            </ul>
        )
    }
}
