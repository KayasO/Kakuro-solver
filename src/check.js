import _ from 'lodash'

import solutions from './solutions'
import { mapToLists } from './mapper'

function setupSolutionSets(entries) {
  entries.forEach(entry => {
    if (entry.sumH) {
      entry.solutionSetsH = solutions[entry.sumH][entry.cellsH.length]
    }
    if (entry.sumV) {
      entry.solutionSetsV = solutions[entry.sumV][entry.cellsV.length]
    }
  })
}

function crossSolutionSets(entries) {
  let mistake = true

  entries.forEach(entry => {
    if (entry.sumV) {
      const union = []
      entry.cellsV.forEach(cell => {
        union.push(cell.value)
      })
      mistake =
        _.findIndex(
          entry.solutionSetsV,
          set => _.difference(set, union).length === 0
        ) === -1

      if (mistake) {
        entry.cellsV.forEach(cell => {
          cell.isFalse = true
        })
      }
    }
    if (entry.sumH) {
      const union = []
      entry.cellsH.forEach(cell => {
        union.push(cell.value)
      })
      mistake =
        _.findIndex(
          entry.solutionSetsH,
          set => _.difference(set, union).length === 0
        ) === -1

      if (mistake) {
        entry.cellsH.forEach(cell => {
          cell.isFalse = true
        })
      }
    }
  })
}

function clearFalseCells(allWhiteCells) {
  allWhiteCells.forEach(cell => {
    cell.isFalse = false
  })
}

export default field => {
  const { entries, allWhiteCells } = mapToLists(field)

  return () => {
    clearFalseCells(allWhiteCells)
    setupSolutionSets(entries)
    crossSolutionSets(entries)

    return field
  }
}
