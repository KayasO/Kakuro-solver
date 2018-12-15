import React, { Component } from 'react'

import Game from './components/Game'
import { mapToLists } from './mapper'
import { EXPERT_9x17 } from './boardSetupNew'
import solve from './solver'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      field: EXPERT_9x17(),
      rendering: false,
    }
  }

  componentDidMount() {
    solve(mapToLists(this.state.field)) || this.setRendering()
  }

  setRendering = () => {
    this.setState({
      rendering: !this.state.rendering
    })
  }

  render() {
    const { field } = this.state

    return (
      <div className="App">
        <Game field={field} rendering={this.state.rendering}/>
      </div>
    )
  }
}

export default App
