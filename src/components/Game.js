import React, { Component } from 'react'

import Field from './Field'
import { mapToLists } from './../mapper'
import { EASY_EXAMPLE } from './../boardSetupNew'
import solve from './../solver'

class Game extends Component {
  state = {
    boardSetup: [],
    field: [],
    solutionList: []
  }

  componentDidMount() {
    this.setState({
      field: solve(mapToLists(EASY_EXAMPLE()))
    })
  }

  render() {
    const { field } = this.state
    return (
      <div>
        <Field field={field} />
      </div>
    )
  }
}

export default Game
