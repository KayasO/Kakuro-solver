import React, { Component, Fragment } from 'react'
import {
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({})

class CellTypePicker extends Component {
  state = {
    value: '',
    horizontal: '0',
    vertical: '0',
  }

  handleChange = event => {
    this.setState(
      { value: event.target.value },
      this.props.handleFieldChange(event)
    )
  }

  handleEntryChange = name => event => {
    let value = event.target.value
    if (value < 0) {
      value = 1
    } else if (value > 45) {
      value = 45
    }
    this.setState(
      {
        [name]: value,
      },
      this.props.handleFieldChange(event, name)
    )
  }

  render() {
    const { value } = this.state

    return (
      <Fragment>
        <FormControl>
          <InputLabel htmlFor="type-simple">Type</InputLabel>
          <Select
            value={value}
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

        {value === 'entry' && (
          <Fragment>
            <TextField
              id="horizontal"
              label="Horizontal"
              value={this.state.horizontal}
              onChange={this.handleEntryChange('horizontal')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="vertical"
              label="Vertical"
              value={this.state.vertical}
              onChange={this.handleEntryChange('vertical')}
              margin="normal"
              variant="outlined"
            />
          </Fragment>
        )}
      </Fragment>
    )
  }
}

export default withStyles(styles)(CellTypePicker)
