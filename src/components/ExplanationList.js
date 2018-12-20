import React from 'react'
import { List, ListItem } from '@material-ui/core'
import _ from 'lodash'

export default props => {
  const { explanationList } = props

  return (
    <List>
      {explanationList &&
        _.map(explanationList, (explanation, i) => {
          return <ListItem>{`${i + 1}. ${explanation.description}`}</ListItem>
        })}
    </List>
  )
}
