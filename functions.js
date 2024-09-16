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

const { animal } = require("./data");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. Open up the file `functions.js` in your editor.
// 2. Implement a function declaration called `search` that:
function search(animals, name) {
    //iterates through the animals array
    for (var i = 0; i < animals.length; i++) {
        // check if the animal name is the search name
        if (animals[i].name === name) {
            return animals[i];
        }
    }
    return null; 
}
//   - Takes a paramater representing an Array of `animals`.
//   - Takes a paramater representing a String, the name of an animal on which to perform a search.
//   - Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
//   - Returns `null` if no animal with that name exists
// 3. Use the search bar at the top of the page to make sure your function works.


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. Write a function declaration called `replace` with a signature of `replace(animals, name, replacement) { //... } ` that:
//     - Takes 3 parameters, an Array of animals, a String representing  the name of an animal on which to perform a search, and an Object that represents the replacement animal.
//     - If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
//     - Otherwise do nothing.
//   2. Preview the `index.html` page to test it on the website.
function replace(animals, name, replacement) {
    for(i = 0; i < animals.length; i++) {
        if(animals[i].name === name) {
            animals[i] = replacement;
            return;
        }
    }

}

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