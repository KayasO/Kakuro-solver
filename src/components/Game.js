import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import _ from 'lodash'


import Field from './Field'
import { mapToLists, mapToSimpleList } from './../mapper'
import { EASY_EXAMPLE } from './../boardSetupNew'
import solve from './../solver'

class Game extends Component {
  state = {
    boardSetup: [],
    field: [],
    solutionList: []
  }

  componentDidMount() {
    const boardSetup = EASY_EXAMPLE()
    this.setState({
      field: mapToSimpleList(boardSetup),
      solutionList: solve(mapToLists(boardSetup)),
      boardSetup
    })
  }

  solverNextStep = () => {
    const { boardSetup, field, solutionList } = this.state

    boardSetup.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (solutionList[0] === cell) {
          field[i][j].value = solutionList[0].value
        }
      })
    })

    this.setState({
      solutionList: _.drop(solutionList)
    })
  }

  render() {
    const { field } = this.state
    return (
      <div>
        <Field field={field} />
        <Button variant="contained" color="primary" onClick={this.solverNextStep}>
          Next
        </Button>
      </div>
    )
  }
}

export default Game
