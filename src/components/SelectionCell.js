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
    openDialog: false,
  }

  selectType = () => {
    console.log('openDialog')
    this.setState({
      openDialog: true,
    })
  }

  handleClose = () =>
    this.setState({
      openDialog: false,
    })

  render() {
    const { openDialog } = this.state

    return (
      <Fragment>
        <Cell {...this.props} onClick={this.selectType} />
        <SelectionDialog open={openDialog} handleClose={this.handleClose} />
      </Fragment>
    )
  }
}

export default SelectionCell
