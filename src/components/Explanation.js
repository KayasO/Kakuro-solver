import React, { Component } from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import styled from 'styled-components'

import ExplanationList from './ExplanationList'

const FinishButton = styled(Button)`
  background-color: ${`${green[500]} !important`};
  color: white !important;
`

class Explanation extends Component {
  render() {
    const {
      explanationList,
      prevFieldSolutions,
      solutionEvents,
      openWonDialog,
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

          <Grid item container>
            <Grid item container spacing={8} xs={6}>
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

            <Grid item container justify="flex-end" xs={6}>
              <FinishButton variant="contained" onClick={openWonDialog}>
                Finish
              </FinishButton>
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
