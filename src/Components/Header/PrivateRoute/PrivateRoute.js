import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export default class PrivateRoute extends Component {
    render() {
        return (
            localStorage.getItem("userLoginStatus") 
            ?
            this.props.children
            :
            <Navigate to = {'/login'}/>
        )
    }
}
