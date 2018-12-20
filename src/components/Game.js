import React, { Component } from 'react'
import { Button, Grid } from '@material-ui/core'
import _ from 'lodash'

import Field from './Field'
import ExplanationList from './ExplanationList'
import { mapToLists, mapToSimpleList } from './../mapper'
import { EASY_EXAMPLE } from './../boardSetupNew'
import solve from './../solver'

class Game extends Component {
  state = {
    boardSetup: [],
    field: [],
    solutionEvents: [],
  }

  componentDidMount() {
    const boardSetup = EASY_EXAMPLE()
    this.setState({
      field: mapToSimpleList(boardSetup),
      solutionEvents: solve(mapToLists(boardSetup)),
      boardSetup,
    })
  }

  solverNextStep = () => {
    const { boardSetup, field, solutionEvents } = this.state

    boardSetup.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (solutionEvents[0] === cell) {
          field[i][j].value = solutionEvents[0].value
        }
      })
    })

    this.setState({
      solutionEvents: _.drop(solutionEvents),
    })
  }

  render() {
    const { field, solutionEvents } = this.state
    return (
      <Grid container>
        <Grid item xs={6}>
          <Field field={field} />
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log('Pressed Next')}
          >
            Next
          </Button>
        </Grid>
        <Grid item xs={6}>
          <ExplanationList explanationList={solutionEvents} />
        </Grid>
      </Grid>
    )
  }
}

export default Game
