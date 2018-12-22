import React, { Component } from 'react'
import { TableCell, Input } from '@material-ui/core'
import { lightGreen, indigo } from '@material-ui/core/colors'
import styled from 'styled-components'

const Cell = styled(TableCell)`
  background-color: ${props => (props.solved ? lightGreen['A400'] : 'white')};
  color: ${indigo[500]} !important;

  padding: 0 !important;
  min-width: 60px !important;
  height: 60px !important;
`

const Number = styled(Input)`
  padding-left: 25px;
  text-align: center !important;
  font-size: 1.5em !important;
`

class WhiteCell extends Component {
  state = {
    value: '',
  }

  change = event => {
    this.setState({
      value: event.target.value[0],
    })
  }

  render() {
    const { classes, solution } = this.props
    const { value } = this.state

    return (
      <Cell className={classes.tableCell} solved={solution}>
        <Number
          type="text"
          value={solution || value}
          onChange={this.change}
          disableUnderline
        />
      </Cell>
    )
  }
}

export default WhiteCell
