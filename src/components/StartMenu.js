import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'

import {
  EASY_4x4,
  CHALLENGING_4x4,
  EASY_6x6,
  EXPERT_9x17,
} from './../boardSetup'

const CustomLink = styled(Link)`
  text-decoration: none;
`

class StartMenu extends Component {
  render() {
    const { changeDifficulty } = this.props

    return (
      <Grid container direction="column" alignItems="center" spacing="40">
        <Grid item>
          <Typography variant="h4">Start Menu</Typography>
        </Grid>

        <Grid item>
          <Grid container>
            <Grid item>
              <Grid container spacing="16">
                <Grid item xs={12}>
                  <Typography variant="h5">4 X 4</Typography>
                </Grid>

                <Grid item>
                  <CustomLink
                    to="/game"
                    onClick={() => changeDifficulty(EASY_4x4)}
                  >
                    <Typography variant="subtitle1" color="primary">
                      Easy
                    </Typography>
                  </CustomLink>
                </Grid>
                <Grid item>
                  <CustomLink
                    to="/game"
                    onClick={() => changeDifficulty(CHALLENGING_4x4)}
                  >
                    <Typography variant="subtitle1" color="primary">
                      Challenging
                    </Typography>
                  </CustomLink>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container spacing="16">
                <Grid item xs={12}>
                  <Typography variant="h5">6 X 6</Typography>
                </Grid>
                <Grid item>
                  <CustomLink
                    to="/game"
                    onClick={() => changeDifficulty(EASY_6x6)}
                  >
                    <Typography variant="subtitle1" color="primary">
                      Easy
                    </Typography>
                  </CustomLink>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container spacing="16">
                <Grid item xs={12}>
                  <Typography variant="h5">9 x 7</Typography>
                </Grid>
                <Grid item>
                  <CustomLink
                    to="/game"
                    onClick={() => changeDifficulty(EXPERT_9x17)}
                  >
                    <Typography variant="subtitle1" color="primary">
                      Expert
                    </Typography>
                  </CustomLink>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default StartMenu
