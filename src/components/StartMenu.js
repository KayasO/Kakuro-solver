import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withNamespaces } from 'react-i18next'
import { Grid, Paper, Typography, withStyles, Divider } from '@material-ui/core'
import styled from 'styled-components'

import LanguagePicker from './LanguagePicker'
import {
  EASY_4x4,
  CHALLENGING_4x4,
  EXPERT_4x4,
  EASY_6x6,
  EXPERT_9x17,
} from './../boardSetup'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  body: {
    paddingTop: theme.spacing.unit,
  },
})

const CustomLink = styled(Link)`
  text-decoration: none;
`

class StartMenu extends Component {
  render() {
    const { changeDifficulty, classes, t } = this.props

    return (
      <Grid container direction="column" alignItems="center" spacing="40">
        <Grid item>
          <Typography variant="h4">{t('general.startMenu')}</Typography>
        </Grid>

        <Grid item>
          <Grid container spacing={16}>
            <Grid item>
              <Paper className={classes.root}>
                <Typography variant="h5">4 X 4</Typography>
                <Divider />
                <Grid
                  container
                  className={classes.body}
                  direction="column"
                  spacing={8}
                >
                  <Grid item>
                    <CustomLink
                      to="/game"
                      onClick={() => changeDifficulty(EASY_4x4)}
                    >
                      <Typography variant="subtitle1" color="primary">
                        {t('difficulties.easy')}
                      </Typography>
                    </CustomLink>
                  </Grid>
                  <Grid item>
                    <CustomLink
                      to="/game"
                      onClick={() => changeDifficulty(CHALLENGING_4x4)}
                    >
                      <Typography variant="subtitle1" color="primary">
                        {t('difficulties.challenging')}
                      </Typography>
                    </CustomLink>
                  </Grid>
                  <Grid item>
                    <CustomLink
                      to="/game"
                      onClick={() => changeDifficulty(EXPERT_4x4)}
                    >
                      <Typography variant="subtitle1" color="primary">
                        {t('difficulties.expert')}
                      </Typography>
                    </CustomLink>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item>
              <Paper className={classes.root}>
                <Typography variant="h5">6 X 6</Typography>
                <Divider />
                <Grid
                  container
                  className={classes.body}
                  direction="column"
                  spacing={8}
                >
                  <Grid item>
                    <CustomLink
                      to="/game"
                      onClick={() => changeDifficulty(EASY_6x6)}
                    >
                      <Typography variant="subtitle1" color="primary">
                        {t('difficulties.easy')}
                      </Typography>
                    </CustomLink>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item>
              <Paper className={classes.root}>
                <Typography variant="h5">9 x 7</Typography>
                <Divider />
                <Grid
                  container
                  className={classes.body}
                  direction="column"
                  spacing={8}
                >
                  <Grid item>
                    <CustomLink
                      to="/game"
                      onClick={() => changeDifficulty(EXPERT_9x17)}
                    >
                      <Typography variant="subtitle1" color="primary">
                        {t('difficulties.expert')}
                      </Typography>
                    </CustomLink>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <LanguagePicker />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(withNamespaces()(StartMenu))
