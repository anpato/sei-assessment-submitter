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
    return (dec * 100).toFixed(2)
  }
}
let gradeBook
beforeAll(() => {
  gradeBook = new GradeTests()
})

afterAll(() => {
  let grade = gradeBook.displayScore() + '%'

  console.log('Your Result is: ', grade + ' out of 100%')
      fs.unlinkSync('${process.cwd()}/tests/${
  file.fileName.split('.')[0]
}.test.js')
})

describe('Your Assessment Results', () => {
  let grades = new GradeTests()
  const functions = require('${process.cwd()}/assessment')
  const {
    cars,
    findTheVin,
    reverseArr,
    lookUpVin,
    whatColor,
    giveMeAllTheModels,
    sortedSpeeds,
    goGreen,
    fixError,
    checkIfCarIsDangerous,
    createADescription
  } = functions
  let passed = 0
  test('reverseArr should do something', () => {
    let reversed = cars.reverse()
    expect(reverseArr()).toEqual(reversed)
    gradeBook.incrementPassed()
  })
  test('findTheVin should return a single car object where the vin = NJAA6JLYVPNN93642', () => {
    let found = cars.find((c) => c.info.vin === 'NJAA6JLYVPNN93642')
    expect(findTheVin()).toEqual(found)
    gradeBook.incrementPassed()
  })
  test('lookupVin should return all of the car objects where the vin includes a 5', () => {
    let found = cars.filter((c) => c.info.vin.includes('5'))
    expect(lookUpVin()).toEqual(found)
    gradeBook.incrementPassed()
  })
  test("whatColor should return the color of the car who's model = Maserati Grand Caravan", () => {
    let found = cars.find((c) => c.model === 'Maserati Grand Caravan').color
    expect(whatColor()).toEqual(found)
    gradeBook.incrementPassed()
  })
  test('giveMeAllTheModels should return an array of all of the car models', () => {
    let found = cars.map((c) => c.model)
    expect(giveMeAllTheModels()).toEqual(found)
    gradeBook.incrementPassed()
  })
  test('sortedSpeeds should return an array of all of the cars sorted by topSpeed from largest to smallest', () => {
    let found = cars.sort((a, b) => b.info.topSpeed - a.info.topSpeed)
    expect(sortedSpeeds()).toEqual(found)
    gradeBook.incrementPassed()
  })
  test('goGreen should return an array of cars where the fuel is either Hybrid or Electric', () => {
    let found = cars.filter(
      (c) => c.info.fuel === 'Electric' || c.info.fuel === 'Hybrid'
    )
    expect(goGreen()).toEqual(found)
    gradeBook.incrementPassed()
  })
  test('fixError should remove topSpeed from the info object of each car and put it back within the first layer', () => {
    let carArr = [...cars]
    let found = carArr.map((c) => {
      let tS = c.info.topSpeed

      let obj = {
        ...c,
        info: {
          vin: c.info.vin,
          fuel: c.info.fuel,
          type: c.info.type
        },
        topSpeed: tS
      }

      return obj
    })
    expect(fixError()).toEqual(found)
    gradeBook.incrementPassed()
  })

  test('checkIfCarIsDangerous should check the topSpeed of each vehicle and return the appropriate statement in an array', () => {
    let found = cars.map((c) => {
      switch (true) {
        case c.info.topSpeed > 120 && c.info.topSpeed < 150:
          return 'The ' +c.model +' is just right.'
        case c.info.topSpeed < 120:
          return 'The ' +c.model +' is family friendly.'
        default:
          return 'The ' +c.model +' is too dangerous'
      }
    })
    expect(checkIfCarIsDangerous()).toEqual(found)
    gradeBook.incrementPassed()
  })
  test('createADescription should return an array stating the model has a top speed of...', () => {
    let found = cars.reduce((accumulator, car) => {
      accumulator.push(
        'The'+ ' ' +car.color  +' '+ car.model +' ' + 'has a top speed of' +' '+car.info.topSpeed
      )
      return accumulator
    }, [])}
    expect(createADescription()).toEqual(found)
    gradeBook.incrementPassed()
  })
})

  `
