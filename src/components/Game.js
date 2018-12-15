import React, { Component } from 'react'
import Field from './Field'

class Game extends Component {
  render() {
    const { field, rendering } = this.props
    return (
      <div>
        <Field field={field} rendering={rendering}/>
      </div>
    )
  }
}

export default Game
