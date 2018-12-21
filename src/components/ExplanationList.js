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
      {_.map(_.reverse(explanationList), (explanation, i) =>
        i === 0 ? (
          <LastItem>
            <Typography variant="subheading">
              {explanationList.length - i}.
              {t(`explanations.${explanation.type}`, { explanation })}
            </Typography>
          </LastItem>
        ) : (
          <ListItem>
            {explanationList.length - i}.
            {t(`explanations.${explanation.type}`, { explanation })}
          </ListItem>
        )
      )}
    </List>
  )
})
