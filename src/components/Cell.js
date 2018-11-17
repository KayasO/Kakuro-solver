import React, { Component } from 'react'
import { TableCell } from '@material-ui/core'

// TODO: Split Cell in two halves
export default ({ classes, children }) => {
  return (
    <TableCell className={classes.tableCell}>
      {children}
    </TableCell>
    )
}