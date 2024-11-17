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
