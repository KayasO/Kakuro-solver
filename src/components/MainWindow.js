import React, { Component } from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import styled from 'styled-components'
import _ from 'lodash'

import Field from './Field'
import ExplanationList from './ExplanationList'
import { mapToLists, mapToSimpleList } from '../mapper'
import solve from '../solver'
import check from '../check'

const FinishButton = styled(Button)`
  background-color: ${`${green[500]} !important`};
  color: white !important;
`

class MainWindow extends Component {
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
    const { difficulty } = this.props
    const boardSetup = difficulty()
    const checkSetup = difficulty()

    this.setState({
      checkField: mapToSimpleList(checkSetup),
      solvedField: mapToSimpleList(boardSetup),
      solutionEvents: solve(mapToLists(boardSetup)),
      boardSetup,
      checkSetup,
      check: check(checkSetup),
    })
  }

  shouldComponentUpdate(nextProps) {
    const { difficulty } = nextProps

    if (this.props.difficulty !== difficulty) {
      const boardSetup = difficulty()
      const checkSetup = difficulty()

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
    return true
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

  render() {
    const { openWonDialog } = this.props
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
          <Grid container spacing="16">
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Kakuro
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Field
                field={showSolution ? solvedField : checkField}
                showSolution={showSolution}
              />
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
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  Explanation List
                </Typography>
              </Grid>

              <Grid item>
                <Grid container>
                  <Grid item xs={6}>
                    <Grid container spacing={8}>
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

                      <Grid item justify="flex-end">
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

                  <Grid item xs={6}>
                    <Grid container justify="flex-end">
                      <Grid item>
                        <FinishButton
                          variant="contained"
                          onClick={openWonDialog}
                        >
                          Finish
                        </FinishButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item style={{ maxHeight: 350, overflow: 'auto' }}>
                <ExplanationList explanationList={explanationList} />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    )
  }
}

export default MainWindow
