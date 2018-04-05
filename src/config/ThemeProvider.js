import React from 'react'
import { connect } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import rtl from 'jss-rtl'
import { createGenerateClassName, jssPreset } from 'material-ui/styles'
import { getActiveLanguage } from 'react-localize-redux'

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const generateClassName = createGenerateClassName();

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#525252',
      main: '#2a2a2a',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffdc',
      main: '#eee8aa',
      dark: '#bbb67a',
      contrastText: '#000',
    }
  }
})

const ThemeProvider = ({ children, currentLanguage }) => {
  theme.direction = currentLanguage === 'fa' ? 'rtl' : theme.direction

  return (
    <MuiThemeProvider theme={theme}>
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <div dir={theme.direction}>
          {React.Children.only(children)}
        </div>
      </JssProvider>
    </MuiThemeProvider>
  )
}

export default connect(
  ({ locale }) => ({
    currentLanguage: getActiveLanguage(locale).code
  })
)(ThemeProvider)