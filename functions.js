/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Imagine that our website has a profile page for each animal. On this profile page we can see a list of each animal's friend on the website. Just like how people have a list of friends or followers on facebook or instagram. What would be a good data structure to hold this list of friends?

//  1. [ ] Choose a data structure for this **list** of friends.
// using an array for 
//  2. [ ] Write a comment in your code that explains why you chose this data structure.
//
//  3. [ ] Create a variable called `friends` and assign it to the data structure that you chose.
var friends = 
//  4. [ ] Take a look at the documentation for `Math.random` here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//  5. [ ] Write a function called `getRandom` that takes our `animals` array and returns  a random `index` of the input array, using `Math.random`
//  6. [ ] Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
//  7. [ ] `console.log` `friends`.
//  8. [ ] Using **bracket notation**, add the `friends` list as a **property** also named `friends` on one of the animals in the `animals` array
//  9. [ ] `console.log` your work.


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}