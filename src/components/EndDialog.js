import React from 'react'
import { Dialog, DialogTitle } from '@material-ui/core'

export default props => {
  return (
    <Dialog {...props}>
      <DialogTitle>Game finished</DialogTitle>
    </Dialog>
  )
}
