import { Entry } from './Entry'
import { WhiteCell } from './WhiteCell'

export function CROSS_4X4_INTERMEDIATE() {
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
  
  const entries = []
  const allWhiteCells = [wC1, wC2, wC3, wC4, wC5, wC6, wC7, wC8, wC9, wC10, wC11, wC12]
  
  let entry1 = new Entry(0, 27)
  entry1.cellsV = [wC1, wC4, wC8, wC11]
  entries.push(entry1)
  wC1.entryV = wC4.entryV = wC8.entryV = wC11.entryV = entry1

  let entry2 = new Entry(0, 10)
  entry2.cellsV = [wC2, wC5, wC9, wC12]
  entries.push(entry2)
  wC2.entryV = wC5.entryV = wC9.entryV = wC12.entryV = entry2

  let entry3 = new Entry(9, 7)
  entry3.cellsH = [wC1, wC2]
  entry3.cellsV = [wC3, wC7]
  entries.push(entry3)
  wC1.entryH = wC2.entryH = entry3
  wC3.entryV = wC7.entryV = entry3

  let entry4 = new Entry(0, 10)
  entry4.cellsV = [wC6, wC10]
  entries.push(entry4)
  wC6.entryV = wC10.entryV = entry4

  let entry5 = new Entry(14, 0)
  entry5.cellsH = [wC3, wC4, wC5, wC6]
  entries.push(entry5)
  wC3.entryH = wC4.entryH = wC5.entryH = wC6.entryH = entry5

  let entry6 = new Entry(27, 0)
  entry6.cellsH = [wC7, wC8, wC9, wC10]
  entries.push(entry6)
  wC7.entryH = wC8.entryH = wC9.entryH = wC10.entryH= entry6

  let entry7 = new Entry(4, 0)
  entry7.cellsH = [wC11, wC12]
  entries.push(entry7)
  wC11.entryH = wC12.entryH = entry7

  return {
    entries,
    allWhiteCells
  }
}

export function CROSS_4X4_HARD() {
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
  
  const entries = []
  const allWhiteCells = [wC1, wC2, wC3, wC4, wC5, wC6, wC7, wC8, wC9, wC10, wC11, wC12]
  
  let entry1 = new Entry(0, 27)
  entry1.cellsV = [wC1, wC4, wC8, wC11]
  entries.push(entry1)
  wC1.entryV = wC4.entryV = wC8.entryV = wC11.entryV = entry1

  let entry2 = new Entry(0, 14)
  entry2.cellsV = [wC2, wC5, wC9, wC12]
  entries.push(entry2)
  wC2.entryV = wC5.entryV = wC9.entryV = wC12.entryV = entry2

  let entry3 = new Entry(13, 4)
  entry3.cellsH = [wC1, wC2]
  entry3.cellsV = [wC3, wC7]
  entries.push(entry3)
  wC1.entryH = wC2.entryH = entry3
  wC3.entryV = wC7.entryV = entry3

  let entry4 = new Entry(0, 16)
  entry4.cellsV = [wC6, wC10]
  entries.push(entry4)
  wC6.entryV = wC10.entryV = entry4

  let entry5 = new Entry(14, 0)
  entry5.cellsH = [wC3, wC4, wC5, wC6]
  entries.push(entry5)
  wC3.entryH = wC4.entryH = wC5.entryH = wC6.entryH = entry5

  let entry6 = new Entry(27, 0)
  entry6.cellsH = [wC7, wC8, wC9, wC10]
  entries.push(entry6)
  wC7.entryH = wC8.entryH = wC9.entryH = wC10.entryH= entry6

  let entry7 = new Entry(7, 0)
  entry7.cellsH = [wC11, wC12]
  entries.push(entry7)
  wC11.entryH = wC12.entryH = entry7

  return {
    entries,
    allWhiteCells
  }
}

export function CROSS_4X4_EXPERT() {
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
  
  const entries = []
  const allWhiteCells = [wC1, wC2, wC3, wC4, wC5, wC6, wC7, wC8, wC9, wC10, wC11, wC12]
  
  let entry1 = new Entry(0, 26)
  entry1.cellsV = [wC1, wC4, wC8, wC11]
  entries.push(entry1)
  wC1.entryV = wC4.entryV = wC8.entryV = wC11.entryV = entry1

  let entry2 = new Entry(0, 13)
  entry2.cellsV = [wC2, wC5, wC9, wC12]
  entries.push(entry2)
  wC2.entryV = wC5.entryV = wC9.entryV = wC12.entryV = entry2

  let entry3 = new Entry(16, 17)
  entry3.cellsH = [wC1, wC2]
  entry3.cellsV = [wC3, wC7]
  entries.push(entry3)
  wC1.entryH = wC2.entryH = entry3
  wC3.entryV = wC7.entryV = entry3

  let entry4 = new Entry(0, 11)
  entry4.cellsV = [wC6, wC10]
  entries.push(entry4)
  wC6.entryV = wC10.entryV = entry4

  let entry5 = new Entry(14, 0)
  entry5.cellsH = [wC3, wC4, wC5, wC6]
  entries.push(entry5)
  wC3.entryH = wC4.entryH = wC5.entryH = wC6.entryH = entry5

  let entry6 = new Entry(26, 0)
  entry6.cellsH = [wC7, wC8, wC9, wC10]
  entries.push(entry6)
  wC7.entryH = wC8.entryH = wC9.entryH = wC10.entryH= entry6

  let entry7 = new Entry(11, 0)
  entry7.cellsH = [wC11, wC12]
  entries.push(entry7)
  wC11.entryH = wC12.entryH = entry7

  return {
    entries,
    allWhiteCells
  }
}

