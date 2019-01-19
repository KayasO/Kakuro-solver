import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import styled from 'styled-components'
import _ from 'lodash'

import Cell from './SelectionCell'
import CustomField from './CustomField'

const SelectionCell = styled(Cell)`
  border: 2px solid grey;
`

class CreateMenu extends Component {
  state = {
    field: [
      [<SelectionCell />, <SelectionCell />],
      [<SelectionCell />, <SelectionCell />],
    ],
  }

  render() {
    const { field } = this.state

    return (
      <Fragment>
        <Button variant="contained" color="secondary">
          Add Row
        </Button>
        <Button variant="contained" color="secondary">
          Add Column
        </Button>

        <CustomField field={field} />

        <Link to="/">Back</Link>
        <Link to="/game">Start</Link>
      </Fragment>
    )
  }
}

export default CreateMenu
