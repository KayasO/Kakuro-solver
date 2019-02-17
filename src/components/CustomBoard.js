import React, { Component } from 'react'
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from '@material-ui/core'
import { withNamespaces } from 'react-i18next'
import { withStyles } from '@material-ui/core/styles'
import CellTypePicker from './CellTypePicker'

import { mapToBoardArray } from '../mapper'

const styles = theme => ({
  table: {
    width: '250px',
    height: '250px',
    marginTop: '25px',
    marginBottom: '25px',
    border: '5px solid',
  },
  tableCell: {
    border: '2px solid black',
  },
})

class CustomBoard extends Component {
  state = {
    board: Array(5).fill(
      Array(5).fill({ type: 'empty', horizontal: '0', vertical: '0' })
    ),
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
            } else {
              return value
            }
          })
        } else {
          return bRow
        }
      }),
    })
  }

  start = () => {
    const board = mapToBoardArray(this.state.board)
    this.props.changeDifficulty(() => board)
    this.props.history.push('/game')
  }

  render() {
    const { classes, t } = this.props

    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4">{t('general.custom')}</Typography>
        </Grid>

        <Grid item>
          <Table className={classes.table} padding="dense">
            <TableBody>
              {Array(5)
                .fill('')
                .map((item, i) => {
                  return (
                    <TableRow>
                      {Array(5)
                        .fill('')
                        .map((item, j) => {
                          return (
                            <TableCell className={classes.tableCell}>
                              <CellTypePicker
                                handleFieldChange={this.handleFieldChange(i, j)}
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

        <Grid item container xs={6} justify="center" spacing={16}>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => this.props.history.push('/')}
            >
              {t('buttons.back')}
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={this.start}>
              {t('buttons.start')}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(withNamespaces()(CustomBoard))
