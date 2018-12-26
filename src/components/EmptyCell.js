import React from 'react'
import { TableCell } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import styled from 'styled-components'

const EmptyCell = styled(TableCell)`
  background-color: ${grey[400]};
  background-size: contain;
  background-repeat: no-repeat;
`

export default ({ classes }) => {
  return <EmptyCell className={classes.tableCell} />
}
