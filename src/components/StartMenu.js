import React, { Component } from 'react'
import { Grid, Button, Typography } from '@material-ui/core'

import DifficultySelector from './DifficultySelector'

class StartMenu extends Component {
  render() {
    const { changeDifficulty } = this.props

    return (
      <Grid container direction="column" alignItems="center" spacing="40">
        <Grid item>
          <Typography variant="display1">Start Menu</Typography>
        </Grid>

        <Grid item>
          <Grid container spacing="40">
            <Grid item>
              <DifficultySelector changeDifficulty={changeDifficulty} />
            </Grid>

            <Grid item>
              <Button variant="contained" color="primary">
                Start
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default StartMenu
