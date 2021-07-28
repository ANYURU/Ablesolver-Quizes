/**
 * A falsy value is something which evaluates to FALSE.
 * There are only six falsy values in JavaScript: undefined, null, NaN, 0, "", and false.
 */

/**
 * @function determineFalsy - Takes in a variable determines if its falsy. 
 * @param {any} input - Input can be of any datatype acceptable in Javascript. 
 * @returns {boolean} - Returns true if the input is falsy and false if the input is truthy.
 */
/*

let determineFalsy = (input) => { 
    return input ? false: true;
}

module.exports = determineFalsy;