export function UPRIGHT_BOTLEFT_SMALL_4X4_INTERMEDIATE() {
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
  
  const entries = []
  const allWhiteCells = [wC1, wC2, wC3, wC4, wC5, wC6, wC7, wC8, wC9, wC10]
  
  let entry1 = new Entry(0, 12)
  entry1.cellsV = [wC1, wC4, wC8]
  entries.push(entry1)
  wC1.entryV = wC4.entryV = wC8.entryV = entry1

  let entry2 = new Entry(0, 17)
  entry2.cellsV = [wC2, wC5]
  entries.push(entry2)
  wC2.entryV = wC5.entryV = entry2

  let entry3 = new Entry(9, 7)
  entry3.cellsH = [wC1, wC2]
  entry3.cellsV = [wC3, wC7, wC10]
  entries.push(entry3)
  wC1.entryH = wC2.entryH = entry3
  wC3.entryV = wC7.entryV = wC10.entryV = entry3

  let entry4 = new Entry(12, 10)
  entry4.cellsH = [wC3, wC4, wC5]
  entry4.cellsV = [wC6, wC9]
  entries.push(entry4)
  wC3.entryH = wC4.entryH = wC5.entryH = entry4
  wC6.entryV = wC9.entryV = entry4

  let entry5 = new Entry(12, 0)
  entry5.cellsH = [wC6, wC7, wC8]
  entries.push(entry5)
  wC6.entryH = wC7.entryH = wC8.entryH = entry5

  let entry6 = new Entry(13, 0)
  entry6.cellsH = [wC9, wC10]
  entries.push(entry6)
  wC9.entryH = wC10.entryH= entry6

  return {
    entries,
    allWhiteCells
  }
}

export function UPRIGHT_BOTLEFT_WIDE_4X4_EXPERT() {
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
  
  const entries = []
  const allWhiteCells = [wC1, wC2, wC3, wC4, wC5, wC6, wC7, wC8, wC9, wC10, wC11, wC12]
  
  let entry1 = new Entry(0, 21)
  entry1.cellsV = [wC1, wC4, wC8, wC11]
  entries.push(entry1)
  wC1.entryV = wC4.entryV = wC8.entryV = wC11.entryV = entry1

  let entry2 = new Entry(0, 11)
  entry2.cellsV = [wC2, wC5, wC9, wC12]
  entries.push(entry2)
  wC2.entryV = wC5.entryV = wC9.entryV = wC12.entryV = entry2

  let entry3 = new Entry(0, 7)
  entry3.cellsV = [wC3, wC6]
  entries.push(entry3)
  wC3.entryV = wC6.entryV = entry3

  let entry4 = new Entry(12, 0)
  entry4.cellsH = [wC1, wC2, wC3]
  entries.push(entry4)
  wC1.entryH = wC2.entryH = wC3.entryH = entry4

  let entry5 = new Entry(20, 17)
  entry5.cellsH = [wC4, wC5, wC6]
  entry5.cellsV = [wC7, wC10]
  entries.push(entry5)
  wC4.entryH = wC5.entryH = wC6.entryH = entry5
  wC7.entryV = wC10.entryV = entry5

  let entry6 = new Entry(13, 0)
  entry6.cellsH = [wC7, wC8, wC9]
  entries.push(entry6)
  wC7.entryH = wC8.entryH = wC9.entryH = entry6

  let entry7 = new Entry(11, 0)
  entry7.cellsH = [wC10, wC11, wC12]
  entries.push(entry7)
  wC10.entryH = wC11.entryH = wC12.entryH = entry7

  return {
    entries,
    allWhiteCells
  }
}

export function UPLEFT_BOTRIGHT_WIDE_4X4_EXPERT() {
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
  
  const entries = []
  const allWhiteCells = [wC1, wC2, wC3, wC4, wC5, wC6, wC7, wC8, wC9, wC10, wC11, wC12]
  
  let entry1 = new Entry(0, 4)
  entry1.cellsV = [wC1, wC4]
  entries.push(entry1)
  wC1.entryV = wC4.entryV = entry1

  let entry2 = new Entry(0, 16)
  entry2.cellsV = [wC2, wC5, wC7, wC10]
  entries.push(entry2)
  wC2.entryV = wC5.entryV = wC7.entryV = wC10.entryV = entry2

  let entry3 = new Entry(0, 29)
  entry3.cellsV = [wC3, wC6, wC8, wC11]
  entries.push(entry3)
  wC3.entryV = wC6.entryV = wC8.entryV = wC11.entryV = entry3

  let entry4 = new Entry(10, 0)
  entry4.cellsH = [wC1, wC2, wC3]
  entries.push(entry4)
  wC1.entryH = wC2.entryH = wC3.entryH = entry4

  let entry5 = new Entry(20, 0)
  entry5.cellsH = [wC4, wC5, wC6]
  entries.push(entry5)
  wC4.entryH = wC5.entryH = wC6.entryH = entry5

  let entry6 = new Entry(0, 15)
  entry6.cellsV = [wC9, wC12]
  entries.push(entry6)
  wC9.entryV = wC12.entryV = entry6

  let entry7 = new Entry(22, 0)
  entry7.cellsH = [wC7, wC8, wC9]
  entries.push(entry7)
  wC7.entryH = wC8.entryH = wC9.entryH = entry7

  let entry8 = new Entry(12, 0)
  entry8.cellsH = [wC10, wC11, wC12]
  entries.push(entry8)
  wC10.entryH = wC11.entryH = wC12.entryH = entry8

  return {
    entries,
    allWhiteCells
  }
}

