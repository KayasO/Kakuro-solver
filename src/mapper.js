import _ from 'lodash'

import { WhiteCell } from './WhiteCell';
import { Entry } from './Entry';


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
