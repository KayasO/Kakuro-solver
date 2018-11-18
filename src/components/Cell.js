import React, { Component } from 'react'
import { TableCell } from '@material-ui/core'

// TODO: Split Cell in two halves
export default ({ classes, below, right }) => {
  return (
      <TableCell className={classes.tableCell}>
        {below}
        {right}
      </TableCell>
    )
}