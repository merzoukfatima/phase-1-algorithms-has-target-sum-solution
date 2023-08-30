function hasTargetSum(array, target) {
  // Write your algorithm here

  /* create an object to keep track of all the numbers we've seen */
  // 1 step
  const seenNumbers = {};
  /* iterate over the array of numbers*/
  for (const number of array) {
    /* for the current number, identify a complementary number that adds to our target
    (for example: if our number is 2, and the target is 5, the complementary number is 3)*/
    // n steps
    const complement = target - number;
    // check if any of the keys in our object is the complement to the current number
    // if so, return true
    // n steps
    if (seenNumbers[complement]) return true;
    /* save the current number as the key on our object so we can check it later against other numbers*/
    // n steps
    seenNumbers[number] = true;
  }
  /* if we reach the end of the array, return false */
  // 1 step
  return false;
}

/* 
  Write the Big O time complexity of your function here
  0(n)=3n + 2
  O(n)=n
*/

/* 
  Add your pseudocode here

  create an object to keep track of all the numbers we've seen
iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  check if any of the keys in our object is the complement to the current number
    if so, return true
  save the current number as the key on our object so we can check it later against other numbers
if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here

  I need to make a hasTargetSum function that checks if two numbers in an array add up to some target number. For example, if the array is [1,2,3,4] and the target number is 6, I know that 2 and 4 add up to 6, so I should return true. If I have the same array and the target is 10, no two numbers in the array add up to 10, so I should return false.
*/

// You can run `node index.js` to view these console logs
// add your own custom tests in here
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
