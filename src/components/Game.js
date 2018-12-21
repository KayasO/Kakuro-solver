import React, { Component } from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import _ from 'lodash'

import Field from './Field'
import ExplanationList from './ExplanationList'
import { mapToLists, mapToSimpleList } from './../mapper'
import { CHALLENGING_4x4 } from './../boardSetupNew'
import solve from './../solver'

class Game extends Component {
  state = {
    boardSetup: [],
    field: [],
    solutionEvents: [],
    explanationList: [],
  }

  componentDidMount() {
    const boardSetup = CHALLENGING_4x4()
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
        if (solutionEvents[0].cell === cell) {
          field[i][j].value = solutionEvents[0].cell.value
        }
      })
    })

    this.setState({
      explanationList: [...this.state.explanationList, solutionEvents[0]],
      solutionEvents: _.drop(solutionEvents),
    })
  }

  solverPrevStep = () => {
    console.log('solverPrevStep')
  }

  render() {
    const { explanationList, field, solutionEvents } = this.state
    return (
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="title" gutterBottom>
            Kakuro
          </Typography>
          <Field field={field} />
          <Button
            variant="contained"
            color="secondary"
            onClick={this.solverPrevStep}
            // TODO: disabled
          >
            Prev
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.solverNextStep}
            disabled={!solutionEvents.length}
          >
            Next
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="title" gutterBottom>
            Explanation List
          </Typography>
          <ExplanationList explanationList={explanationList} />
        </Grid>
      </Grid>
    )
  }
}

export default Game
