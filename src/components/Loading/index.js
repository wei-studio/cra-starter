import React from 'react'
import PropTypes from 'prop-types'
import { CircularProgress } from 'material-ui/Progress'
import { withStyles } from 'material-ui/styles'
import green from 'material-ui/colors/green'

const styles = {
  circ: {
    margin: 10,
    color: green[500]
  },
  loadingCont: {
    width: 320,
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    padding: 20
  }
}

const title = 'Title'

const Loading = ({ classes }) => (
  <div className={classes.loadingCont}>
    <h1>{title}</h1>
    <CircularProgress size={70} className={classes.circ} />
  </div>
)

Loading.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Loading)