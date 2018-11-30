import _ from 'lodash'
import solutions from './solutions'

let entries = []
let allWhiteCells = []

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

function CROSS_4X4() {
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
  let wC11 = new WhiteCell()
  let wC12 = new WhiteCell()
  
  allWhiteCells = [wC1, wC2, wC3, wC4, wC5, wC6, wC7, wC8, wC9, wC10, wC11, wC12]
  
  let entry1 = new Entry(0, 26)
  entry1.cellsV = [wC1, wC4, wC8, wC11]
  entries.push(entry1)
  wC1.entryV = wC4.entryV = wC8.entryV = wC11.entryV = entry1

  let entry2 = new Entry(0, 14)
  entry2.cellsV = [wC2, wC5, wC9, wC12]
  entries.push(entry2)
  wC2.entryV = wC5.entryV = wC9.entryV = wC12.entryV = entry2

  let entry3 = new Entry(9, 6)
  entry3.cellsH = [wC1, wC2]
  entry3.cellsV = [wC3, wC7]
  entries.push(entry3)
  wC1.entryH = wC2.entryH = entry3
  wC3.entryV = wC7.entryV = entry3

  let entry4 = new Entry(0, 4)
  entry4.cellsV = [wC6, wC10]
  entries.push(entry4)
  wC6.entryV = wC10.entryV = entry4

  let entry5 = new Entry(14, 0)
  entry5.cellsH = [wC3, wC4, wC5, wC6]
  entries.push(entry5)
  wC3.entryH = wC4.entryH = wC5.entryH = wC6.entryH = entry5

  let entry6 = new Entry(24, 0)
  entry6.cellsH = [wC7, wC8, wC9, wC10]
  entries.push(entry6)
  wC7.entryH = wC8.entryH = wC9.entryH = wC10.entryH= entry6

  let entry7 = new Entry(3, 0)
  entry7.cellsH = [wC11, wC12]
  entries.push(entry7)
  wC11.entryH = wC12.entryH = entry7
}

function UPLEFT_BOTRIGHT_4X4() {
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
  let wC11 = new WhiteCell()
  let wC12 = new WhiteCell()
  
  allWhiteCells = [wC1, wC2, wC3, wC4, wC5, wC6, wC7, wC8, wC9, wC10, wC11, wC12]
  
  let entry1 = new Entry(0, 5)
  entry1.cellsV = [wC1, wC4]
  entries.push(entry1)
  wC1.entryV = wC4.entryV = entry1

  let entry2 = new Entry(0, 26)
  entry2.cellsV = [wC2, wC5, wC7, wC10]
  entries.push(entry2)
  wC2.entryV = wC5.entryV = wC7.entryV = wC10.entryV  = entry2

  let entry3 = new Entry(0, 11)
  entry3.cellsV = [wC3, wC6, wC8, wC11]
  entries.push(entry3)
  wC3.entryV = wC6.entryV = wC8.entryV = wC11.entryV = entry3

  let entry4 = new Entry(7, 0)
  entry4.cellsH = [wC1, wC2, wC3]
  entries.push(entry4)
  wC1.entryH = wC2.entryH = wC3.entryH = entry4

  let entry5 = new Entry(18, 0)
  entry5.cellsH = [wC4, wC5, wC6]
  entries.push(entry5)
  wC4.entryH = wC5.entryH = wC6.entryH = entry5

  let entry6 = new Entry(0, 16)
  entry6.cellsV = [wC9, wC12]
  entries.push(entry6)
  wC9.entryV = wC12.entryV = entry6

  let entry7 = new Entry(20, 0)
  entry7.cellsH = [wC7, wC8, wC9]
  entries.push(entry7)
  wC7.entryH = wC8.entryH = wC9.entryH = entry7

  let entry8 = new Entry(13, 0)
  entry8.cellsH = [wC10, wC11, wC12]
  entries.push(entry8)
  wC10.entryH = wC11.entryH = wC12.entryH = entry8
}

