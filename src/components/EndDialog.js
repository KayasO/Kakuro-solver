import React from 'react'
import { Button, Dialog, DialogTitle } from '@material-ui/core'

export default props => {
  const { open, closeShowSolution } = props
  return (
    <Dialog open={open}>
      <DialogTitle>Game finished</DialogTitle>
      <Button
        color="secondary"
        onClick={() => {
          props.history.push('/')
          closeShowSolution()
        }}
      >
        Restart
      </Button>
    </Dialog>
  )
}
