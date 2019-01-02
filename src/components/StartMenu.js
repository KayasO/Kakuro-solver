import React, { Component, Fragment } from 'react'
import { Grid, Button } from '@material-ui/core'

import DifficultySelector from './DifficultySelector'

class StartMenu extends Component {
  render() {
    const { changeDifficulty } = this.props
    return (
      <Grid container>
        <Grid item xs={12}>
          <h1>Start Menu</h1>
        </Grid>
        <Grid item xs={6}>
          <DifficultySelector changeDifficulty={changeDifficulty} />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary">
            Start
          </Button>
        </Grid>
      </Grid>
    )
  }
}

export default StartMenu
