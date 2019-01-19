import React, { Component } from 'react'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core'

import imgEntryCell from '../static/images/EntryCell.png'
import imgEmptyCell from '../static/images/EmptyCell.png'
import imgWhiteCell from '../static/images/WhiteCell.png'

class SelectionDialog extends Component {
  state = {
    horizontal: '',
    vertical: '',
  }

  handleChange = name => event => {
    const { value } = event.target
    if (value > 0 && value < 46) {
      this.setState({
        [name]: value,
      })
    }
  }

  createEntry = () => {
    const { handleClose } = this.props
    const { horizontal, vertical } = this.state
    const error = horizontal === '' || vertical === ''

    if (!error) {
      handleClose('ENTRY', { horizontal, vertical })
    }
  }

  render() {
    const { open, handleClose } = this.props
    const { horizontal, vertical } = this.state

    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Select Cell Type</DialogTitle>
        <DialogContent>
          <Grid container spacing={8} justify="center">
            <Grid item xs={3}>
              <Typography variant="subtitle1" gutterBottom>
                Empty
              </Typography>
              <Button onClick={() => handleClose('EMPTY')}>
                <img src={imgEmptyCell} alt="" />
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1" gutterBottom>
                Entry
              </Typography>
              <Button onClick={this.createEntry}>
                <img src={imgEntryCell} alt="" />
              </Button>

              <TextField
                id="horizontal"
                label="Horizontal"
                value={horizontal}
                onChange={this.handleChange('horizontal')}
                variant="outlined"
              />
              <TextField
                id="vertical"
                label="Vertical"
                value={vertical}
                type="number"
                onChange={this.handleChange('vertical')}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1" gutterBottom>
                White
              </Typography>
              <Button onClick={() => handleClose('WHITE')}>
                <img src={imgWhiteCell} alt="" />
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    )
  }
}

export default SelectionDialog
