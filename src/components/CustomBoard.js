import React, { Component } from 'react'
import { withNamespaces } from 'react-i18next'
import {
  Button,
  InputLabel,
  Grid,
  FormControl,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home'
import CellTypePicker from './CellTypePicker'

import { mapToLists, mapToBoardArray } from '../mapper'
import solve from '../solver'

const styles = theme => ({
  table: {
    width: 250,
    height: 250,
    marginTop: 25,
    marginBottom: 25,
    border: '5px solid',
  },
  tableCell: {
    border: '2px solid black',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 80,
  },
  home: {
    backgroundColor: `${green[500]}`,
    color: 'white',
  },
  error: {
    color: 'red',
  },
})

class CustomBoard extends Component {
  state = {
    error: false,
    board: null,
    size: '',
  }

  setupBoard = event => {
    const size = event.target.value
    this.setState({
      board: Array(size).fill(
        Array(size).fill({ type: 'empty', horizontal: '0', vertical: '0' })
      ),
      size,
    })
  }

  handleFieldChange = (row, col) => (event, name) => {
    this.setState({
      board: this.state.board.map((bRow, i) => {
        if (i === row) {
          return bRow.map((value, j) => {
            if (j === col) {
              if (event.target.name === 'type') {
                return {
                  type: event.target.value,
                  horizontal: value.horizontal,
                  vertical: value.vertical,
                }
              } else if (name === 'horizontal') {
                return {
                  type: value.type,
                  horizontal: event.target.value,
                  vertical: value.vertical,
                }
              } else if (name === 'vertical') {
                return {
                  type: value.type,
                  horizontal: value.horizontal,
                  vertical: event.target.value,
                }
              }
            }
            return value
          })
        }
        return bRow
      }),
    })
  }

  start = () => {
    try {
      solve(mapToLists(mapToBoardArray(this.state.board)))
      this.props.changeDifficulty(() => mapToBoardArray(this.state.board))
      this.props.history.push('/game')
    } catch (e) {
      this.setState({
        error: true,
      })
    }
  }

  render() {
    const { classes, t } = this.props
    const { error, board, size } = this.state

    return (
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h4">{t('general.custom')}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Button
            className={classes.home}
            variant="contained"
            onClick={() => this.props.history.push('/')}
          >
            <HomeIcon />
            {t('buttons.menu')}
          </Button>
        </Grid>

        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="size-simple">{t('general.size')}</InputLabel>
            <Select
              value={size}
              onChange={this.setupBoard}
              inputProps={{
                name: 'size',
                id: 'size-simple',
              }}
            >
              <MenuItem value={3}>3x3</MenuItem>
              <MenuItem value={4}>4x4</MenuItem>
              <MenuItem value={5}>5x5</MenuItem>
              <MenuItem value={6}>6x6</MenuItem>
              <MenuItem value={7}>7x7</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {board && (
          <Grid item container>
            {error && (
              <Grid item>
                <Typography className={classes.error} variant="h6">
                  {t('general.error')}
                </Typography>
              </Grid>
            )}

            <Grid item xs={12}>
              <Table className={classes.table} padding="dense">
                <TableBody>
                  {Array(size)
                    .fill('')
                    .map((item, i) => {
                      return (
                        <TableRow>
                          {Array(size)
                            .fill('')
                            .map((item, j) => {
                              return (
                                <TableCell className={classes.tableCell}>
                                  <CellTypePicker
                                    handleFieldChange={this.handleFieldChange(
                                      i,
                                      j
                                    )}
                                  />
                                </TableCell>
                              )
                            })}
                        </TableRow>
                      )
                    })}
                </TableBody>
              </Table>
            </Grid>

            <Grid item container xs={6} justify="flex-end">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.start}
                >
                  {t('buttons.start')}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    )
  }
}

export default withStyles(styles)(withNamespaces()(CustomBoard))
