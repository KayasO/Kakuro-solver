import _ from 'lodash'
import solutions from './solutions'

let entries = []

function Entry(sumH, sumV) {
  this.sumH = sumH
  this.sumV = sumV
  this.cellsH = []
  this.cellsV = []
  this.solutionSetsH = []
  this.solutionSetsV = []
}

function WhiteCell() {
  this.entryH = {}
  this.entryV = {}
  this.notes = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  this.value = 0
}

function initEntries1() {
  let wC1 = new WhiteCell()
  let wC2 = new WhiteCell()
  let wC3 = new WhiteCell()
  let wC4 = new WhiteCell()
  let wC5 = new WhiteCell()
  let wC6 = new WhiteCell()
  let wC7 = new WhiteCell()
  let wC8 = new WhiteCell()
  let wC9 = new WhiteCell()
  let wC10 = new WhiteCell()
  
  let entry1 = new Entry(0, 17)
  entry1.cellsV = [wC1, wC3]
  entries.push(entry1)
  let entry2 = new Entry(0, 19)
  entry2.cellsV = [wC2, wC4, wC6]
  entries.push(entry2)
  let entry3 = new Entry(16, 0)
  entry3.cellsH = [wC1, wC2]
  entries.push(entry3)
  let entry4 = new Entry(0, 20)
  entry4.cellsV = [wC5, wC7, wC9]
  entries.push(entry4)
  let entry5 = new Entry(24, 0)
  entry5.cellsH = [wC3, wC4, wC5]
  entries.push(entry5)
  let entry6 = new Entry(0, 8)
  entry6.cellsV = [wC8, wC10]
  entries.push(entry6)
  let entry7 = new Entry(19, 0)
  entry7.cellsH = [wC6, wC7, wC8]
  entries.push(entry7)
  let entry8 = new Entry(5, 0)
  entry8.cellsH = [wC9, wC10]
  entries.push(entry8)
}

function initEntries2() {
  let wC1 = new WhiteCell()
  let wC2 = new WhiteCell()
  let wC3 = new WhiteCell()
  let wC4 = new WhiteCell()
  let wC5 = new WhiteCell()
  let wC6 = new WhiteCell()
  let wC7 = new WhiteCell()
  
  let entry1 = new Entry(0, 6)
  entry1.cellsV = [wC1, wC4, wC7]
  entries.push(entry1)
  let entry2 = new Entry(0, 4)
  entry2.cellsV = [wC2, wC5]
  entries.push(entry2)
  let entry3 = new Entry(3, 3)
  entry3.cellsH = [wC1, wC2]
  entry3.cellsV = [wC3, wC6]
  entries.push(entry3)
  let entry4 = new Entry(6, 0)
  entry4.cellsH = [wC3, wC4, wC5]
  entries.push(entry4)
  let entry5 = new Entry(4, 0)
  entry5.cellsH = [wC6, wC7]
  entries.push(entry5)
}

function initEntries3() {
  let wC1 = new WhiteCell()
  let wC2 = new WhiteCell()
  let wC3 = new WhiteCell()
  let wC4 = new WhiteCell()
  let wC5 = new WhiteCell()
  let wC6 = new WhiteCell()
  let wC7 = new WhiteCell()
  let wC8 = new WhiteCell()
  let wC9 = new WhiteCell()
  let wC10 = new WhiteCell()
  
  let entry1 = new Entry(0, 14)
  entry1.cellsV = [wC1, wC3]
  entries.push(entry1)
  let entry2 = new Entry(0, 11)
  entry2.cellsV = [wC2, wC4, wC6]
  entries.push(entry2)
  let entry3 = new Entry(16, 0)
  entry3.cellsH = [wC1, wC2]
  entries.push(entry3)
  let entry4 = new Entry(0, 17)
  entry4.cellsV = [wC5, wC7, wC9]
  entries.push(entry4)
  let entry5 = new Entry(14, 0)
  entry5.cellsH = [wC3, wC4, wC5]
  entries.push(entry5)
  let entry6 = new Entry(0, 8)
  entry6.cellsV = [wC8, wC10]
  entries.push(entry6)
  let entry7 = new Entry(7, 0)
  entry7.cellsH = [wC6, wC7, wC8]
  entries.push(entry7)
  let entry8 = new Entry(13, 0)
  entry8.cellsH = [wC9, wC10]
  entries.push(entry8)


  wC1.entryV = wC3.entryV = entry1
  wC2.entryV = wC4.entryV = wC6.entryV = entry2
  wC1.entryH = wC2.entryH = entry3
  wC5.entryV = wC7.entryV = wC9.entryV = entry4
  wC3.entryH = wC4.entryH = wC5.entryH = entry5
  wC8.entryV = wC10.entryV = entry6
  wC6.entryH = wC7.entryH = wC8.entryH = entry7
  wC9.entryH = wC10.entryH = entry8
}