export function UPLEFT_BOTRIGHT_4X4_EASY() {
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
  
  const entries = []
  const allWhiteCells = [wC1, wC2, wC3, wC4, wC5, wC6, wC7, wC8, wC9, wC10, wC11, wC12]
  
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

  return {
    entries,
    allWhiteCells
  }
}

export function SWASTIKA_ROTATE_6X6_EASY() {
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
  
  const entries = []
  const allWhiteCells = [wC1, wC2, wC3, wC4, wC5, wC6, wC7, wC8,
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

  return {
    entries,
    allWhiteCells
  }
}

export function DIAMOND_TOPRIGHT_BOTLEFT_EXPERT() {
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
  
  const entries = []
  const allWhiteCells = [wC1, wC2, wC3, wC4, wC5, wC6, wC7, wC8,
                   wC9, wC10, wC11, wC12, wC13, wC14, wC15,
                   wC16, wC17, wC18, wC19, wC20, wC21, wC22,
                   wC23, wC24, wC25, wC26]

  let entry1 = new Entry(0, 26)
  entry1.cellsV = [wC1, wC5, wC10, wC14]
  entries.push(entry1)
  wC1.entryV = wC5.entryV = wC10.entryV = wC14.entryV = entry1
  
  let entry2 = new Entry(0, 15)
  entry2.cellsV = [wC2, wC6, wC11, wC15, wC18]
  entries.push(entry2)
  wC2.entryV = wC6.entryV = wC11.entryV = wC15.entryV = wC18.entryV = entry2

  let entry3 = new Entry(0, 7)
  entry3.cellsV = [wC3, wC7]
  entries.push(entry3)
  wC3.entryV = wC7.entryV = entry3
  
  let entry4 = new Entry(0, 4)
  entry4.cellsV = [wC4, wC8]
  entries.push(entry4)
  wC4.entryV = wC8.entryV = entry4
  
  let entry5 = new Entry(14, 0)
  entry5.cellsH = [wC1, wC2, wC3, wC4]
  entries.push(entry5)
  wC1.entryH = wC2.entryH = wC3.entryH = wC4.entryH = entry5

  let entry6 = new Entry(0, 18)
  entry6.cellsV = [wC9, wC12, wC16, wC21, wC25]
  entries.push(entry6)
  wC9.entryV = wC12.entryV = wC16.entryV = wC21.entryV = wC25.entryV = entry6

  let entry7 = new Entry(27, 0)
  entry7.cellsH = [wC5, wC6, wC7, wC8, wC9]
  entries.push(entry7)
  wC5.entryH = wC6.entryH = wC7.entryH = wC8.entryH = wC9.entryH = entry7

  let entry8 = new Entry(0, 30)
  entry8.cellsV = [wC13, wC17, wC22, wC26]
  entries.push(entry8)
  wC13.entryV = wC17.entryV = wC22.entryV = wC26.entryV = entry8

  let entry9 = new Entry(9, 0)
  entry9.cellsH = [wC10, wC11]
  entries.push(entry9)
  wC10.entryH = wC11.entryH = entry9

  let entry10 = new Entry(7, 0)
  entry10.cellsH = [wC12, wC13]
  entries.push(entry10)
  wC12.entryH = wC13.entryH = entry10

  let entry11 = new Entry(3, 0)
  entry11.cellsH = [wC14, wC15]
  entries.push(entry11)
  wC14.entryH = wC15.entryH = entry11

  let entry14 = new Entry(0, 7)
  entry14.cellsV = [wC19, wC23]
  entries.push(entry14)
  wC19.entryV = wC23.entryV = entry14

  let entry15 = new Entry(10, 9)
  entry15.cellsH = [wC16, wC17]
  entry15.cellsV = [wC20, wC24]
  entries.push(entry15)
  wC16.entryH = wC17.entryH = entry15
  wC20.entryV = wC24.entryV = entry15
  
  let entry16 = new Entry(26, 0)
  entry16.cellsH = [wC18, wC19, wC20, wC21, wC22]
  entries.push(entry16)
  wC18.entryH = wC19.entryH = wC20.entryH = wC21.entryH = wC22.entryH = entry16

  let entry17 = new Entry(20, 0)
  entry17.cellsH = [wC23, wC24, wC25, wC26]
  entries.push(entry17)
  wC23.entryH = wC24.entryH = wC25.entryH = wC26.entryH = entry17

  return {
    entries,
    allWhiteCells
  }
}

export function DIAMOND_TOPRIGHT_BOTLEFT_FAT_HARD() {
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
  
  const entries = []
  const allWhiteCells = [wC1, wC2, wC3, wC4, wC5, wC6, wC7, wC8,
                   wC9, wC10, wC11, wC12, wC13, wC14, wC15,
                   wC16, wC17, wC18, wC19, wC20, wC21, wC22,
                   wC23, wC24, wC25, wC26]

  let entry1 = new Entry(0, 13)
  entry1.cellsV = [wC1, wC6]
  entries.push(entry1)
  wC1.entryV = wC6.entryV = entry1
  
  let entry2 = new Entry(0, 4)
  entry2.cellsV = [wC2, wC7]
  entries.push(entry2)
  wC2.entryV = wC7.entryV = entry2

  let entry3 = new Entry(0, 25)
  entry3.cellsV = [wC3, wC8, wC12, wC16, wC22]
  entries.push(entry3)
  wC3.entryV = wC8.entryV = wC12.entryV = wC16.entryV = wC22.entryV = entry3
  
  let entry4 = new Entry(0, 26)
  entry4.cellsV = [wC4, wC9, wC13, wC17]
  entries.push(entry4)
  wC4.entryV = wC9.entryV = wC13.entryV = wC17.entryV = entry4
  
  let entry5 = new Entry(13, 31)
  entry5.cellsH = [wC1, wC2, wC3, wC4]
  entry5.cellsV = [wC5, wC11, wC15, wC19, wC24]
  entries.push(entry5)
  wC1.entryH = wC2.entryH = wC3.entryH = wC4.entryH = entry5
  wC5.entryV = wC11.entryV = wC15.entryV = wC19.entryV = wC24.entryV = entry5

  let entry6 = new Entry(28, 12)
  entry6.cellsH = [wC5, wC6, wC7, wC8, wC9]
  entry6.cellsV = [wC10, wC14, wC18, wC23]
  entries.push(entry6)
  wC5.entryH = wC6.entryH = wC7.entryH = wC8.entryH = wC9.entryH = entry6
  wC10.entryV = wC14.entryV = wC18.entryV = wC23.entryV = entry6

  let entry7 = new Entry(7, 0)
  entry7.cellsH = [wC10, wC11]
  entries.push(entry7)
  wC10.entryH = wC11.entryH = entry7

  let entry8 = new Entry(4, 0)
  entry8.cellsV = [wC12, wC13]
  entries.push(entry8)
  wC12.entryV = wC13.entryV = entry8

  let entry9 = new Entry(8, 0)
  entry9.cellsH = [wC14, wC15]
  entries.push(entry9)
  wC14.entryH = wC15.entryH = entry9

  let entry10 = new Entry(0, 9)
  entry10.cellsV = [wC20, wC25]
  entries.push(entry10)
  wC20.entryV = wC25.entryV = entry10

  let entry11 = new Entry(16, 5)
  entry11.cellsH = [wC16, wC17]
  entry11.cellsV = [wC21, wC26]
  entries.push(entry11)
  wC16.entryH = wC17.entryH = entry11
  wC21.entryV = wC26.entryV = entry11

  let entry14 = new Entry(34, 0)
  entry14.cellsH = [wC18, wC19, wC20, wC21, wC22]
  entries.push(entry14)
  wC18.entryH = wC19.entryH = wC20.entryH = wC21.entryH = wC22.entryH = entry14

  let entry15 = new Entry(15, 0)
  entry15.cellsH = [wC23, wC24, wC25, wC26]
  entries.push(entry15)
  wC23.entryH = wC24.entryH = wC25.entryH = wC26.entryH = entry15

  return {
    entries,
    allWhiteCells
  }
}

export function EXPERT_8X8() {
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
  let wC27 = new WhiteCell()
  let wC28 = new WhiteCell()
  let wC29 = new WhiteCell()
  let wC30 = new WhiteCell()
  let wC31 = new WhiteCell()
  let wC32 = new WhiteCell()
  let wC33 = new WhiteCell()
  let wC34 = new WhiteCell()
  let wC35 = new WhiteCell()
  let wC36 = new WhiteCell()
  let wC37 = new WhiteCell()
  let wC38 = new WhiteCell()
  let wC39 = new WhiteCell()
  let wC40 = new WhiteCell()
  let wC41 = new WhiteCell()
  let wC42 = new WhiteCell()
  let wC43 = new WhiteCell()
  let wC44 = new WhiteCell()
  let wC45 = new WhiteCell()
  let wC46 = new WhiteCell()
  let wC47 = new WhiteCell()
  let wC48 = new WhiteCell()
  
  const entries = []
  const allWhiteCells = [wC1, wC2, wC3, wC4, wC5, wC6, wC7, wC8,
                   wC9, wC10, wC11, wC12, wC13, wC14, wC15,
                   wC16, wC17, wC18, wC19, wC20, wC21, wC22,
                   wC23, wC24, wC25, wC26, wC27, wC28, wC29,
                   wC30, wC31, wC32, wC33, wC34, wC35, wC36,
                   wC37, wC38, wC39, wC40, wC41, wC42, wC43,
                   wC44, wC45, wC46, wC47, wC48]

  let entry1 = new Entry(0, 42)
  entry1.cellsV = [wC1, wC7, wC14, wC20, wC26, wC31, wC38, wC45]
  entries.push(entry1)
  wC1.entryV = wC7.entryV = wC14.entryV = wC20.entryV = wC26.entryV = wC31.entryV = wC38.entryV = wC45.entryV = entry1
  
  let entry2 = new Entry(0, 12)
  entry2.cellsV = [wC2, wC8]
  entries.push(entry2)
  wC2.entryV = wC8.entryV = entry2

  let entry3 = new Entry(0, 13)
  entry3.cellsV = [wC3, wC9, wC15]
  entries.push(entry3)
  wC3.entryV = wC9.entryV = wC15.entryV = entry3
  
  let entry4 = new Entry(0, 42)
  entry4.cellsV = [wC4, wC11, wC18, wC23, wC29, wC35, wC42, wC48]
  entries.push(entry4)
  wC4.entryV = wC11.entryV = wC18.entryV = wC23.entryV = wC29.entryV = wC35.entryV = wC42.entryV = wC48.entryV = entry4
  
  let entry5 = new Entry(0, 11)
  entry5.cellsV = [wC5, wC12, wC19, wC24]
  entries.push(entry5)
  wC5.entryV = wC12.entryV = wC19.entryV = wC24.entryV = entry5

  let entry6 = new Entry(17, 14)
  entry6.cellsH = [wC1, wC2, wC3]
  entry6.cellsV = [wC6, wC13]
  entries.push(entry6)
  wC1.entryH = wC2.entryH = wC3.entryH = entry6
  wC6.entryV = wC13.entryV = entry6

  let entry7 = new Entry(0, 9)
  entry7.cellsV = [wC10, wC16]
  entries.push(entry7)
  wC10.entryV = wC16.entryV = entry7

  let entry8 = new Entry(14, 0)
  entry8.cellsH = [wC4, wC5]
  entries.push(entry8)
  wC4.entryH = wC5.entryH = entry8

  let entry9 = new Entry(26, 0)
  entry9.cellsH = [wC6, wC7, wC8, wC9, wC10]
  entries.push(entry9)
  wC6.entryH = wC7.entryH = wC8.entryH = wC9.entryH = wC10.entryH = entry9

  let entry10 = new Entry(11, 13)
  entry10.cellsH = [wC11, wC12]
  entry10.cellsV = [wC17, wC22, wC28]
  entries.push(entry10)
  wC11.entryH = wC12.entryH = entry10
  wC17.entryV = wC22.entryV = wC28.entryV = entry10

  let entry11 = new Entry(9, 0)
  entry11.cellsH = [wC13, wC14]
  entries.push(entry11)
  wC13.entryH = wC14.entryH = entry11

  let entry12 = new Entry(27, 12)
  entry12.cellsH = [wC15, wC16, wC17, wC18, wC19]
  entry12.cellsV = [wC21, wC27, wC32]
  entries.push(entry12)
  wC15.entryH = wC16.entryH = wC17.entryH = wC18.entryH = wC19.entryH = entry12
  wC21.entryV = wC27.entryV = wC32.entryV = entry12

  let entry13 = new Entry(3, 12)
  entry13.cellsH = [wC20, wC21]
  entry13.cellsV = [wC25, wC30, wC37, wC44]
  entries.push(entry13)
  wC20.entryH = wC21.entryH = entry13
  wC25.entryV = wC30.entryV = wC37.entryV = wC44.entryV = entry13

  let entry14 = new Entry(18, 0)
  entry14.cellsH = [wC22, wC23, wC24]
  entries.push(entry14)
  wC22.entryH = wC23.entryH = wC24.entryH = entry14

  let entry15 = new Entry(11, 0)
  entry15.cellsH = [wC25, wC26, wC27]
  entries.push(entry15)
  wC25.entryH = wC26.entryH = wC27.entryH = entry15

  let entry16 = new Entry(0, 14)
  entry16.cellsV = [wC33, wC39]
  entries.push(entry16)
  wC33.entryV = wC39.entryV = entry16

  let entry17 = new Entry(5, 20)
  entry17.cellsH = [wC28, wC29]
  entry17.cellsV = [wC34, wC40, wC46]
  entries.push(entry17)
  wC28.entryH = wC29.entryH = entry17
  wC34.entryV = wC40.entryV = wC46.entryV = entry17

  let entry18 = new Entry(0, 15)
  entry18.cellsV = [wC36, wC43]
  entries.push(entry18)
  wC36.entryV = wC43.entryV = entry18

  let entry19 = new Entry(33, 0)
  entry19.cellsH = [wC30, wC31, wC32, wC33, wC34]
  entries.push(entry19)
  wC30.entryH = wC31.entryH = wC32.entryH = wC33.entryH = wC34.entryH = entry19

  let entry20 = new Entry(8, 10)
  entry20.cellsH = [wC35, wC36]
  entry20.cellsV = [wC41, wC42]
  entries.push(entry20)
  wC35.entryH = wC36.entryH = entry20
  wC41.entryV = wC42.entryV = entry20

  let entry21 = new Entry(6, 0)
  entry21.cellsH = [wC37, wC38]
  entries.push(entry21)
  wC37.entryH = wC38.entryH = entry21

  let entry22 = new Entry(26, 0)
  entry22.cellsH = [wC39, wC40, wC41, wC42, wC43]
  entries.push(entry22)
  wC39.entryH = wC40.entryH = wC41.entryH = wC42.entryH = wC43.entryH = entry22

  let entry23 = new Entry(4, 0)
  entry23.cellsH = [wC44, wC45]
  entries.push(entry23)
  wC44.entryH = wC45.entryH = entry23

  let entry24 = new Entry(21, 0)
  entry24.cellsH = [wC46, wC47, wC48]
  entries.push(entry24)
  wC46.entryH = wC47.entryH = wC48.entryH = entry24

  return {
    entries,
    allWhiteCells
  }
}

export function EXPERT_9X17() {
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
  let wC27 = new WhiteCell()
  let wC28 = new WhiteCell()
  let wC29 = new WhiteCell()
  let wC30 = new WhiteCell()
  let wC31 = new WhiteCell()
  let wC32 = new WhiteCell()
  let wC33 = new WhiteCell()
  let wC34 = new WhiteCell()
  let wC35 = new WhiteCell()
  let wC36 = new WhiteCell()
  let wC37 = new WhiteCell()
  let wC38 = new WhiteCell()
  let wC39 = new WhiteCell()
  let wC40 = new WhiteCell()
  let wC41 = new WhiteCell()
  let wC42 = new WhiteCell()
  let wC43 = new WhiteCell()
  let wC44 = new WhiteCell()
  let wC45 = new WhiteCell()
  let wC46 = new WhiteCell()
  let wC47 = new WhiteCell()
  let wC48 = new WhiteCell()
  let wC49 = new WhiteCell()
  let wC50 = new WhiteCell()
  let wC51 = new WhiteCell()
  let wC52 = new WhiteCell()
  let wC53 = new WhiteCell()
  let wC54 = new WhiteCell()
  let wC55 = new WhiteCell()
  let wC56 = new WhiteCell()
  let wC57 = new WhiteCell()
  let wC58 = new WhiteCell()
  let wC59 = new WhiteCell()
  let wC60 = new WhiteCell()
  let wC61 = new WhiteCell()
  let wC62 = new WhiteCell()
  let wC63 = new WhiteCell()
  let wC64 = new WhiteCell()
  let wC65 = new WhiteCell()
  let wC66 = new WhiteCell()
  let wC67 = new WhiteCell()
  let wC68 = new WhiteCell()
  let wC69 = new WhiteCell()
  let wC70 = new WhiteCell()
  let wC71 = new WhiteCell()
  let wC72 = new WhiteCell()
  let wC73 = new WhiteCell()
  let wC74 = new WhiteCell()
  let wC75 = new WhiteCell()
  let wC76 = new WhiteCell()
  let wC77 = new WhiteCell()
  let wC78 = new WhiteCell()
  let wC79 = new WhiteCell()
  let wC80 = new WhiteCell()
  let wC81 = new WhiteCell()
  let wC82 = new WhiteCell()
  let wC83 = new WhiteCell()
  let wC84 = new WhiteCell()
  let wC85 = new WhiteCell()
  let wC86 = new WhiteCell()
  let wC87 = new WhiteCell()
  let wC88 = new WhiteCell()
  let wC89 = new WhiteCell()
  let wC90 = new WhiteCell()
  let wC91 = new WhiteCell()
  let wC92 = new WhiteCell()
  let wC93 = new WhiteCell()
  let wC94 = new WhiteCell()
  let wC95 = new WhiteCell()
  let wC96 = new WhiteCell()
  let wC97 = new WhiteCell()
  let wC98 = new WhiteCell()
  let wC99 = new WhiteCell()
  let wC100 = new WhiteCell()
  let wC101 = new WhiteCell()
  let wC102 = new WhiteCell()
  let wC103 = new WhiteCell()
  let wC104 = new WhiteCell()
  let wC105 = new WhiteCell()
  let wC106 = new WhiteCell()
  let wC107 = new WhiteCell()
  
  const entries = []
  const allWhiteCells = [wC1, wC2, wC3, wC4, wC5, wC6, wC7, wC8,
                   wC9, wC10, wC11, wC12, wC13, wC14, wC15,
                   wC16, wC17, wC18, wC19, wC20, wC21, wC22,
                   wC23, wC24, wC25, wC26, wC27, wC28, wC29,
                   wC30, wC31, wC32, wC33, wC34, wC35, wC36,
                   wC37, wC38, wC39, wC40, wC41, wC42, wC43,
                   wC44, wC45, wC46, wC47, wC48, wC49, wC50,
                   wC51, wC52, wC53, wC54, wC55, wC56, wC57,
                   wC58, wC59, wC60, wC61, wC62, wC63, wC64,
                   wC65, wC66, wC67, wC68, wC69, wC70, wC71,
                   wC72, wC73, wC74, wC75, wC76, wC77, wC78,
                   wC79, wC80, wC81, wC82, wC83, wC84, wC85,
                   wC86, wC87, wC88, wC89, wC90, wC91, wC92,
                   wC93, wC94, wC95, wC96, wC97, wC98, wC99,
                   wC100, wC101, wC102, wC103, wC104, wC105,
                   wC106, wC107]

  let entry1 = new Entry(0, 12)
  entry1.cellsV = [wC1, wC6]
  entries.push(entry1)
  wC1.entryV = wC6.entryV = entry1
  
  let entry2 = new Entry(0, 29)
  entry2.cellsV = [wC2, wC7, wC14, wC21, wC28, wC33, wC39]
  entries.push(entry2)
  wC2.entryV = wC7.entryV = wC14.entryV = wC21.entryV = wC28.entryV = wC33.entryV = wC39.entryV = entry2
  
  let entry3 = new Entry(0, 14)
  entry3.cellsV = [wC3, wC9, wC17]
  entries.push(entry3)
  wC3.entryV = wC9.entryV = wC17.entryV = entry3
  
  let entry4 = new Entry(0, 26)
  entry4.cellsV = [wC4, wC10, wC18, wC23, wC30]
  entries.push(entry4)
  wC4.entryV = wC10.entryV = wC18.entryV = wC23.entryV = wC30.entryV = entry4
  
  let entry5 = new Entry(0, 10)
  entry5.cellsV = [wC5, wC11]
  entries.push(entry5)
  wC5.entryV = wC11.entryV = entry5


  
  let entry6 = new Entry(7, 0)
  entry6.cellsH = [wC1, wC2]
  entries.push(entry6)
  wC1.entryH = wC2.entryH = entry6

  let entry7 = new Entry(10, 4)
  entry7.cellsH = [wC3, wC4, wC5]
  entry7.cellsV = [wC8, wC16]
  entries.push(entry7)
  wC3.entryH = wC4.entryH = wC5.entryH = entry7
  wC8.entryV = wC16.entryV = entry7

  let entry8 = new Entry(0, 9)
  entry8.cellsV = [wC12, wC19, wC25]
  entries.push(entry8)
  wC12.entryV = wC19.entryV = wC25.entryV = entry8

  let entry9 = new Entry(0, 20)
  entry9.cellsV = [wC13, wC20, wC26]
  entries.push(entry9)
  wC13.entryV = wC20.entryV = wC26.entryV = entry9



  let entry10 = new Entry(17, 0)
  entry10.cellsH = [wC6, wC7]
  entries.push(entry10)
  wC6.entryH = wC7.entryH = entry10

  let entry11 = new Entry(38, 6)
  entry11.cellsH = [wC8, wC9, wC10, wC11, wC12, wC13]
  entry11.cellsV = [wC15, wC22]
  entries.push(entry11)
  wC8.entryH = wC9.entryH = wC10.entryH = wC11.entryH = wC12.entryH = wC13.entryH = entry11
  wC15.entryV = wC22.entryV = entry11



  let entry12 = new Entry(23, 0)
  entry12.cellsH = [wC14, wC15, wC16, wC17, wC18]
  entries.push(entry12)
  wC14.entryH = wC15.entryH = wC16.entryH = wC17.entryH = wC18.entryH = entry12

  let entry13 = new Entry(10, 25)
  entry13.cellsH = [wC19, wC20]
  entry13.cellsV = [wC24, wC31, wC37, wC42]
  entries.push(entry13)
  wC19.entryH = wC20.entryH = entry13
  wC24.entryV = wC31.entryV = wC37.entryV = wC42.entryV = entry13



  let entry14 = new Entry(9, 13)
  entry14.cellsH = [wC21, wC22]
  entry14.cellsV = [wC27, wC32]
  entries.push(entry14)
  wC21.entryH = wC22.entryH = entry14
  wC27.entryV = wC32.entryV = entry14

  let entry15 = new Entry(15, 11)
  entry15.cellsH = [wC23, wC24, wC25, wC26]
  entry15.cellsV = [wC29, wC36]
  entries.push(entry15)
  wC23.entryH = wC24.entryH = wC25.entryH = wC26.entryH = entry15
  wC29.entryV = wC36.entryV = entry15



  let entry16 = new Entry(14, 0)
  entry16.cellsH = [wC27, wC28]
  entries.push(entry16)
  wC27.entryH = wC28.entryH = entry16

  let entry17 = new Entry(0, 20)
  entry17.cellsV = [wC34, wC40, wC45]
  entries.push(entry17)
  wC34.entryV = wC40.entryV = wC45.entryV = entry17

  let entry18 = new Entry(11, 27)
  entry18.cellsH = [wC29, wC30, wC31]
  entry18.cellsV = [wC35, wC41, wC46, wC53, wC60]
  entries.push(entry18)
  wC29.entryH = wC30.entryH = wC31.entryH = entry18
  wC35.entryV = wC41.entryV = wC46.entryV = wC53.entryV = wC60.entryV = entry18

  let entry19 = new Entry(0, 10)
  entry19.cellsV = [wC38, wC43, wC49, wC56]
  entries.push(entry19)
  wC38.entryV = wC43.entryV = wC49.entryV = wC56.entryV = entry19



  let entry20 = new Entry(21, 0)
  entry20.cellsH = [wC32, wC33, wC34, wC35, wC36]
  entries.push(entry20)
  wC32.entryH = wC33.entryH = wC34.entryH = wC35.entryH = wC36.entryH = entry20

  let entry21 = new Entry(11, 0)
  entry21.cellsH = [wC37, wC38]
  entries.push(entry21)
  wC37.entryH = wC38.entryH = entry21

  let entry22 = new Entry(0, 19)
  entry22.cellsV = [wC44, wC50, wC57]
  entries.push(entry22)
  wC44.entryV = wC50.entryV = wC57.entryV = entry22



  let entry23 = new Entry(11, 0)
  entry23.cellsH = [wC39, wC40, wC41]
  entries.push(entry23)
  wC39.entryH = wC40.entryH = wC41.entryH = entry23

  let entry24 = new Entry(0, 19)
  entry24.cellsV = [wC47, wC54, wC61]
  entries.push(entry24)
  wC47.entryV = wC54.entryV = wC61.entryV = entry24

  let entry25 = new Entry(13, 17)
  entry25.cellsH = [wC42, wC43, wC44]
  entry25.cellsV = [wC48, wC55, wC62, wC67, wC73]
  entries.push(entry25)
  wC42.entryH = wC43.entryH = wC44.entryH = entry25
  wC48.entryV = wC55.entryV = wC62.entryV = wC67.entryV = wC73.entryV = entry25



  let entry26 = new Entry(0, 18)
  entry26.cellsV = [wC51, wC58, wC64]
  entries.push(entry26)
  wC51.entryV = wC58.entryV = wC64.entryV = entry26

  let entry27 = new Entry(27, 11)
  entry27.cellsH = [wC45, wC46, wC47, wC48]
  entry27.cellsV = [wC52, wC59, wC65, wC70]
  entries.push(entry27)
  wC45.entryH = wC46.entryH = wC47.entryH = wC48.entryH = entry27
  wC52.entryV = wC59.entryV = wC65.entryV = wC70.entryV = entry27

  let entry28 = new Entry(3, 0)
  entry28.cellsH = [wC49, wC50]
  entries.push(entry28)
  wC49.entryH = wC50.entryH = entry28



  let entry29 = new Entry(11, 0)
  entry29.cellsH = [wC51, wC52]
  entries.push(entry29)
  wC51.entryH = wC52.entryH = entry29

  let entry30 = new Entry(14, 0)
  entry30.cellsH = [wC53, wC54, wC55]
  entries.push(entry30)
  wC53.entryH = wC54.entryH = wC55.entryH = entry30

  let entry31 = new Entry(10, 17)
  entry31.cellsH = [wC56, wC57]
  entry31.cellsV = [wC63, wC68, wC74]
  entries.push(entry31)
  wC56.entryH = wC57.entryH = entry31
  wC63.entryV = wC68.entryV = wC74.entryV = entry31



  let entry32 = new Entry(14, 0)
  entry32.cellsH = [wC58, wC59]
  entries.push(entry32)
  wC58.entryH = wC59.entryH = entry32

  let entry33 = new Entry(17, 26)
  entry33.cellsH = [wC60, wC61, wC62, wC63]
  entry33.cellsV = [wC66, wC71, wC77, wC84]
  entries.push(entry33)
  wC60.entryH = wC61.entryH = wC62.entryH = wC63.entryH = entry33
  wC66.entryV = wC71.entryV = wC77.entryV = wC84.entryV = entry33

  let entry34 = new Entry(0, 33)
  entry34.cellsV = [wC69, wC75, wC80, wC87, wC94, wC101, wC106]
  entries.push(entry34)
  wC69.entryV = wC75.entryV = wC80.entryV = wC87.entryV = entry34



  let entry35 = new Entry(11, 0)
  entry35.cellsH = [wC64, wC65, wC66]
  entries.push(entry35)
  wC64.entryH = wC65.entryH = wC66.entryH = entry35

  let entry36 = new Entry(12, 12)
  entry36.cellsH = [wC67, wC68, wC69]
  entry36.cellsV = [wC72, wC79]
  entries.push(entry36)
  wC67.entryH = wC68.entryH = wC69.entryH = entry36
  wC72.entryV = wC79.entryV = entry36

  let entry37 = new Entry(0, 5)
  entry37.cellsV = [wC76, wC81]
  entries.push(entry37)
  wC76.entryV = wC81.entryV = entry37



  let entry38 = new Entry(8, 0)
  entry38.cellsH = [wC70, wC71]
  entries.push(entry38)
  wC70.entryH = wC71.entryH = entry38

  let entry39 = new Entry(22, 27)
  entry39.cellsH = [wC72, wC73, wC74, wC75, wC76]
  entry39.cellsV = [wC78, wC85, wC90, wC98, wC104]
  entries.push(entry39)
  wC72.entryH = wC73.entryH = wC74.entryH = wC75.entryH = wC76.entryH = entry39
  wC78.entryV = wC85.entryV = wC90.entryV = wC98.entryV = wC104.entryV = entry39



  let entry40 = new Entry(0, 9)
  entry40.cellsV = [wC82, wC88, wC95]
  entries.push(entry40)
  wC82.entryV = wC88.entryV = wC95.entryV = entry40

  let entry41 = new Entry(12, 20)
  entry41.cellsH = [wC77, wC78, wC79]
  entry41.cellsV = [wC83, wC89, wC96]
  entries.push(entry41)
  wC77.entryH = wC78.entryH = wC79.entryH = entry41
  wC83.entryV = wC89.entryV = wC96.entryV = entry41
  
  let entry42 = new Entry(13, 11)
  entry42.cellsH = [wC80, wC81]
  entry42.cellsV = [wC86, wC93]
  entries.push(entry42)
  wC80.entryH = wC81.entryH = entry42
  wC86.entryV = wC93.entryV = entry42



  let entry43 = new Entry(16, 0)
  entry43.cellsH = [wC82, wC83, wC84, wC85]
  entries.push(entry43)
  wC82.entryH = wC83.entryH = wC84.entryH = wC85.entryH = entry43

  let entry44 = new Entry(0, 8)
  entry44.cellsV = [wC91, wC99, wC105]
  entries.push(entry44)
  wC91.entryV = wC99.entryV = wC105.entryV = entry44

  let entry45 = new Entry(12, 8)
  entry45.cellsH = [wC86, wC87]
  entry45.cellsV = [wC92, wC100]
  entries.push(entry45)
  wC86.entryH = wC87.entryH = entry45
  wC92.entryV = wC100.entryV = entry45



  let entry46 = new Entry(10, 0)
  entry46.cellsH = [wC88, wC89]
  entries.push(entry46)
  wC88.entryH = wC89.entryH = entry46

  let entry47 = new Entry(21, 7)
  entry47.cellsH = [wC90, wC91, wC92, wC93, wC94]
  entry47.cellsV = [wC97, wC103]
  entries.push(entry47)
  wC90.entryH = wC91.entryH = wC92.entryH = wC93.entryH = wC94.entryH = entry47
  wC97.entryV = wC103.entryV = entry47

  let entry48 = new Entry(0, 11)
  entry48.cellsV = [wC102, wC107]
  entries.push(entry48)
  wC102.entryV = wC107.entryV =  entry48



  let entry49 = new Entry(36, 0)
  entry49.cellsH = [wC95, wC96, wC97, wC98, wC99, wC100]
  entries.push(entry49)
  wC95.entryH = wC96.entryH = wC97.entryH = wC98.entryH = wC99.entryH = wC100.entryH = entry49
  
  let entry50 = new Entry(8, 0)
  entry50.cellsH = [wC101, wC102]
  entries.push(entry50)
  wC101.entryH = wC102.entryH = entry50



  let entry51 = new Entry(10, 0)
  entry51.cellsH = [wC103, wC104, wC105]
  entries.push(entry51)
  wC103.entryH = wC104.entryH = wC105.entryV = entry51

  let entry52 = new Entry(17, 0)
  entry52.cellsH = [wC106, wC107]
  entries.push(entry52)
  wC106.entryH = wC107.entryH = entry52

  return {
    entries,
    allWhiteCells
  }
}