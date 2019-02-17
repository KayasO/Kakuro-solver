import React, { Component } from 'react'
import { InputLabel, FormControl, MenuItem, Select } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({})

class CellTypePicker extends Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState(
      { value: event.target.value },
      this.props.handleFieldChange(event)
    )
  }

  render() {
    return (
      <FormControl>
        <InputLabel htmlFor="type-simple">Type</InputLabel>
        <Select
          value={this.state.value}
          onChange={this.handleChange}
          inputProps={{
            name: 'type',
            id: 'type-simple',
          }}
        >
          <MenuItem value="empty">Empty</MenuItem>
          <MenuItem value="entry">Entry</MenuItem>
          <MenuItem value="white">White</MenuItem>
        </Select>
      </FormControl>
    )
  }
}

export default withStyles(styles)(CellTypePicker)
