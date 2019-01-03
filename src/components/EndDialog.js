import React from 'react'
import { Button, Dialog, DialogTitle } from '@material-ui/core'

export default props => {
  return (
    <Dialog {...props}>
      <DialogTitle>Game finished</DialogTitle>
      <Button color="secondary" onClick={() => props.history.push('/')}>
        Restart
      </Button>
    </Dialog>
  )
}
