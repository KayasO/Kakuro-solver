import React, { Component } from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import _ from 'lodash'

import Field from './Field'
import ExplanationList from './ExplanationList'
import { mapToLists, mapToSimpleList } from './../mapper'
import { CHALLENGING_4x4 } from '../boardSetup'
import solve from './../solver'

class Game extends Component {
  state = {
    boardSetup: [],
    field: [],
    prevFieldSolutions: [],
    prevSolutionEvents: [],
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

    boardSetup.forEach((row, x) => {
      row.forEach((cell, y) => {
        if (solutionEvents[0].cell === cell) {
          field[x][y].value = solutionEvents[0].cell.value
          this.setState({
            prevFieldSolutions: [...this.state.prevFieldSolutions, { x, y }],
          })
        }
      })
    })

    this.setState({
      explanationList: [...this.state.explanationList, solutionEvents[0]],
      prevSolutionEvents: [...this.state.prevSolutionEvents, solutionEvents[0]],
      solutionEvents: _.drop(solutionEvents),
    })
  }

  solverPrevStep = () => {
    const {
      field,
      explanationList,
      prevFieldSolutions,
      prevSolutionEvents,
    } = this.state

    const lastSolvedCell = prevFieldSolutions[prevFieldSolutions.length - 1]
    field[lastSolvedCell.x][lastSolvedCell.y].value = 0

    this.setState({
      solutionEvents: [
        prevSolutionEvents[prevSolutionEvents.length - 1],
        ...this.state.solutionEvents,
      ],
      prevFieldSolutions: _.dropRight(prevFieldSolutions),
      prevSolutionEvents: _.dropRight(prevSolutionEvents),
      explanationList: _.dropRight(explanationList),
    })
  }

  render() {
    const {
      explanationList,
      field,
      prevFieldSolutions,
      solutionEvents,
    } = this.state
    return (
      <Grid container xs={12}>
        <Grid container xs={6}>
          <Grid item xs={12}>
            <Typography variant="title" gutterBottom>
              Kakuro
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Field field={field} />
          </Grid>
          <Grid container xs={12} spacing="8" justify="flex-end">
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.solverPrevStep}
                disabled={!prevFieldSolutions.length}
              >
                Prev
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={this.solverNextStep}
                disabled={!solutionEvents.length}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={6}>
          <Grid item xs={12}>
            <Typography variant="title" gutterBottom>
              Explanation List
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ExplanationList explanationList={explanationList} />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default Game
