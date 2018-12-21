import React, { Component } from 'react'
import { grey } from '@material-ui/core/colors'
import { createGlobalStyle } from 'styled-components'
import 'typeface-roboto'

import Game from './components/Game'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${grey[100]};
  }
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
        <GlobalStyle />
      </div>
    )
  }
}

export default App
