import React, { Component, Fragment } from 'react'
import { withNamespaces } from 'react-i18next'
import { Button, Grid, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import HomeIcon from '@material-ui/icons/Home'
import styled from 'styled-components'
import _ from 'lodash'

import Field from './Field'
import Explanation from './Explanation'
import EndDialog from './EndDialog'
import { mapToLists, mapToSimpleList } from '../mapper'
import solve from '../solver'
import check from '../check'
import LanguagePicker from './LanguagePicker'

const FinishButton = styled(Button)`
  background-color: ${`${green[500]} !important`};
  color: white !important;
  margin-right: 25px !important;
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
    gameWon: false,
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
          this.openWonDialog()
        }
        this.setState({
          showSolution: boardCorrect,
        })
      }
    )
  }

  openWonDialog = () => {
    this.setState({
      gameWon: true,
    })
  }

  render() {
    const { t } = this.props
    const {
      checkField,
      explanationList,
      solvedField,
      prevFieldSolutions,
      solutionEvents,
      showSolution,
      gameWon,
    } = this.state

    return (
      <Fragment>
        <Grid container>
          <Grid item xs={6}>
            <Grid container spacing="16">
              <Grid item xs={6}>
                <Typography variant="h4" gutterBottom>
                  {t('general.kakuro')}
                </Typography>
              </Grid>

              <Grid container item xs={6} justify="flex-end">
                <FinishButton variant="contained" onClick={this.openWonDialog}>
                  <HomeIcon />
                  {t('buttons.menu')}
                </FinishButton>
              </Grid>

              <Grid item container justify="center">
                <Field
                  field={showSolution ? solvedField : checkField}
                  showSolution={showSolution}
                />
              </Grid>

              <Grid item container spacing={8} xs={12}>
                <Grid item container justify="flex-end" xs={6}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.checkBoard}
                    disabled={showSolution}
                  >
                    {t('buttons.check')}
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
                    {t('buttons.solution')}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {showSolution && (
            <Explanation
              explanationList={explanationList}
              prevFieldSolutions={prevFieldSolutions}
              solutionEvents={solutionEvents}
              openWonDialog={this.openWonDialog}
              solverNextStep={this.solverNextStep}
              solverPrevStep={this.solverPrevStep}
            />
          )}
        </Grid>
        <EndDialog
          {...this.props}
          open={gameWon}
          closeShowSolution={() => this.setState({ showSolution: false })}
        />

        <Grid container justify="center">
          <LanguagePicker />
        </Grid>
      </Fragment>
    )
  }
}

export default withNamespaces()(MainWindow)
