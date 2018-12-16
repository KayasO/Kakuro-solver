import _ from 'lodash'

import solutions from './solutions'

let entries = []
let allWhiteCells = []

function setupSolutionSets() {
  entries.forEach(entry => {
    if (entry.sumH) {
      entry.solutionSetsH = solutions[entry.sumH][entry.cellsH.length]
      calcPossibleSolutions(entry.cellsH, entry.solutionSetsH)
    }
    if (entry.sumV) {
      entry.solutionSetsV = solutions[entry.sumV][entry.cellsV.length]
      calcPossibleSolutions(entry.cellsV, entry.solutionSetsV)
    }
  })
}

function calcPossibleSolutions(wCells, solutionSets) {
  wCells.forEach(wCell => {
    wCell.notes = _.intersection(wCell.notes, _.flatten(solutionSets))
  })
}

function updateNotesWithSets() {
  entries.forEach(entry => {
    if (entry.sumH) {
      entry.cellsH.forEach(wCell => {
        let unionSets = []
        entry.solutionSetsH.forEach(set => {
          unionSets = _.union(unionSets, set)
        })
        wCell.notes = _.intersection(wCell.notes, unionSets)
      })
    }
    if (entry.sumV) {
      entry.cellsV.forEach(wCell => {
        let unionSets = []
        entry.solutionSetsV.forEach(set => {
          unionSets = _.union(unionSets, set)
        })
        wCell.notes = _.intersection(wCell.notes, unionSets)
      })
    }
  })
}

function updateEntries() {
  entries.forEach(entry => {
    if (entry.sumH) {
      entry.cellsH.forEach(cell => {
        entry.solutionSetsH =
          _.filter(entry.solutionSetsH, set =>
            _.intersection(set, cell.notes).length > 0)
      })
    }
    if (entry.sumV) {
      entry.cellsV.forEach(cell => {
        entry.solutionSetsV =
          _.filter(entry.solutionSetsV, set => 
            _.intersection(set, cell.notes).length > 0)
      })
    }
  })
}

function calcUnionOfWhiteCellsInEntry() {
  entries.forEach(entry => {
    if (entry.sumH) {
      let union = []
      entry.cellsH.forEach(cell => {
        union = _.union(union, cell.notes)
      })

      entry.solutionSetsH =
        _.filter(entry.solutionSetsH, set => _.difference(set, union).length === 0)
    }
    if (entry.sumV) {
      let union = []
      entry.cellsV.forEach(cell => {
        union = _.union(union, cell.notes)
      })

      entry.solutionSetsV =
        _.filter(entry.solutionSetsV, set => _.difference(set, union).length === 0)
    }
  })
}

function checkPossibleSolutions() {
  entries.forEach(entry => {
    if (entry.sumH) {
      entry.cellsH.forEach(wCell => {
        if (wCell.notes.length === 1 && !wCell.value) {
          wCell.value = wCell.notes[0]

          entry.cellsH.forEach(cell => {
            if (!Object.is(wCell, cell)) {
              cell.notes = _.difference(cell.notes, wCell.notes)
            }
          })
          if (wCell.entryV.sumV) {
            wCell.entryV.cellsV.forEach(cell => {
              if (!Object.is(wCell, cell)) {
                cell.notes = _.difference(cell.notes, wCell.notes)
              }
            })
          }
        }
      })
    }
    if (entry.sumV) {
      entry.cellsV.forEach(wCell => {
        if (wCell.notes.length === 1 && !wCell.value) {
          wCell.value = wCell.notes[0]

          entry.cellsV.forEach(cell => {
            if (!Object.is(wCell, cell)) {
              cell.notes = _.difference(cell.notes, wCell.notes)
            }
          })
          if (wCell.entryH.sumH) {
            wCell.entryH.cellsH.forEach(cell => {
              if (!Object.is(wCell, cell)) {
                cell.notes = _.difference(cell.notes, wCell.notes)
              }
            })
          }
        }
      })
    }
  })
}

function setLastIteration() {
  let lastIteration = []
  allWhiteCells.forEach(wCell => {
    lastIteration = [...lastIteration, wCell.notes]
  })
  return lastIteration
}

function isStuck(lastIteration) {
  for (let i = 0; i < allWhiteCells.length; i++) {
    const diff = _.difference(lastIteration[i], allWhiteCells[i].notes)
    if (diff.length > 0) {
      return false
    }
  }
  return true
}

function guessNumber() {
  let tryLength = 2
  
  while (tryLength <= 9) {
    for (let i = 0; i < 20; i++) {
        const rndCell = Math.floor(Math.random() * allWhiteCells.length)
        let wCell = allWhiteCells[rndCell]
        const rndNote = Math.floor(Math.random() * wCell.notes.length)
    
        if (wCell.notes.length > 1 && wCell.notes.length <= tryLength) {
          wCell.notes = [wCell.notes[rndNote]]
          return
        }
    }
    ++tryLength
  }
}

function saveField(solutionsCopy, notesCopy) {
  entries.forEach(entry => {
    solutionsCopy = [ ...solutionsCopy, [entry.solutionSetsH, entry.solutionSetsV]]
  })

  allWhiteCells.forEach(wCell => {
    notesCopy = [ ...notesCopy, wCell.notes]
  })
  return { solutionsCopy, notesCopy }
}

function loadField(solutionsCopy, notesCopy) {
  for (let i = 0; i < solutionsCopy.length; i++) {
    entries[i].solutionSetsH = solutionsCopy[i][0]
    entries[i].solutionSetsV = solutionsCopy[i][1]
  }
  for (let i = 0; i < notesCopy.length; i++) {
    allWhiteCells[i].notes = notesCopy[i]
    allWhiteCells[i].value = notesCopy[i].length === 1 ? notesCopy[i][0] : 0
  }
}

function setFirstIteration() {
  let firstIteration = []
  for (let i = 0; i < allWhiteCells.length; i++) {
    firstIteration = [ ...firstIteration, [1, 2, 3, 4, 5, 6, 7, 8, 9]]
  }
  return firstIteration
}

export default (fieldAsLists) => {
  entries = fieldAsLists.entries
  allWhiteCells = fieldAsLists.allWhiteCells

  let finished = false
  let solutionsCopy = []
  let notesCopy = []
  let lastIteration = []
  let stuckCounter = 0

  setupSolutionSets()
  
  let j = 0
  while (!finished) {
    if (j > 0)
      loadField(solutionsCopy, notesCopy)

    stuckCounter = 0
    lastIteration = setFirstIteration()
    while (stuckCounter < 2) {
      updateNotesWithSets()
      updateEntries()
      calcUnionOfWhiteCellsInEntry()
      checkPossibleSolutions()
  
      if (isStuck(lastIteration)) {
        if (solutionsCopy.length === 0) {
          const save = saveField(solutionsCopy, notesCopy)
          solutionsCopy = save.solutionsCopy
          notesCopy = save.notesCopy
        }
        
        guessNumber()
        stuckCounter++
      } else {
        stuckCounter = 0
      }
      lastIteration = setLastIteration()
    }

    j++
    finished = _.filter(allWhiteCells, wCell => wCell.value === 0).length === 0
  }
  // console.log(entries)
  // console.log(allWhiteCells)
}