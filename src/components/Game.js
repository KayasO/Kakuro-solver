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
    solvedField: [],
    prevFieldSolutions: [],
    prevSolutionEvents: [],
    solutionEvents: [],
    explanationList: [],
  }

  componentDidMount() {
    const boardSetup = CHALLENGING_4x4()
    this.setState({
      solvedField: mapToSimpleList(boardSetup),
      solutionEvents: solve(mapToLists(boardSetup)),
      boardSetup,
    })
  }

  solverNextStep = () => {
    const { boardSetup, solvedField, solutionEvents } = this.state

    boardSetup.forEach((row, x) => {
      row.forEach((cell, y) => {
        if (solutionEvents[0].cell === cell) {
          solvedField[x][y].value = solutionEvents[0].cell.value
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
      solvedField,
      explanationList,
      prevFieldSolutions,
      prevSolutionEvents,
    } = this.state

    const lastSolvedCell = prevFieldSolutions[prevFieldSolutions.length - 1]
    solvedField[lastSolvedCell.x][lastSolvedCell.y].value = 0

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
      solvedField,
      prevFieldSolutions,
      solutionEvents,
    } = this.state

    return (
      <Grid container>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="display1" gutterBottom>
                Kakuro
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Field field={solvedField} />
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing="8" justify="flex-end">
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
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="display1" gutterBottom>
                Explanation List
              </Typography>
            </Grid>

            <Grid item xs={12} style={{ maxHeight: 400, overflow: 'auto' }}>
              <ExplanationList explanationList={explanationList} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default Game
