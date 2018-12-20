import React from 'react'
import { List, ListItem } from '@material-ui/core'
import { withNamespaces } from 'react-i18next'
import _ from 'lodash'

export default withNamespaces()(props => {
  const { explanationList, t } = props

  return (
    <List>
      {explanationList &&
        _.map(explanationList, (explanation, i) => (
          <ListItem>
            {i + 1}. {t(`explanations.${explanation.description}`)}
          </ListItem>
        ))}
    </List>
  )
})
