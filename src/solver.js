import _ from 'lodash'
import solutions from './solutions'

let finished = false;

function InfoCell(x , y, hSum, hCount, vSum, vCount) {
  this.hSum = hSum
  this.hCount = hCount
  this.vSum = vSum
  this.vCount = vCount
  this.x = x
  this.y = y
}

function WhiteCell() {
  this.verticalEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  this.horizontalEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  this.value = 0
}

var field = [
  [null, null, new InfoCell(0, 2, 0, 0, 6, 3), new InfoCell(0, 3, 0, 0, 4, 2)],
  [null, new InfoCell(1, 1, 3, 2, 3, 2), new WhiteCell(), new WhiteCell()],
  [new InfoCell(2, 0, 6, 3, 0, 0), new WhiteCell(), new WhiteCell(), new WhiteCell()],
  [new InfoCell(3, 0, 4, 2, 0, 0), new WhiteCell(), new WhiteCell(), null]
]

function printCellInfo(cell, infoCell) {
  console.log("infoCell: ", infoCell)
  console.log("hEnt: ", cell.horizontalEntries)
  console.log("vEnt: ", cell.verticalEntries)
  console.log("value: ", cell.value)
  console.log("---------------")
}

function initEntries() {
  console.log('INIT')

  for (let x = 0; x < field.length; x++) {
    for (let y = 0; y < field[0].length; y++) {
      const cell = field[x][y]

      if (cell instanceof InfoCell) {
        for (let i = 1; i <= cell.hCount; i++) {
          field[x][y+i].horizontalEntries =
            _.intersection(
              field[x][y+i].horizontalEntries,
              _.flatten(solutions[cell.hSum][cell.hCount])
            )
          printCellInfo(field[x][y+i], cell)
        }
        for (let j = 1; j <= cell.vCount; j++) {
          field[x+j][y].verticalEntries =
            _.intersection(
              field[x+j][y].verticalEntries,
              _.flatten(solutions[cell.vSum][cell.vCount])
            )
            printCellInfo(field[x+j][y], cell)
        }
      }
    }
  }  

  console.log('//////////////////')
}

function setEntriesForWhiteCells(infoCell) {
  for (let i = 1; i <= infoCell.hCount; i++) {
    const whiteCell = field[infoCell.x][infoCell.y+i]
    if (!whiteCell.value)
      calcValue(whiteCell, infoCell, 'h')
  }
  for (let j = 1; j <= infoCell.vCount; j++) {
    const whiteCell = field[infoCell.x+j][infoCell.y]
    if (!whiteCell.value)
      calcValue(whiteCell, infoCell, 'v')
  }
}

function calcValue(cell, infoCell, direction) {
  if (direction === 'h') {
    for (let i = 1; i <= infoCell.hCount; i++) {
      cell.horizontalEntries =
        _.pull(
          cell.horizontalEntries,
          field[infoCell.x][infoCell.y+i].value
        )
    }
  } else {
    for (let j = 1; j <= infoCell.vCount; j++) { 
      cell.verticalEntries =
        _.pull(
          cell.verticalEntries,
          field[infoCell.x+j][infoCell.y].value
        )
    }
  }
  
  cell.horizontalEntries = cell.verticalEntries =
    _.intersection(cell.horizontalEntries, cell.verticalEntries)


  if (cell.horizontalEntries.length === 1) {
    cell.value = cell.horizontalEntries[0]
  } else {
    finished = false
  }

  printCellInfo(cell, infoCell)
}

function solve() {
  let i = 1

  while (!finished) {
    finished = true

    for (let x = 0; x < field.length; x++) {
      for (let y = 0; y < field[0].length; y++) {
        const cell = field[x][y]
  
        if (cell instanceof InfoCell) {
          setEntriesForWhiteCells(cell)
        }
      }
    }

    // For testing purpose
    if (i === 10)
      finished = true
    ++i
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
  }
  console.log('Loops: ', i)
}

function logField() {
  for (let x = 0; x < field.length; x++) {
    for (let y = 0; y <field[0].length; y++) {
      console.log(field[x][y])
    }
  }
}

export default () => {
  initEntries()
  solve()

  logField()
}