function initEntries4() {
  let wC1 = new WhiteCell()
  let wC2 = new WhiteCell()
  let wC3 = new WhiteCell()
  let wC4 = new WhiteCell()
  
  let entry1 = new Entry(0, 5)
  entry1.cellsV = [wC1, wC3]
  entries.push(entry1)
  let entry2 = new Entry(0, 6)
  entry2.cellsV = [wC2, wC4]
  entries.push(entry2)
  let entry3 = new Entry(4, 0)
  entry3.cellsH = [wC1, wC2]
  entries.push(entry3)
  let entry4 = new Entry(7, 0)
  entry4.cellsH = [wC3, wC4]
  entries.push(entry4)
}

function initEntries5() {
  let wC1 = new WhiteCell()
  let wC2 = new WhiteCell()
  let wC3 = new WhiteCell()
  let wC4 = new WhiteCell()
  let wC5 = new WhiteCell()
  let wC6 = new WhiteCell()
  let wC7 = new WhiteCell()
  let wC8 = new WhiteCell()
  let wC9 = new WhiteCell()
  let wC10 = new WhiteCell()
  
  let entry1 = new Entry(0, 3)
  entry1.cellsV = [wC1, wC3]
  entries.push(entry1)
  let entry2 = new Entry(0, 8)
  entry2.cellsV = [wC2, wC4, wC6]
  entries.push(entry2)
  let entry3 = new Entry(4, 0)
  entry3.cellsH = [wC1, wC2]
  entries.push(entry3)
  let entry4 = new Entry(0, 20)
  entry4.cellsV = [wC5, wC7, wC9]
  entries.push(entry4)
  let entry5 = new Entry(6, 0)
  entry5.cellsH = [wC3, wC4, wC5]
  entries.push(entry5)
  let entry6 = new Entry(0, 10)
  entry6.cellsV = [wC8, wC10]
  entries.push(entry6)
  let entry7 = new Entry(15, 0)
  entry7.cellsH = [wC6, wC7, wC8]
  entries.push(entry7)
  let entry8 = new Entry(16, 0)
  entry8.cellsH = [wC9, wC10]
  entries.push(entry8)


  wC1.entryV = wC3.entryV = entry1
  wC2.entryV = wC4.entryV = wC6.entryV = entry2
  wC1.entryH = wC2.entryH = entry3
  wC5.entryV = wC7.entryV = wC9.entryV = entry4
  wC3.entryH = wC4.entryH = wC5.entryH = entry5
  wC8.entryV = wC10.entryV = entry6
  wC6.entryH = wC7.entryH = wC8.entryH = entry7
  wC9.entryH = wC10.entryH = entry8
}

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
        _.filter(entry.solutionSetsH, set => 
          _.difference(set, union).length === 0)
    }
    if (entry.sumV) {
      let union = []
      entry.cellsV.forEach(cell => {
        union = _.union(union, cell.notes)
      })

      entry.solutionSetsV =
        _.filter(entry.solutionSetsV, set => 
          _.difference(set, union).length === 0)
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

function checkNotesWithSets() {
  entries.forEach(entry => {
    if (entry.sumH) {
      entry.cellsH.forEach(wCell => {
        if (!wCell.value) {
          let possibleSolutions = []

          entry.solutionSetsH.forEach(set => {
            const isect = _.intersection(wCell.notes, set)
            if (isect.length === 1) {
              possibleSolutions = [...isect]
            }
          })
          if (possibleSolutions.length === 1) {
            console.log('entry: ', entry)
            console.log('posB: ', possibleSolutions)
            wCell.value = possibleSolutions[0]
            wCell.notes = [...possibleSolutions]

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
        }
      })
    }
    if (entry.sumV) {
      entry.cellsV.forEach(wCell => {
        if (!wCell.value) {
          let possibleSolutions = []

          entry.solutionSetsV.forEach(set => {
            const isect = _.intersection(wCell.notes, set)
            if (isect.length === 1) {
              possibleSolutions = [...isect]
            }
          })
          if (possibleSolutions.length === 1) {
            wCell.value = possibleSolutions[0]
            wCell.notes = [...possibleSolutions]

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
        }
      })
    }
  })
}

export default () => {
  initEntries5()
  setupSolutionSets()

  for (let i = 0; i < 100; i++) {
    updateEntries()
    calcUnionOfWhiteCellsInEntry()
    checkPossibleSolutions()
    // checkNotesWithSets()
  }

  console.log(entries)
}