import React, { Component } from "react";
import Search from "./Component/Search/Search";
import List from "./Component/List/List";

export default class App extends Component {
//     state = {
//         users: [], // 初始化用户对象数组
//         isFirst: true, // 起始展示
//         isLoading: false, // 加载中
//         err: "", // 错误信息存储
//     };
// 
//     updataAppState = (stateObj)=>{
//         this.setState(stateObj)
//     }

    render() {
        return (
            <div className="container">
                {/* <Search updataAppState={this.updataAppState}/>
                <List {...this.state}/> */}
                <Search/>
                <List/>
            </div>
        );
    }
}
