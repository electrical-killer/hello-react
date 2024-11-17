import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail/Detail'

export default class Messages extends Component {

  state = {
    message: [
      {id:1, title: 'message1'},
      {id:2, title: 'message2'},
      {id:3, title: 'message3'}
    ]
  }

  repalceShow = (id, title)=>{
    return (()=>{
      return (
        // this.props.history.replace(`/home/messages/detail/${id}/${title}`)
        // this.props.history.replace(`/home/messages/detail/?id=${id}&title=${title}`)
        this.props.history.replace("/home/messages/detail", {id, title})
      )
    })
  }

  pushShow = (id, title)=>{
    return (()=>{
      return (
        // this.props.history.push(`/home/messages/detail/${id}/${title}`)
        // this.props.history.push(`/home/messages/detail/?id=${id}&title=${title}`)
        this.props.history.push("/home/messages/detail", {id, title})
      )
    })
  }

  render() {
    const {message} = this.state
    return (
      <div>
        <ul>
        {
          message.map((messgaeObj) => {
            return (
              <li key={messgaeObj.id}>
                {/* 路由组件声明 params 传递*/}
                {/* <Link to={`/home/messages/detail/${messgaeObj.id}/${messgaeObj.title}`}>
                  {messgaeObj.title}
                </Link> */}

                {/* 路由组件声明 search 传递*/}
                {/* <Link to={`/home/messages/detail?id=${messgaeObj.id}&title=${messgaeObj.title}`}>
                  {messgaeObj.title}
                </Link> */}

                {/* 路由组件声明 state 传递*/}
                <Link to={{pathname:"/home/messages/detail", state:{id:messgaeObj.id, title:messgaeObj.title}}}>
                  {messgaeObj.title}
                </Link>

                {/* 编写一段代码, 实现replace跳转 */}
                <button onClick={this.repalceShow(messgaeObj.id, messgaeObj.title)} >replace查看</button>

                {/* 编写一段代码, 实现push跳转 */}
                <button onClick={this.pushShow(messgaeObj.id, messgaeObj.title)} >push查看</button>
              </li>
            )
          })
        }
        </ul>

        <hr />
        {/* 路由组件声明 params 传递*/}
        {/* <Route path="/home/messages/detail/:id/:title" component={Detail}/> */}

        {/* 路由组件声明 search 传递*/}
        {/* <Route path="/home/messages/detail" component={Detail}/> */}

        {/* 路由组件声明 state 传递*/}
        <Route path="/home/messages/detail" component={Detail}/>
      </div>
    )
  }
}
