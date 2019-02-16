import React, { Component } from 'react'
import { Button, Grid, Typography } from '@material-ui/core'

import ExplanationList from './ExplanationList'

class Explanation extends Component {
  render() {
    const {
      explanationList,
      prevFieldSolutions,
      solutionEvents,
      solverNextStep,
      solverPrevStep,
    } = this.props

    return (
      <Grid item xs={6}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Explanation List
            </Typography>
          </Grid>

          <Grid item container spacing={16} justify="center">
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={solverPrevStep}
                disabled={!prevFieldSolutions.length}
              >
                Prev
              </Button>
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={solverNextStep}
                disabled={!solutionEvents.length}
              >
                Next
              </Button>
            </Grid>
          </Grid>

          <Grid item style={{ maxHeight: 350, overflow: 'auto' }}>
            <ExplanationList explanationList={explanationList} />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default Explanation
