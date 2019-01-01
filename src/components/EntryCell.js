import React from 'react'
import { TableCell } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import styled from 'styled-components'

import img from '../resources/line_45_007_black.png'

const EntryCell = styled(TableCell)`
  background-color: ${grey[400]};
  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;

  text-align: center !important;
  font-size: 1em !important;
  position: relative;

  padding: 0 !important;
  min-width: 60px !important;
  height: 60px !important;
`

const BottomLeft = styled.span`
  position: absolute;
  bottom: 5px;
  left: 5px;
`

const TopRight = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
`

export default ({ classes, entry }) => {
  return (
    <EntryCell className={classes.tableCell}>
      <BottomLeft>{entry.sumV}</BottomLeft>
      <TopRight>{entry.sumH}</TopRight>
    </EntryCell>
  )
}
