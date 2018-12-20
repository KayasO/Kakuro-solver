import React from 'react'
import { TableCell } from '@material-ui/core'
import styled from 'styled-components'

const WhiteCell = styled(TableCell)`
  background-color: ${props => (props.children ? 'lime' : 'red')};
`

// TODO: Split Cell in two halves
export default ({ classes, value }) => {
  return <WhiteCell className={classes.tableCell}>{value}</WhiteCell>
}
