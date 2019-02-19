import React from 'react'
import { withNamespaces } from 'react-i18next'
import { Button, Dialog, DialogTitle } from '@material-ui/core'

export default withNamespaces()(props => {
  const { open, closeShowSolution, t } = props
  return (
    <Dialog open={open}>
      <DialogTitle>{t('general.gameFinished')}</DialogTitle>
      <Button
        color="secondary"
        onClick={() => {
          props.history.push('/')
          closeShowSolution()
        }}
      >
        {t('buttons.ok')}
      </Button>
    </Dialog>
  )
})