function SWASTIKA_ROTATE_6X6() {
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
  let wC11 = new WhiteCell()
  let wC12 = new WhiteCell()
  let wC13 = new WhiteCell()
  let wC14 = new WhiteCell()
  let wC15 = new WhiteCell()
  let wC16 = new WhiteCell()
  let wC17 = new WhiteCell()
  let wC18 = new WhiteCell()
  let wC19 = new WhiteCell()
  let wC20 = new WhiteCell()
  let wC21 = new WhiteCell()
  let wC22 = new WhiteCell()
  let wC23 = new WhiteCell()
  let wC24 = new WhiteCell()
  let wC25 = new WhiteCell()
  let wC26 = new WhiteCell()
  
  allWhiteCells = [wC1, wC2, wC3, wC4, wC5, wC6, wC7, wC8,
                   wC9, wC10, wC11, wC12, wC13, wC14, wC15,
                   wC16, wC17, wC18, wC19, wC20, wC21, wC22,
                   wC23, wC24, wC25, wC26]

  let entry1 = new Entry(0, 9)
  entry1.cellsV = [wC1, wC5]
  entries.push(entry1)
  wC1.entryV = wC5.entryV = entry1
  
  let entry2 = new Entry(0, 11)
  entry2.cellsV = [wC2, wC6]
  entries.push(entry2)
  wC2.entryV = wC6.entryV = entry2

  let entry3 = new Entry(0, 19)
  entry3.cellsV = [wC3, wC8, wC12]
  entries.push(entry3)
  wC3.entryV = wC8.entryV = wC12.entryV = entry3
  
  let entry4 = new Entry(0, 10)
  entry4.cellsV = [wC4, wC9, wC13]
  entries.push(entry4)
  wC4.entryV = wC9.entryV = wC13.entryV = entry4
  
  let entry5 = new Entry(3, 0)
  entry5.cellsH = [wC1, wC2]
  entries.push(entry5)
  wC1.entryH = wC2.entryH = entry5

  let entry6 = new Entry(0, 6)
  entry6.cellsV = [wC7, wC10, wC16]
  entries.push(entry6)
  wC7.entryV = wC10.entryV = wC16.entryV = entry6

  let entry7 = new Entry(4, 0)
  entry7.cellsH = [wC3, wC4]
  entries.push(entry7)
  wC3.entryH = wC4.entryH = entry7

  let entry8 = new Entry(19, 0)
  entry8.cellsH = [wC5, wC6, wC7]
  entries.push(entry8)
  wC5.entryH = wC6.entryH = wC7.entryH = entry8

  let entry9 = new Entry(16, 9)
  entry9.cellsH = [wC8, wC9]
  entry9.cellsV = [wC11, wC17, wC20]
  entries.push(entry9)
  wC8.entryH = wC9.entryH = entry9
  wC11.entryV = wC17.entryV = wC20.entryV = entry9

  let entry10 = new Entry(0, 11)
  entry10.cellsV = [wC14, wC18, wC23]
  entries.push(entry10)
  wC14.entryV = wC18.entryV = wC23.entryV = entry10

  let entry11 = new Entry(17, 13)
  entry11.cellsH = [wC10, wC11, wC12, wC13]
  entry11.cellsV = [wC15, wC19, wC24]
  entries.push(entry11)
  wC10.entryH = wC11.entryH = wC12.entryH = wC13.entryH = entry11
  wC15.entryV = wC19.entryV = wC24.entryV = entry11

  let entry12 = new Entry(21, 0)
  entry12.cellsH = [wC14, wC15, wC16, wC17]
  entries.push(entry12)
  wC14.entryH = wC15.entryH = wC16.entryH = wC17.entryH = entry12

  let entry13 = new Entry(0, 3)
  entry13.cellsV = [wC21, wC25]
  entries.push(entry13)
  wC21.entryV = wC25.entryV = entry13

  let entry14 = new Entry(0, 11)
  entry14.cellsV = [wC22, wC26]
  entries.push(entry14)
  wC22.entryV = wC26.entryV = entry14
  
  let entry15 = new Entry(4, 0)
  entry15.cellsH = [wC18, wC19]
  entries.push(entry15)
  wC18.entryH = wC19.entryH = entry15

  let entry16 = new Entry(7, 0)
  entry16.cellsH = [wC20, wC21, wC22]
  entries.push(entry16)
  wC20.entryH = wC21.entryH = wC22.entryH = entry16

  let entry17 = new Entry(3, 0)
  entry17.cellsH = [wC23, wC24]
  entries.push(entry17)
  wC23.entryH = wC24.entryH = entry17

  let entry18 = new Entry(8, 0)
  entry18.cellsH = [wC25, wC26]
  entries.push(entry18)
  wC25.entryH = wC26.entryH = entry18
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
        console.log('sV: ', entry.solutionSetsV)
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
              possibleSolutions = [...isect, ...possibleSolutions]
            }
          })
          if (possibleSolutions.length === 1) {
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
              possibleSolutions = [...isect, ...possibleSolutions]
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

export default () => {
  SWASTIKA_ROTATE_6X6()
  setupSolutionSets()

  for (let i = 0; i < 15; i++) {
    updateNotesWithSets()
    updateEntries()
    calcUnionOfWhiteCellsInEntry()
    checkPossibleSolutions()

    // TODO: Breaks the rest, puts weird Values, that shouldn't be possible
    // checkNotesWithSets()
    console.log('----------------------------------------------------')
  }

  console.log(entries)
  console.log(allWhiteCells)
}