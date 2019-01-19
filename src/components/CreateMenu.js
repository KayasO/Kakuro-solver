import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import styled from 'styled-components'
import _ from 'lodash'

import Cell from './SelectionCell'
import CustomField from './CustomField'
import { Entry } from '../entry'
import { WhiteCell } from '../whiteCell'

const SelectionCell = styled(Cell)`
  border: 2px solid grey;
`

class CreateMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      field: [[<SelectionCell x="0" y="0" callBack={this.callBack} />]],
      finishedField: [[null]],
    }
  }

  addRow = () => {
    this.setState({
      field: _.map(this.state.field, (row, i) => [
        ...row,
        <SelectionCell x={row.length} y={i} callBack={this.callBack} />,
      ]),
      finishedField: _.map(this.state.finishedField, row => [...row, null]),
    })
  }

  addColumn = () => {
    const rowLength = this.state.field[0].length
    const newColumn = []

    for (let i = 0; i < rowLength; i++) {
      newColumn.push(
        <SelectionCell
          x={i}
          y={this.state.field.length}
          callBack={this.callBack}
        />
      )
    }

    this.setState({
      field: [...this.state.field, newColumn],
      finishedField: [...this.state.finishedField, Array(rowLength).fill(null)],
    })
  }

  callBack = (x, y, type, entry) => {
    const { finishedField } = this.state

    if (type === 'ENTRY') {
      finishedField[x][y] = new Entry(entry.horizontal, entry.vertical)
    } else if (type === 'WHITE') {
      finishedField[x][y] = new WhiteCell()
    }

    this.setState({
      finishedField: this.state.finishedField,
    })
  }

  render() {
    const { field } = this.state
    console.log(this.state.finishedField)

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
        <Button color="primary" onClick={this.startGame}>
          START
        </Button>
      </Fragment>
    )
  }
}

export default CreateMenu
