import React, { Component } from 'react'
import { Table, TableBody, TableRow } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import _ from 'lodash'

import Cell from './WhiteCell'
import EntryCell from './EntryCell'
import EmptyCell from './EmptyCell'

const styles = theme => ({
  table: {
    width: '250px',
    height: '250px',
    border: '5px solid',
  },
  tableCell: {
    border: '2px solid grey',
  },
})

// TODO: Probably doesn't need any Logic
class Field extends Component {
  render() {
    const { classes, field, showSolution } = this.props

    return (
      <Table className={classes.table} padding="dense">
        <TableBody>
          {_.map(field, (row, i) => (
            <TableRow key={i}>
              {_.map(row, cell => {
                if (cell.value >= 0) {
                  return (
                    <Cell
                      classes={classes}
                      solution={cell}
                      showSolution={showSolution}
                    />
                  )
                } else if (cell.sumH || cell.sumV) {
                  return <EntryCell classes={classes} entry={cell} />
                } else {
                  return <EmptyCell classes={classes} />
                }
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}

export default withStyles(styles)(Field)
