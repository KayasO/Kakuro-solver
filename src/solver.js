import _ from 'lodash'
import solutions from './solutions'

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

function solve() {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[0].length; j++) {
      const cell = field[i][j]

      if (cell instanceof InfoCell) {
        for (let k = 1; k <= cell.hCount; k++) {
          field[i][j+k].horizontalEntries =
            _.intersection(
              field[i][j+k].horizontalEntries,
              _.flatten(solutions[cell.hSum][cell.hCount])
            )
        }
        for (let l = 1; l <= cell.vCount; l++) {
          field[i+l][j].verticalEntries =
            _.intersection(
              field[i+l][j].verticalEntries,
              _.flatten(solutions[cell.vSum][cell.vCount])
            )
        }
      }
    }
  }
}

export default () => {
  solve()
  console.log(field)
}