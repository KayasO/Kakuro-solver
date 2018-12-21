import _ from 'lodash'

import solutions from './solutions'

let entries = []
let allWhiteCells = []
let solutionEvents = []

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
    let event
    const possibleSolutions = _.flatten(solutionSets)

    event = {
      cell: wCell,
      notesBefore: wCell.notes,
      possibleSolutions,
      type: 'only',
    }

    wCell.notes = _.intersection(wCell.notes, possibleSolutions)

    if (wCell.notes.length === 1) {
      solutionEvents.push(event)
    }
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

        const event = {
          cell: wCell,
          notesBefore: wCell.notes,
          possibleSolutions: unionSets,
          type: 'intersection notes with unionSets',
        }

        wCell.notes = _.intersection(wCell.notes, unionSets)
        if (
          wCell.notes.length === 1 &&
          _.findIndex(solutionEvents, el => el.cell === wCell) === -1
        ) {
          solutionEvents.push(event)
        }
      })
    }
    if (entry.sumV) {
      entry.cellsV.forEach(wCell => {
        let unionSets = []
        entry.solutionSetsV.forEach(set => {
          unionSets = _.union(unionSets, set)
        })

        const event = {
          cell: wCell,
          notesBefore: wCell.notes,
          possibleSolutions: unionSets,
          type: 'intersection notes with unionSets',
        }

        wCell.notes = _.intersection(wCell.notes, unionSets)
        if (
          wCell.notes.length === 1 &&
          _.findIndex(solutionEvents, el => el.cell === wCell) === -1
        ) {
          solutionEvents.push(event)
        }
      })
    }
  })
}

function updateEntries() {
  entries.forEach(entry => {
    if (entry.sumH) {
      entry.cellsH.forEach(cell => {
        entry.solutionSetsH = _.filter(
          entry.solutionSetsH,
          set => _.intersection(set, cell.notes).length > 0
        )
      })
    }
    if (entry.sumV) {
      entry.cellsV.forEach(cell => {
        entry.solutionSetsV = _.filter(
          entry.solutionSetsV,
          set => _.intersection(set, cell.notes).length > 0
        )
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

      entry.solutionSetsH = _.filter(
        entry.solutionSetsH,
        set => _.difference(set, union).length === 0
      )
    }
    if (entry.sumV) {
      let union = []
      entry.cellsV.forEach(cell => {
        union = _.union(union, cell.notes)
      })

      entry.solutionSetsV = _.filter(
        entry.solutionSetsV,
        set => _.difference(set, union).length === 0
      )
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
              let event = {
                cell,
                notesBefore: cell.notes,
                possibleSolutions: wCell.notes,
                type: 'solved',
              }

              cell.notes = _.difference(cell.notes, wCell.notes)
              if (
                cell.notes.length === 1 &&
                _.findIndex(solutionEvents, el => el.cell === cell) === -1
              ) {
                solutionEvents.push(event)
              }
            }
          })
          if (wCell.entryV.sumV) {
            wCell.entryV.cellsV.forEach(cell => {
              if (!Object.is(wCell, cell)) {
                let event = {
                  cell,
                  notesBefore: cell.notes,
                  possibleSolutions: wCell.notes,
                  type: 'solved',
                }

                cell.notes = _.difference(cell.notes, wCell.notes)
                if (
                  cell.notes.length === 1 &&
                  _.findIndex(solutionEvents, el => el.cell === cell) === -1
                ) {
                  solutionEvents.push(event)
                }
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
              let event = {
                cell,
                notesBefore: cell.notes,
                possibleSolutions: wCell.notes,
                type: 'solved',
              }

              cell.notes = _.difference(cell.notes, wCell.notes)
              if (
                cell.notes.length === 1 &&
                _.findIndex(solutionEvents, el => el.cell === cell) === -1
              ) {
                solutionEvents.push(event)
              }
            }
          })
          if (wCell.entryH.sumH) {
            wCell.entryH.cellsH.forEach(cell => {
              if (!Object.is(wCell, cell)) {
                let event = {
                  cell,
                  notesBefore: cell.notes,
                  possibleSolutions: wCell.notes,
                  type: 'solved',
                }

                cell.notes = _.difference(cell.notes, wCell.notes)
                if (
                  cell.notes.length === 1 &&
                  _.findIndex(solutionEvents, el => el.cell === cell) === -1
                ) {
                  solutionEvents.push(event)
                }
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
        const notesBefore = wCell.notes
        wCell.notes = [wCell.notes[rndNote]]

        solutionEvents.push({
          cell: wCell,
          notesBefore,
          type: 'random',
        })
        return
      }
    }
    ++tryLength
  }
}

function saveField(solutionsCopy, notesCopy, solutionEventsCopy) {
  entries.forEach(entry => {
    solutionsCopy = [
      ...solutionsCopy,
      [entry.solutionSetsH, entry.solutionSetsV],
    ]
  })

  allWhiteCells.forEach(wCell => {
    notesCopy = [...notesCopy, wCell.notes]
  })

  solutionEvents.forEach(wCell => {
    solutionEventsCopy = [...solutionEventsCopy, wCell]
  })
  return { solutionsCopy, notesCopy, solutionEventsCopy }
}

function loadField(solutionsCopy, notesCopy, solutionEventsCopy) {
  for (let i = 0; i < solutionsCopy.length; i++) {
    entries[i].solutionSetsH = solutionsCopy[i][0]
    entries[i].solutionSetsV = solutionsCopy[i][1]
  }
  for (let i = 0; i < notesCopy.length; i++) {
    allWhiteCells[i].notes = notesCopy[i]
    allWhiteCells[i].value = notesCopy[i].length === 1 ? notesCopy[i][0] : 0
  }
  solutionEvents = []
  solutionEventsCopy.forEach(wCell => {
    solutionEvents = [...solutionEvents, wCell]
  })
}

function setFirstIteration() {
  let firstIteration = []
  for (let i = 0; i < allWhiteCells.length; i++) {
    firstIteration = [...firstIteration, [1, 2, 3, 4, 5, 6, 7, 8, 9]]
  }
  return firstIteration
}

export default fieldAsLists => {
  entries = fieldAsLists.entries
  allWhiteCells = fieldAsLists.allWhiteCells

  let finished = false
  let solutionsCopy = []
  let notesCopy = []
  let solutionEventsCopy = []
  let lastIteration = []
  let stuckCounter = 0
  let j = 0

  setupSolutionSets()

  while (!finished) {
    if (j > 0) loadField(solutionsCopy, notesCopy, solutionEventsCopy)

    stuckCounter = 0
    lastIteration = setFirstIteration()
    while (stuckCounter < 2) {
      updateNotesWithSets()
      updateEntries()
      calcUnionOfWhiteCellsInEntry()
      checkPossibleSolutions()

      if (isStuck(lastIteration)) {
        if (solutionsCopy.length === 0) {
          const save = saveField(solutionsCopy, notesCopy, solutionEventsCopy)
          solutionsCopy = save.solutionsCopy
          notesCopy = save.notesCopy
          solutionEventsCopy = save.solutionEventsCopy
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

  return solutionEvents
}
