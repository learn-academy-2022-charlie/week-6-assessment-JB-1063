// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { NUMBER_UNARY_OPERATORS } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("persCap", () => {
const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
it ("returns an array with a sentence about each person with their name capitalized", () => {
  expect(persCap("people")).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
})
})

// Red test: failed
// Test Suites: 2 failed, 2 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total


// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// b) Create the function that makes the test pass.

//  pseudocode: this is my line of thinking but the code did not pass.
// create a function called sentenceCap
// that takes in an array of objects
// returns an array with a sentence about each person with their name capitalized.
// loop through each object
// capitalizing each word in the name string
// adding the capitalized name to a string with the occupation string with the word "is" in between.

const sentenceCap = (array) => {
let toStr = []
for (let i = 0; i < array.length; i++){
  toStr += "${nameCap} is ${[i].occupation}"

const capName = (str) => {
   str[0].toUpperCase + str.slice(1).toLocaleLowerCase;
                      
const restOfName = str.split(' ').map(capName);
const nameCap = words.join(' ');              
                   
}
}
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remDivThree", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]

  it("returns an array of only the remainders of the numbers when divided by 3", () => {
    expect(remDivThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remDivThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// Red Test: failed
// Test Suites: 2 failed, 2 total
// Tests:       1 failed, 1 total


// const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


// b) Create the function that makes the test pass.


// initial pseudocode
// create a function that takes in a mixed data array
// returns an array of only the REMAINDERS of the numbers when divided by 3.
// establish a new array where the new data will be pushed
//loop through the array
// each item being filtered if it is a number
// when a number is found, it is divided by 3
// and the remainder is pushed into the new array
// code did not pass green test


const remDivThree = (array) => {
let newArray = []
for(var i = 0; array.length; i++) {
  if (typeof arr[i] === 'number'){
    newArray.push(arr[i] % 3)
  }
}
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumNumCubed", () => {
  const cubeAndSum1 = [2, 3, 4]
  const cubeAndSum2 = [0, 5, 10]
      it("returns the sum of all the numbers cubed", () => {
      expect(sumNumCubed(cubeAndSum1)).toEqual(99)
      expect(sumNumCubed(cubeAndSum2)).toEqual(1125)
    })
  })

// Red Test: failed
// Test Suites: 2 failed, 2 total
// Tests:       1 failed, 1 total





// const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
// const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// b) Create the function that makes the test pass.
// initial pseudocode
// create a function  
// that takes in an array of number
// returns the sum of all the numbers cubed.
// establish a total to zero
// loop through the array
// each item in the array is cubed, and the value added to the total
// code did not pass green test

   const sumNumCubed = (array) => {
    let total = 0
    for (var i = 0; i < array.length; i++)
    total += Math.pow([i], 3)
   }

   

