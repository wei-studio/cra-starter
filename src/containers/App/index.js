import React, { Component } from 'react'
import { jwt } from '../../utils'
import { connect } from 'react-redux'
import { setActiveLanguage, getActiveLanguage } from 'react-localize-redux'

import { authRequest } from '../../actions/user-actions'
import Loading from '../../components/Loading'
import Routes from '../../routes'

class App extends Component {
  state = {
    loading: false
  }

  componentDidMount() {
    this.handleLanguage()
    this.authCheck()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.loading !== nextProps.user.isLoading) {
      return { loading: nextProps.user.isLoading }
    }

    return null
  }

  handleLanguage = () => {
    let language = localStorage.getItem('Language')
    if(language && language !== this.props.currentLanguage) {
      this.props.setActiveLanguage(language)
    }
  }

  authCheck = () => {
    let token = sessionStorage.getItem('Access Token')
    if(token && jwt(token)) {
      this.props.authRequest(token)
    } else {
      sessionStorage.removeItem('Access Token')
    }
  }

  render() {
    let RenderComponent = this.state.loading ? <Loading /> : <Routes />
    return (
      <div className="App">
        {RenderComponent}
      </div>
    )
  }
}

export default connect(
  ({ locale, user }) => ({
    user,
    currentLanguage: getActiveLanguage(locale)
  }),
  { authRequest, setActiveLanguage }
)(App)
