import React, { Component } from 'react'
// import Game from './components/Game'

import solve from './solver'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Game /> */}
        {solve()}
      </div>
    )
  }
}

export default App
