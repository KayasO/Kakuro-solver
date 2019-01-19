import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import EmptyCell from './EmptyCell'
import EntryCell from './EntryCell'
import WhiteCell from './WhiteCell'

class CreateMenu extends Component {
  state = {
    difficulty: [],
  }

  render() {
    const { difficulty } = this.state

    return (
      <Fragment>
        <Link to="/">Back</Link>
        <Link to="/game" difficulty={difficulty}>
          Start
        </Link>
      </Fragment>
    )
  }
}

export default CreateMenu
