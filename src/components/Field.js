import React, { Component } from 'react'
import { Table, TableBody, TableRow } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Cell from './Cell'

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
    const { classes } = this.props
    return (
      <Table className={classes.table} padding="dense">
        <TableBody>
          <TableRow key="1">
            <Cell classes={classes}>X</Cell>
            <Cell classes={classes}>X</Cell>
            <Cell classes={classes}>X</Cell>
            <Cell classes={classes}>X</Cell>
            <Cell classes={classes}>X</Cell>
          </TableRow>
          <TableRow key="2">
            <Cell classes={classes}>X</Cell>
            <Cell classes={classes}>X</Cell>
            <Cell classes={classes}>X</Cell>
            <Cell classes={classes}>X</Cell>
            <Cell classes={classes}>X</Cell>
          </TableRow>
          <TableRow key="3">
            <Cell classes={classes}>X</Cell>
            <Cell classes={classes}>X</Cell>
            <Cell classes={classes}>X</Cell>
            <Cell classes={classes}>X</Cell>
            <Cell classes={classes}>X</Cell>
          </TableRow>
          <TableRow key="4">
           <Cell classes={classes}>X</Cell>
            <Cell classes={classes}>X</Cell>
            <Cell classes={classes}>X</Cell>
            <Cell classes={classes}>X</Cell>
            <Cell classes={classes}>X</Cell>
          </TableRow>
          <TableRow key="5">
            <Cell classes={classes}>X</Cell>
            <Cell classes={classes}>X</Cell>
            <Cell classes={classes}>X</Cell>
            <Cell classes={classes}>X</Cell>
            <Cell classes={classes}>X</Cell>
          </TableRow>
        </TableBody>
      </Table>
    )
  }
}

export default withStyles(styles)(Field)
