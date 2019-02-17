import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import CellTypePicker from './CellTypePicker'

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
    board: Array(4).fill(Array(4).fill('empty')),
  }

  handleFieldChange = (row, col) => event => {
    this.setState({
      board: this.state.board.map((bRow, i) => {
        if (i === row) {
          return bRow.map((value, j) =>
            j === col ? event.target.value : value
          )
        } else {
          return bRow
        }
      }),
    })
  }

  render() {
    const { classes } = this.props
    console.log(this.state)
    return (
      <Fragment>
        <Link to="/">Back</Link>
        <Table className={classes.table} padding="dense">
          <TableBody>
            {Array(4)
              .fill('')
              .map((item, i) => {
                return (
                  <TableRow>
                    {Array(4)
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
      </Fragment>
    )
  }
}

export default withStyles(styles)(CustomBoard)
