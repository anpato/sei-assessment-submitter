interface file {
  folder: string
  fileName: string
}
export default (file: file): string => `
const fs = require('fs')
class GradeTests {
    constructor() {
      this.numPassed = 0
      this.totalTests = 10
      this.result = ''
    }
  
    incrementPassed() {
      this.numPassed++
    }
  
    displayScore() {
      let dec = this.numPassed / this.totalTests
      return  (dec*100).toFixed(2)
    }
  }
  let gradeBook
  beforeAll(()=> {
    gradeBook = new GradeTests()
  })

  afterAll(()=> {
      let grade = gradeBook.displayScore()+ '%'

    console.log("Your Result is: ", grade + " out of 100%")
    fs.unlinkSync('${process.cwd()}/tests/${
  file.fileName.split('.')[0]
}.test.js')
  })

describe('Your Assessment Results', () => {
    
      let grades = new GradeTests()
    const functions = require('../assessments/${file.folder}/${file.fileName}')
    const { cars, reverseArr } = functions
    let passed = 0
    test('reverseArr should do something', () => {
      let reversed = cars.reverse()
      expect(reverseArr()).toEqual(reversed)
      gradeBook.incrementPassed()
    })
  })

  `
