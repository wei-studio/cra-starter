import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

class HomePage extends Component{
  render() {
    return (
      <button onClick={() => this.props.push('/login')} >Login</button>
    )
  }
}

export default connect(null, { push })(HomePage)