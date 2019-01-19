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
    field: [[<SelectionCell />]],
  }

  addRow = () => {
    this.setState({
      field: _.map(this.state.field, row => [...row, <SelectionCell />]),
    })
  }

  addColumn = () => {
    const rowLength = this.state.field[0].length
    const newColumn = []

    for (let i = 0; i < rowLength; i++) {
      newColumn.push(<SelectionCell />)
    }

    this.setState({
      field: [...this.state.field, newColumn],
    })
  }

  render() {
    const { field } = this.state

    return (
      <Fragment>
        <Button variant="contained" color="secondary" onClick={this.addRow}>
          Add Row
        </Button>
        <Button variant="contained" color="secondary" onClick={this.addColumn}>
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
