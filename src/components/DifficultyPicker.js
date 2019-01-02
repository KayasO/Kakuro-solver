import React, { Fragment, Component } from 'react'
import { Button, Menu, MenuItem } from '@material-ui/core'

import {
  EASY_EXAMPLE,
  CHALLENGING_4x4,
  EASY_6x6,
  EXPERT_9x17,
} from './../boardSetup'

class DifficultyPicker extends Component {
  state = {
    anchorEl: null,
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = fn => () => {
    const { changeDifficulty } = this.props
    this.setState({ anchorEl: null }, () => changeDifficulty(fn))
  }

  render() {
    const { anchorEl } = this.state

    return (
      <Fragment>
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          Select Difficulty
        </Button>
        <Menu
          id="select-difficulty"
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose(EASY_EXAMPLE)}>
            EASY_EXAMPLE
          </MenuItem>
          <MenuItem onClick={this.handleClose(CHALLENGING_4x4)}>
            CHALLENGING_4x4
          </MenuItem>
          <MenuItem onClick={this.handleClose(EASY_6x6)}>EASY_6x6</MenuItem>
          <MenuItem onClick={this.handleClose(EXPERT_9x17)}>
            EXPERT_9x17
          </MenuItem>
        </Menu>
      </Fragment>
    )
  }
}

export default DifficultyPicker
