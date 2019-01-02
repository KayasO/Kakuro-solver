import React, { Component } from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import _ from 'lodash'

import Field from './Field'
import ExplanationList from './ExplanationList'
import { mapToLists, mapToSimpleList } from './../mapper'
import {
  EASY_EXAMPLE,
  CHALLENGING_4x4,
  EASY_6x6,
  EXPERT_9x17,
} from '../boardSetup'
import solve from './../solver'
import check from './../check'

class Game extends Component {
  state = {
    boardSetup: [],
    checkSetup: [],
    checkField: [],
    solvedField: [],
    prevFieldSolutions: [],
    prevSolutionEvents: [],
    solutionEvents: [],
    explanationList: [],
    showSolution: false,
  }

  componentDidMount() {
    const boardSetup = EASY_EXAMPLE()
    const checkSetup = EASY_EXAMPLE()

    this.setState({
      checkField: mapToSimpleList(checkSetup),
      solvedField: mapToSimpleList(boardSetup),
      solutionEvents: solve(mapToLists(boardSetup)),
      boardSetup,
      checkSetup,
      check: check(checkSetup),
    })
  }

  solverNextStep = () => {
    const { boardSetup, solvedField, solutionEvents } = this.state

    boardSetup.forEach((row, x) => {
      row.forEach((cell, y) => {
        if (solutionEvents[0].cell === cell) {
          solvedField[x][y].value = solutionEvents[0].cell.value
          solvedField[x][y].lastSolved = true
          this.setState({
            prevFieldSolutions: [...this.state.prevFieldSolutions, { x, y }],
          })
        } else {
          solvedField[x][y].lastSolved = false
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
    solvedField[lastSolvedCell.x][lastSolvedCell.y].lastSolved = false
    if (prevFieldSolutions.length > 1) {
      const prevSolvedCell = prevFieldSolutions[prevFieldSolutions.length - 2]
      solvedField[prevSolvedCell.x][prevSolvedCell.y].lastSolved = true
    }

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

  checkBoard = () => {
    this.setState(
      {
        checkField: mapToSimpleList(this.state.check()),
      },
      () => {
        const { checkField } = this.state
        let boardCorrect = true

        checkField.forEach(row => {
          row.forEach(cell => {
            if (cell.isFalse) {
              boardCorrect = false
            }
          })
        })
        if (boardCorrect) {
          this.props.openWonDialog()
        }
        this.setState({
          showSolution: boardCorrect,
        })
      }
    )
  }

  changeField = fn => () => {
    const boardSetup = fn()
    const checkSetup = fn()

    this.setState({
      checkField: mapToSimpleList(checkSetup),
      solvedField: mapToSimpleList(boardSetup),
      solutionEvents: solve(mapToLists(boardSetup)),
      boardSetup,
      checkSetup,
      check: check(checkSetup),
      prevFieldSolutions: [],
      prevSolutionEvents: [],
      explanationList: [],
      showSolution: false,
    })
  }

  render() {
    const {
      checkField,
      explanationList,
      solvedField,
      prevFieldSolutions,
      solutionEvents,
      showSolution,
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

            <Grid container>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={this.changeField(EASY_EXAMPLE)}
                >
                  EASY
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={this.changeField(CHALLENGING_4x4)}
                >
                  4X4
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={this.changeField(EASY_6x6)}
                >
                  6X6
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={this.changeField(EXPERT_9x17)}
                >
                  9x7
                </Button>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Field
                field={showSolution ? solvedField : checkField}
                showSolution={showSolution}
              />
              <br />
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.checkBoard}
                    disabled={showSolution}
                  >
                    Check
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      this.setState({ showSolution: true })
                    }}
                  >
                    Solution
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {showSolution && (
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="display1" gutterBottom>
                  Explanation List
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing="8">
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

              <Grid item xs={12} style={{ maxHeight: 400, overflow: 'auto' }}>
                <ExplanationList explanationList={explanationList} />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    )
  }
}

export default Game
