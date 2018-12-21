import React from 'react'
import { List, ListItem, Typography } from '@material-ui/core'
import { withNamespaces } from 'react-i18next'
import styled from 'styled-components'
import _ from 'lodash'

const LastItem = styled(ListItem)`
  background-color: lime;
`

export default withNamespaces()(props => {
  const { explanationList, t } = props

  return (
    <List>
      {_.reverse(
        _.map(explanationList, (explanation, i) =>
          i < explanationList.length - 1 ? (
            <ListItem>
              {i + 1}. {t(`explanations.${explanation.type}`, { explanation })}
            </ListItem>
          ) : (
            <LastItem>
              <Typography variant="body1">
                {i + 1}.{' '}
                {t(`explanations.${explanation.type}`, { explanation })}
              </Typography>
            </LastItem>
          )
        )
      )}
    </List>
  )
})
