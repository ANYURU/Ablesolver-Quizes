/**
 * A falsy value is something which evaluates to FALSE, for instance when checking a variable.
 * There are only six falsy values in JavaScript: undefined, null, NaN, 0, "" (empty string), and false of course.
 */

/**
 * @function determineFalsy - Takes in a variable determines if its falsy. 
 * @param {any} variable 
 * @returns returns true if a true if a value is falsy() and false otherwise
 */

let determineFalsy = (variable) => { 
    if(variable) return false;
    return true;
}

module.exports = determineFalsy;
