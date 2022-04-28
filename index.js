// We have an array of drivers with various information.
// We need to write functions using the filter() method so that PickMeUp Taxi service employees
// can easily query the data. Run the tests to see what conditions need to be met by each function
// before you start writing JavaScript code.

// You'll be writing three functions:
// findMatching- This function takes an array of drivers' names and a string as arguments,
//and returns the matching list of drivers. The function should be case insensitive.
// fuzzyMatch - This function takes an array of drivers' names
//and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
// matchName - This function takes an array of driver objects and a string as arguments.
//Each driver object has two properties: name and hometown.
//The function should return each element whose name property matches the provided string argument.

//fun1:
// write a function that takes two arguments; an array of driverNames and a 'str'**
// return matching list of drivers - needs to be case sensitive

//fun2:
// write a function that takes 2 arguments; an array of driverNames and a 'str'
// return names with provided letters

//fun3:
//  drivers[
//   {name: 'Joe', hometown: 'CA'}
//   {name: 'Bill', hometown: 'TX'}
// ]
// write a function that takes 2 arguments; an array of driverNames and a 'str'
// the Array will have objects with 2 properties (name/hometown)
// return each element whose name 'property' matches the provided argument

const findMatching = (driverNames, str) => {
  let matchingList = driverNames.filter(
    (name) => name.toLowerCase() === str.toLowerCase()
  ) //.toLowerCase === `${str}`)
  return matchingList
}

const fuzzyMatch = (driverNames, str) => {
  let namesArr = driverNames.filter((name) => name.slice(0, str.length) === str)
  return namesArr
}

const matchName = (drivers, str) => {
  console.log('drivers', drivers)
  let returnList = drivers.filter((driver) => driver.name === str)
  return returnList
}

//why doesn't chaining work here?
// const findMatching = (driverNames, str) => {
//     let matchingList = driverNames
//       .filter((obj) => obj === `${str.toUpperCase()}`)
//       .filter((obj) => obj === `${str.toUpperCase()}`)
//     return matchingList
//   }

// const fuzzyMatch = (driverNames, str) => {
//   let namesArr = driverNames.filter((name) => name.slice[0] === str.length[0])
//   return namesArr
// }
