import React, { Component } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default class MyNavLink extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <NavLink className="list-group-item" {...this.props}/>
      </div>
    )
  }
}
