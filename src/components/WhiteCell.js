import React, { Component } from 'react'
import { TableCell, Input } from '@material-ui/core'
import { lightGreen, indigo, red } from '@material-ui/core/colors'
import styled from 'styled-components'

const Cell = styled(TableCell)`
  background-color: ${props => {
    if (props.showSolution) {
      if (props.lastSolved) {
        return lightGreen['A400']
      } else if (props.solved) {
        return lightGreen['A200']
      }
    } else if (props.isFalse) {
      return red[500]
    } else {
      return 'white'
    }
  }};
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
    const { cell } = this.props.solution
    cell.value = +event.target.value[0]
    this.setState({
      value: event.target.value[0],
    })
  }

  render() {
    const { classes, solution, showSolution } = this.props
    const { value } = this.state

    return (
      <Cell
        className={classes.tableCell}
        showSolution={showSolution}
        lastSolved={solution.lastSolved}
        solved={solution.value || value}
        isFalse={solution.isFalse}
      >
        <Number
          type="text"
          value={(showSolution && solution.value) || value}
          onChange={this.change}
          disableUnderline
          disabled={showSolution}
        />
      </Cell>
    )
  }
}

export default WhiteCell
