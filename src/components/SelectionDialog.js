import React from 'react'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
} from '@material-ui/core'

import imgEntryCell from '../static/images/EntryCell.png'
import imgEmptyCell from '../static/images/EmptyCell.png'
import imgWhiteCell from '../static/images/WhiteCell.png'

export default props => {
  const { open, handleClose } = props

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Select Cell Type</DialogTitle>
      <DialogContent>
        <Grid container spacing={8}>
          <Grid item>
            <Typography variant="subtitle1" gutterBottom>
              Empty
            </Typography>
            <Button onClick={handleClose}>
              <img src={imgEmptyCell} alt="" />
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" gutterBottom>
              Entry
            </Typography>
            <img src={imgEntryCell} alt="" />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" gutterBottom>
              White
            </Typography>
            <img src={imgWhiteCell} alt="" />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}
