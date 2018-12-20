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
    solutionEvents: [],
  }

  componentDidMount() {
    const boardSetup = EASY_EXAMPLE()
    this.setState(
      {
        field: mapToSimpleList(boardSetup),
        solutionEvents: solve(mapToLists(boardSetup)),
        boardSetup,
      },
      () => console.log(this.state.solutionEvents)
    )
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
    const { field } = this.state
    return (
      <div>
        <Field field={field} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log('Pressed Next')}
        >
          Next
        </Button>
      </div>
    )
  }
}

export default Game
