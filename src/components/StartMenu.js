import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core'

class StartMenu extends Component {
  render() {
    return (
      <Grid container direction="column" alignItems="center" spacing="40">
        <Grid item>
          <Typography variant="h4">Start Menu</Typography>
        </Grid>

        <Grid item>
          <Grid container>
            <Grid item>
              <Grid container spacing="16">
                <Grid item xs={12}>
                  <Typography variant="h5">4 X 4</Typography>
                </Grid>

                <Grid item>
                  <Link to="/game">
                    <Typography variant="body1">Easy</Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/game">
                    <Typography variant="body1">Challenging</Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container spacing="16">
                <Grid item xs={12}>
                  <Typography variant="h5">6 X 6</Typography>
                </Grid>
                <Grid item>
                  <Link to="/game">
                    <Typography variant="body1">Easy</Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/game">
                    <Typography variant="body1">Challenging</Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default StartMenu
