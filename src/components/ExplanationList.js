import React from 'react'
import { List, ListItem, Typography, Divider } from '@material-ui/core'
import { lightGreen, grey } from '@material-ui/core/colors'
import { withNamespaces } from 'react-i18next'
import styled from 'styled-components'
import _ from 'lodash'

const ExplanationList = styled(List)`
  div:nth-child(2n + 1) {
    background-color: ${grey[100]};
  }
`

const LastItem = styled(ListItem)`
  background-color: ${lightGreen['A400']};
`

export default withNamespaces()(props => {
  const { explanationList, t } = props

  return (
    <ExplanationList>
      {_.reverse(
        _.map(explanationList, (explanation, i) =>
          i < explanationList.length - 1 ? (
            <div>
              <ListItem>
                {i + 1}.{' '}
                {t(`explanations.${explanation.type}`, { explanation })}
              </ListItem>
              <Divider />
            </div>
          ) : (
            <LastItem>
              <Typography variant="body1">
                {`${i + 1}. `}
                {t(`explanations.${explanation.type}`, { explanation })}
              </Typography>
            </LastItem>
          )
        )
      )}
    </ExplanationList>
  )
})
