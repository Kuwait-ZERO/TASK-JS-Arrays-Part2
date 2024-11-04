/**
 * isArrayLengthOdd(numbers):
 * - receives array numbers
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
 
  return numbers.length % 2 !== 0;
}
isArrayLengthOdd([1, 2, 3]) 
 isArrayLengthOdd([1, 2, 3, 4]) 
/**
 * isArrayLengthEven(numbers):
 * - receives array numbers
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  return numbers.length % 2 === 0;
}

isArrayLengthEven([1, 2, 3]) 
 isArrayLengthEven([1, 2, 3, 4]) 

/**
 * addLailaToArray(instructors):
 * - receives array instructors
 * - returns a new array that's a copy of array instructors with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
   instructors.push("Laila");
  return instructors;
}

/**
 * eliminateTeam(teams):
 * - receives array teams
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  // const lastOne = teams.pop();
  // console.log(teams); 
  return teams.pop();
}

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array fruits
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
   // check if the length of the array is even
   if (fruits.length % 2 === 0) {
    // calculate the starting index for the second half
    const startIndex = fruits.length / 2;
    // return the second half of the array
    return fruits.slice(startIndex);
  }
  // return an empty array if the length is odd
  return [];
}

/**
 * youGottaCalmDown(shout):
 * - receives a string shout
 * - returns the string shout with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwift!!!!!!!!!!!") -> "Taylor Schwift!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use string method .indexOf()
 * - Use string method .slice()
 */
function youGottaCalmDown(shout) {
   // finding the index of the first ! mark
   const exclamationIndex = shout.indexOf('!');

   // check if there are any ! marks in the shout
   if (exclamationIndex !== -1) {
     // slice the string up to the first ! mark and append a single exclamation mark
     return shout.slice(0, exclamationIndex) + '!';
   }
   
   // return the shout as it is if there are no ! marks
   return shout;
}

module.exports = {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
};
