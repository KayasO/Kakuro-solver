import React, { Component } from 'react'
import { grey } from '@material-ui/core/colors'
import { createGlobalStyle } from 'styled-components'
import 'typeface-roboto'

import Game from './components/Game'
import EndDialog from './components/EndDialog'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${grey[100]};
  }
`

class App extends Component {
  state = {
    gameWon: false,
  }

  openWonDialog = () => {
    this.setState({
      gameWon: true,
    })
  }

  render() {
    const { gameWon } = this.state

    return (
      <div className="App">
        <Game openWonDialog={this.openWonDialog} />
        <EndDialog open={gameWon} />
        <GlobalStyle />
      </div>
    )
  }
}

export default App
