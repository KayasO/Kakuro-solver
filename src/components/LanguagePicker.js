import React, { Component, Fragment } from 'react'
import { withNamespaces } from 'react-i18next'
import { Button } from '@material-ui/core'

class LanguagePicker extends Component {
  state = {
    lng: this.props.i18n.language,
  }

  loadLanguage = lng => () => {
    const { i18n } = this.props
    i18n.changeLanguage(lng)
    this.setState({ lng })
  }

  render() {
    const { lng } = this.state

    return (
      <Fragment>
        <Button
          onClick={this.loadLanguage('en-US')}
          color={lng === 'en-US' && 'secondary'}
        >
          English
        </Button>
        <Button
          onClick={this.loadLanguage('de-DE')}
          color={lng === 'de-DE' && 'secondary'}
        >
          Deutsch
        </Button>
      </Fragment>
    )
  }
}

export default withNamespaces()(LanguagePicker)
