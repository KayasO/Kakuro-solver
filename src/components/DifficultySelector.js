import React, { Fragment, Component } from 'react'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  withStyles,
} from '@material-ui/core'

import {
  EASY_EXAMPLE,
  CHALLENGING_4x4,
  EASY_6x6,
  EXPERT_9x17,
} from '../boardSetup'

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
})

class DifficultySelector extends Component {
  state = {
    difficulty: '',
  }

  handleChange = event => {
    this.setState({
      difficulty: event.target.value,
    })
  }

  render() {
    const { classes } = this.props

    return (
      <Fragment>
        <FormControl className={classes.formControl}>
          <InputLabel>Difficulty</InputLabel>
          <Select value={this.state.difficulty} onChange={this.handleChange}>
            <MenuItem value={EASY_EXAMPLE}>EASY_EXAMPLE</MenuItem>
            <MenuItem value={CHALLENGING_4x4}>CHALLENGING_4x4</MenuItem>
            <MenuItem value={EASY_6x6}>EASY_6x6</MenuItem>
            <MenuItem value={EXPERT_9x17}>EXPERT_9x17</MenuItem>
          </Select>
        </FormControl>
      </Fragment>
    )
  }
}

export default withStyles(styles)(DifficultySelector)
