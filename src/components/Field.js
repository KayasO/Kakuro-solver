import React, { Component } from 'react'
import { Table, TableBody, TableRow } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import _ from 'lodash'

import Cell from './Cell'
import EntryCell from './EntryCell'
import { WhiteCell } from '../WhiteCell'
import { Entry } from '../Entry'

const styles = theme => ({
  table: {
    width: '250px',
    height: '250px',
    border: '5px solid',
  },
  tableCell: {
    border: '2px solid grey',
  }
})

// TODO: Probably doesn't need any Logic
class Field extends Component {
  render() {
    const { classes, field, rendering } = this.props

    console.log('Field: ', field)
    console.log(rendering)

    return (
      <Table className={classes.table} padding="dense">
        <TableBody>
          {
            _.map(field, (row, i) =>
              <TableRow key={i}>
                {
                  _.map(row, cell => {
                    if (cell instanceof Entry) {
                      return <EntryCell classes={classes} below={cell.sumV} right={cell.sumH} />
                    }
                    else if (cell instanceof WhiteCell) {
                      return <Cell classes={classes} value={cell.value} />
                    } else {
                      return <Cell classes={classes} />
                    }
                  })
                }
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    )
  }
}

export default withStyles(styles)(Field)
