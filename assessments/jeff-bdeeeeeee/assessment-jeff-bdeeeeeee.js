const cars = [
  {
    model: 'Land Rover Corvette',
    color: 'fuchsia',
    info: {
      topSpeed: 137,
      vin: '9OHXCSNQ6UM658375',
      fuel: 'Diesel',
      type: 'Sedan'
    }
  },
  {
    model: 'Land Rover Civic',
    color: 'orange',
    info: {
      topSpeed: 112,
      vin: '2Z92JJWAUQYJ26586',
      fuel: 'Electric',
      type: 'Minivan'
    }
  },
  {
    model: 'Cadillac Corvette',
    color: 'purple',
    info: {
      topSpeed: 98,
      vin: 'OX4PIVLE8WXL37525',
      fuel: 'Diesel',
      type: 'Extended Cab Pickup'
    }
  },
  {
    model: 'Maserati Grand Caravan',
    color: 'maroon',
    info: {
      topSpeed: 192,
      vin: '50FX85YAJSKV30015',
      fuel: 'Diesel',
      type: 'Coupe'
    }
  },
  {
    model: 'BMW Expedition',
    color: 'yellow',
    info: {
      topSpeed: 240,
      vin: 'YBBC1IW4W4RY84744',
      fuel: 'Gasoline',
      type: 'Sedan'
    }
  },
  {
    model: 'Mercedes Benz LeBaron',
    color: 'magenta',
    info: {
      topSpeed: 83,
      vin: 'HHN1O6H32AKH20687',
      fuel: 'Diesel',
      type: 'Extended Cab Pickup'
    }
  },
  {
    model: 'Honda Impala',
    color: 'maroon',
    info: {
      topSpeed: 172,
      vin: 'NJAA6JLYVPNN93642',
      fuel: 'Electric',
      type: 'Hatchback'
    }
  },
  {
    model: 'Maserati Charger',
    color: 'magenta',
    info: {
      topSpeed: 185,
      vin: 'LQ1XEWD3UXKG54011',
      fuel: 'Diesel',
      type: 'Cargo Van'
    }
  },
  {
    model: 'Aston Martin F-150',
    color: 'maroon',
    info: {
      topSpeed: 199,
      vin: 'DFW2AKU0B2GE70317',
      fuel: 'Electric',
      type: 'Crew Cab Pickup'
    }
  },
  {
    model: 'Tesla Civic',
    color: 'red',
    info: {
      topSpeed: 158,
      vin: '45EAYQJHGHSR57256',
      fuel: 'Electric',
      type: 'Coupe'
    }
  }
]

const reverseArr = function () {
  // Create an empty array,
  // Loop through the car array and add all cars to the empty array but in reverse order
  // return the new reversed array
  return cars.reverse()
}

const findTheVin = function () {
  console.log(cars.find((c) => c.info.vin === 'NJAA6JLYVPNN93642'))
}

const lookUpVin = function () {
  // console.log(cars.filter((c) => c.info.vin.includes('5')))
}

const whatColor = function () {
  // Return the color of the car whose model is 'Aston Martin ATS' without specifying its index in the array
}

const giveMeAllTheModels = function () {
  // Using the cars array, return all of the model's in a new array.
  // SHOULD RETURN: ["Honda XTS", "Ferrari Expedition", "Honda Prius", "Bugatti Camry", "Audi Corvette", "Hyundai Malibu", "Jeep Accord", "Fiat Camry", "Jaguar Volt", "Aston Martin ATS"]
}

const sortedSpeeds = function () {
  // Using .sort(), sort all of the topSpeeds from largest to smallest
}

const goGreen = function () {
  // Create a new array that contains all of the cars that have 'Electric' and 'Hybrid' fuel
  // HINT: .push(), .filter(), .unshift()
  /**CODE GOES HERE */
}

const fixError = function () {
  // Uhoh our data model is incorrect, the top speed should not be in the info object.
  // Remove topSpeed from the info object and add it to the main object after info
}

const checkIfCarIsDangerous = function () {
  // console.log(
  //   cars.map((c) => {
  //     switch (true) {
  //       case c.info.topSpeed > 120 && c.info.topSpeed < 150:
  //         return `The ${c.model} is just right.`
  //       case c.info.topSpeed < 120:
  //         return `The ${c.model} is family friendly.`
  //       default:
  //         return `The ${c.model} is too dangerous`
  //     }
  //   })
  // )
}

const createADescription = function () {
  // Using the .reduce() method, return an array with a sentence ('string') for each car in this format:
  // 'The red Bugatti Macaroni has a top speed of 150'
  // console.log(
  //   cars.reduce((accumulator, car) => {
  //     accumulator.push(
  //       `The ${car.color} ${car.model} has a top speed of ${car.info.topSpeed}`
  //     )
  //     return accumulator
  //   }, [])
  // )
}

module.exports = {
  cars,
  reverseArr,
  findTheVin,
  lookUpVin,
  whatColor,
  giveMeAllTheModels,
  sortedSpeeds,
  goGreen,
  fixError,
  checkIfCarIsDangerous,
  createADescription
}
