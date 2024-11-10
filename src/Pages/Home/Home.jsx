import React, { Component } from 'react'
import { Switch, Redirect, Route, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import News from './News/News'
import Messages from './Messages/Messages'

export default class Home extends Component {
  render() {
    return (
      <div>
            <h3>I'm Home Component</h3> 
            <div>
                {/* 导航界面 */}
                <ul className="nav nav-tabs">
                    <li>
                        <NavLink className="list-group-item" to="/home/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink className="list-group-item" to="/home/messages">Messages</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                {/* 展示界面 */}
                <Switch>
                    <Route path='/home/news' component={News}/>
                    <Route path='/home/messages' component={Messages}/>
                    <Redirect to="/home/news"/>
                </Switch>
            </div>
      </div>
    )
  }
}
