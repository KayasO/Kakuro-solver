import _ from 'lodash'

import { WhiteCell } from './whiteCell';
import { Entry } from './entry';


export function mapToLists(input) {
  const allWhiteCells = _.flatten(input).filter(cell => cell instanceof WhiteCell)
  let entries = []

  for (let x = 0; x < input.length; x++) {
    for (let y = 0; y < input[0].length; y++) {
      const entry = input[x][y]
      if (entry instanceof Entry) {
        entries.push(entry)

        if (entry.sumH) {
          for (let i = y+1; i < input.length; i++) {
            const cell = input[x][i]
            if (cell instanceof WhiteCell) {
              entry.cellsH.push(cell)
              cell.entryH = entry
            } else {
              // found different entry
              break
            }
          }
        }
        if (entry.sumV) {
          for (let i = x+1; i < input.length; i++) {
            const cell = input[i][y]
            if (cell instanceof WhiteCell) {
              entry.cellsV.push(cell)
              cell.entryV = entry
            } else {
              // found different entry
              break
            }
          }
        }
      }
    }
  }

  return {
    entries,
    allWhiteCells
  }
}

export function mapToSimpleList(input) {
  const list = []
  for (let i = 0; i < input.length; i++)
    list.push([])

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      const cell = input[i][j]
      if (cell instanceof Entry) {
        list[i].push({sumH: cell.sumH, sumV: cell.sumV})
      }
      else if (cell instanceof WhiteCell) {
        list[i].push({value: cell.value})
      } else {
        list[i].push({})
      }
    }
  }
  return list
}