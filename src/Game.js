import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { grey } from '@material-ui/core/colors'
import { createGlobalStyle } from 'styled-components'
import 'typeface-roboto'

import { EASY_EXAMPLE } from './boardSetup'
import MainWindow from './components/MainWindow'
import StartMenu from './components/StartMenu'
import CreateMenu from './components/CreateMenu'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${grey[100]};
  }
`

class Game extends Component {
  state = {
    difficulty: EASY_EXAMPLE,
  }

  changeDifficulty = difficulty =>
    this.setState({
      difficulty,
    })

  render() {
    const { difficulty } = this.state

    return (
      <Fragment>
        <GlobalStyle />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <StartMenu {...props} changeDifficulty={this.changeDifficulty} />
            )}
          />
          <Route
            exact
            path="/create"
            render={props => <CreateMenu {...props} />}
          />
          <Route
            exact
            path="/game"
            render={props => <MainWindow {...props} difficulty={difficulty} />}
          />
        </Switch>
      </Fragment>
    )
  }
}

export default Game
