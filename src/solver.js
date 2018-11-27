import _ from 'lodash'
import solutions from './solutions'

let finished;

function InfoCell(hSum, hCount, vSum, vCount) {
  this.hSum = hSum
  this.hCount = hCount
  this.vSum = vSum
  this.vCount = vCount
}

function WhiteCell() {
  this.verticalEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  this.horizontalEntries = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  this.value = 0
}

var field = [
  [null, null, new InfoCell(0, 0, 6, 3), new InfoCell(0, 0, 4, 2)],
  [null, new InfoCell(3, 2, 3, 2), new WhiteCell(), new WhiteCell()],
  [new InfoCell(6, 3, 0, 0), new WhiteCell(), new WhiteCell(), new WhiteCell()],
  [new InfoCell(4, 2, 0, 0), new WhiteCell(), new WhiteCell(), null]
]

function setEntriesForWhiteCells(infoCell, x, y) {
  for (let i = 1; i <= infoCell.hCount; i++) {
    field[x][y+i].horizontalEntries =
      _.intersection(
        field[x][y+i].horizontalEntries,
        _.flatten(solutions[infoCell.hSum][infoCell.hCount])
      )
  }
  for (let j = 1; j <= infoCell.vCount; j++) {
    field[x+j][y].verticalEntries =
      _.intersection(
        field[x+j][y].verticalEntries,
        _.flatten(solutions[infoCell.vSum][infoCell.vCount])
      )
  }
}

function calcPossibilitiesSetValue(cell) {
  cell.horizontalEntries = cell.verticalEntries =
    _.intersection(cell.horizontalEntries, cell.verticalEntries)

  cell.value =
    cell.horizontalEntries.length === 1
      ? cell.horizontalEntries[0]
      : 0
}

function solve() {
  finished = false

  for (let x = 0; x < field.length; x++) {
    for (let y = 0; y < field[0].length; y++) {
      const cell = field[x][y]

      if (cell instanceof InfoCell) {
        setEntriesForWhiteCells(cell, x, y)
      } else if (cell instanceof WhiteCell) {
        calcPossibilitiesSetValue(cell)
      }
    }
  }
}

export default () => {
  solve()
  console.log(field)
}