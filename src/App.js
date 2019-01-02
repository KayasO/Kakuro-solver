import React, { Component } from 'react'
import { grey } from '@material-ui/core/colors'
import { createGlobalStyle } from 'styled-components'
import 'typeface-roboto'

import { EASY_EXAMPLE } from './boardSetup'
import Game from './components/Game'
import EndDialog from './components/EndDialog'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${grey[100]};
  }
`

class App extends Component {
  state = {
    difficulty: EASY_EXAMPLE,
    gameWon: false,
  }

  openWonDialog = () => {
    this.setState({
      gameWon: true,
    })
  }

  changeDifficulty = difficulty => () =>
    this.setState({
      difficulty,
    })

  render() {
    const { difficulty, gameWon } = this.state

    return (
      <div className="App">
        <Game
          difficulty={difficulty}
          openWonDialog={this.openWonDialog}
          changeDifficulty={this.changeDifficulty}
        />
        <EndDialog open={gameWon} />
        <GlobalStyle />
      </div>
    )
  }
}

export default App
