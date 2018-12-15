import { Entry } from './Entry'
import { WhiteCell } from './WhiteCell'


export function EASY_EXAMPLE() {
  return [
    [null, new Entry(0, 5), new Entry(0, 6)],
    [new Entry(4, 0), new WhiteCell(), new WhiteCell()],
    [new Entry(7, 0), new WhiteCell(),new WhiteCell()]
  ]
}

export function CHALLENGING_4x4() {
  return [
    [null, null, new Entry(0, 30), new Entry(0, 20), new Entry(0, 3)],
    [null, new Entry(19, 0), new WhiteCell(), new WhiteCell(), new WhiteCell()],
    [null, new Entry(17, 4), new WhiteCell(), new WhiteCell(), new WhiteCell()],
    [new Entry(12, 0), new WhiteCell(), new WhiteCell(), new WhiteCell(), null],
    [new Entry(9, 0), new WhiteCell(), new WhiteCell(), new WhiteCell(), null]
  ]
}

export function EXPERT_4x4() {
  return [
    [null, null, new Entry(0, 19), new Entry(0, 26), null],
    [null, new Entry(8, 7), new WhiteCell(), new WhiteCell(), new Entry(0, 9)],
    [new Entry(20, 0), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell()],
    [new Entry(29, 0), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell()],
    [null, new Entry(4, 0), new WhiteCell(), new WhiteCell(), null]
  ]
}

export function EASY_6x6() {
  return [
    [null, new Entry(0, 12), new Entry(0, 19), null, null, new Entry(0, 11), new Entry(0, 8)],
    [new Entry(16, 0), new WhiteCell(), new WhiteCell(), null, new Entry(16, 20), new WhiteCell(), new WhiteCell()],
    [new Entry(3, 0), new WhiteCell(), new WhiteCell(), new Entry(11, 19), new WhiteCell(), new WhiteCell(), new WhiteCell()],
    [new Entry(17, 0), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new Entry(0, 23), new Entry(0, 14)],
    [null, new Entry(0, 12), new Entry(30, 15), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell()],
    [new Entry(23, 0), new WhiteCell(), new WhiteCell(), new WhiteCell(), new Entry(9, 0), new WhiteCell(), new WhiteCell()],
    [new Entry(13, 0), new WhiteCell(), new WhiteCell(), null, new Entry(15, 0), new WhiteCell(), new WhiteCell()]
  ]
}

export function EXPERT_9x17() {
  return [
    [null, null, null, new Entry(0, 7), new Entry(0, 22), null, new Entry(0, 6), new Entry(0, 24), new Entry(0, 31), new Entry(0, 14)],
    [null, null, new Entry(11, 26), new WhiteCell(), new WhiteCell(), new Entry(29, 29), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell()],
    [null, new Entry(41, 4), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell()],
    [new Entry(10, 0), new WhiteCell(), new WhiteCell(), new Entry(15, 29), new WhiteCell(), new WhiteCell(), new Entry(13, 22), new WhiteCell(), new WhiteCell(), new Entry(0, 7)],
    [new Entry(8, 0), new WhiteCell(), new WhiteCell(), new WhiteCell(), new Entry(16, 11), new WhiteCell(), new WhiteCell(), new Entry(9, 0), new WhiteCell(), new WhiteCell()],
    [null, new Entry(29, 0), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new Entry(15, 20), new WhiteCell(), new WhiteCell()],
    [null, new Entry(0, 14), new Entry(23, 27), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new Entry(0, 15), null],
    [new Entry(26, 0), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new Entry(15, 19), new WhiteCell(), new WhiteCell(), new WhiteCell(), new Entry(0, 26)],
    [new Entry(16, 0), new WhiteCell(), new WhiteCell(), null, new Entry(19, 22), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell()],
    [new Entry(11, 0), new WhiteCell(), new WhiteCell(), new Entry(16, 6), new WhiteCell(), new WhiteCell(), new WhiteCell(), new Entry(9, 0), new WhiteCell(), new WhiteCell()],
    [new Entry(22, 0), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new Entry(0, 22), new Entry(11, 24), new WhiteCell(), new WhiteCell()],
    [null, new Entry(7, 0), new WhiteCell(), new WhiteCell(), new WhiteCell(), new Entry(14, 33), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell()],
    [null, new Entry(0, 6), new Entry(15, 23), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new Entry(0, 29), null],
    [new Entry(13, 0), new WhiteCell(), new WhiteCell(), new Entry(31, 0), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new Entry(0, 17)],
    [new Entry(4, 0), new WhiteCell(), new WhiteCell(), new Entry(8, 21), new WhiteCell(), new WhiteCell(), new Entry(24, 19), new WhiteCell(), new WhiteCell(), new WhiteCell()],
    [null, new Entry(15, 4), new WhiteCell(), new WhiteCell(), new Entry(14, 14), new WhiteCell(), new WhiteCell(), new Entry(17, 8) , new WhiteCell(), new WhiteCell()],
    [new Entry(44, 0), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), null],
    [new Entry(22, 0), new WhiteCell(), new WhiteCell(), new WhiteCell(), new WhiteCell(), new Entry(9, 0) , new WhiteCell(), new WhiteCell(), null, null]
  ]
}

