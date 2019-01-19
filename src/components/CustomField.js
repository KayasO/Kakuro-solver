import React, { Component } from 'react'
import { Table, TableBody, TableRow } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import _ from 'lodash'

const styles = theme => ({
  table: {
    margin: '25px',
    width: '250px',
    height: '250px',
    border: '5px solid',
  },
})

class CustomField extends Component {
  render() {
    const { classes, field } = this.props
    console.log(field)

    return (
      <Table className={classes.table} padding="dense">
        <TableBody>
          {_.map(field, (row, i) => (
            <TableRow key={i}>{row}</TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}

export default withStyles(styles)(CustomField)
