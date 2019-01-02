import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Game from './Game'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Game />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
