import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { grey } from '@material-ui/core/colors'
import { createGlobalStyle } from 'styled-components'
import 'typeface-roboto'

import { EASY_EXAMPLE } from './boardSetup'
import MainWindow from './components/MainWindow'
import EndDialog from './components/EndDialog'
import StartMenu from './components/StartMenu'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${grey[100]};
  }
`

class Game extends Component {
  state = {
    difficulty: EASY_EXAMPLE,
    gameWon: false,
  }

  openWonDialog = () => {
    this.setState({
      gameWon: true,
    })
  }

  changeDifficulty = difficulty =>
    this.setState({
      difficulty,
    })

  render() {
    const { difficulty, gameWon } = this.state

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
            path="/game"
            render={props => (
              <MainWindow
                {...props}
                difficulty={difficulty}
                openWonDialog={this.openWonDialog}
              />
            )}
          />
          <Route
            exact
            path="/end"
            render={props => <EndDialog {...props} open={gameWon} />}
          />
        </Switch>
      </Fragment>
    )
  }
}

export default Game
