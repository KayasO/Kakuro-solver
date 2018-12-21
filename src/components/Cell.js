import React from 'react'
import { TableCell } from '@material-ui/core'
import { lightGreen, indigo } from '@material-ui/core/colors'
import styled from 'styled-components'

const WhiteCell = styled(TableCell)`
  background-color: ${props => (props.children ? lightGreen['A400'] : 'white')};
  color: ${indigo[500]} !important;
  text-align: center !important;
  font-size: 1.5em !important;

  padding: 0 !important;
  min-width: 60px !important;
  height: 60px !important;
`

export default ({ classes, value }) => {
  return <WhiteCell className={classes.tableCell}>{value || ''}</WhiteCell>
}
