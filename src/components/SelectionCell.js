import React from 'react'
import { TableCell } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import styled from 'styled-components'

const SelectionCell = styled(TableCell)`
  background-color: ${grey[200]};
  background-size: contain;
  background-repeat: no-repeat;
`

export default props => {
  return <SelectionCell {...props} />
}
