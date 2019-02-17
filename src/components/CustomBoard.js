import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import CellTypePicker from './CellTypePicker'

import { mapToBoardArray } from '../mapper'

const styles = theme => ({
  table: {
    width: '250px',
    height: '250px',
    border: '5px solid',
  },
  tableCell: {
    border: '2px solid black',
  },
})

class CustomBoard extends Component {
  state = {
    board: Array(5).fill(
      Array(5).fill({ type: 'empty', horizontal: '0', vertical: '0' })
    ),
  }

  handleFieldChange = (row, col) => (event, name) => {
    this.setState({
      board: this.state.board.map((bRow, i) => {
        if (i === row) {
          return bRow.map((value, j) => {
            if (j === col) {
              if (event.target.name === 'type') {
                return {
                  type: event.target.value,
                  horizontal: value.horizontal,
                  vertical: value.vertical,
                }
              } else if (name === 'horizontal') {
                return {
                  type: value.type,
                  horizontal: event.target.value,
                  vertical: value.vertical,
                }
              } else if (name === 'vertical') {
                return {
                  type: value.type,
                  horizontal: value.horizontal,
                  vertical: event.target.value,
                }
              }
            } else {
              return value
            }
          })
        } else {
          return bRow
        }
      }),
    })
  }

  start = () => {
    const board = mapToBoardArray(this.state.board)
    console.log(board)
    this.props.changeDifficulty(() => board)
    this.props.history.push('/game')
  }

  render() {
    const { classes } = this.props

    return (
      <Fragment>
        <Link to="/">Back</Link>
        <Table className={classes.table} padding="dense">
          <TableBody>
            {Array(5)
              .fill('')
              .map((item, i) => {
                return (
                  <TableRow>
                    {Array(5)
                      .fill('')
                      .map((item, j) => {
                        return (
                          <TableCell className={classes.tableCell}>
                            <CellTypePicker
                              handleFieldChange={this.handleFieldChange(i, j)}
                            />
                          </TableCell>
                        )
                      })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
        <Button variant="contained" color="secondary" onClick={this.start}>
          Start
        </Button>
      </Fragment>
    )
  }
}

export default withStyles(styles)(CustomBoard)
