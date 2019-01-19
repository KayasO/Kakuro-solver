import React, { Component, Fragment } from 'react'
import { TableCell } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import styled from 'styled-components'
import SelectionDialog from './SelectionDialog'

const Cell = styled(TableCell)`
  background-color: ${grey[200]};
  background-size: contain;
  background-repeat: no-repeat;
`
class SelectionCell extends Component {
  state = {
    type: '',
    entry: {
      horizontal: '',
      vertical: '',
    },
    open: false,
  }

  openDialog = () => {
    this.setState({
      open: true,
    })
  }

  handleClose = (type, entry) =>
    this.setState({
      open: false,
      type,
      entry: entry || {},
    })

  render() {
    const { open } = this.state

    return (
      <Fragment>
        <Cell {...this.props} onClick={this.openDialog} />
        <SelectionDialog open={open} handleClose={this.handleClose} />
      </Fragment>
    )
  }
}

export default SelectionCell
