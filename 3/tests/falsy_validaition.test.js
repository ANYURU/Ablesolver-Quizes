const determineFalsy = require('../falsy_validation')

// Testing for determineFalsy to be a function
test('Expect detemineFalsy to be a function',() => {
    expect(typeof determineFalsy).toBe('function')
})

//Testing for Undefined to be falsy
test('Expect undefined toBe falsy', () => {
    expect(determineFalsy(undefined)).toBe(true)
}) 

//Testing for an Empty string toBe falsy
test('Expect an empty string toBe falsy', () => {
    expect(determineFalsy('')).toBe(true)
}) 

// Testing for NaN toBe falsy
test('Expect NaN toBe falsy', () => {
    expect(determineFalsy("davie"/3)).toBe(true)
}) 

// Testing for null to be falsy
test('Expect null toBe falsy ', ()=> {
    expect(determineFalsy(null)).toBe(true)
})

// Testing for false to be falsy
test('Expect false toBe falsy', () => {
    expect(determineFalsy(false)).toBe(true)
})

// Testing for 0 to be falsy
test('Expect 0 toBe falsy', () => {
    expect(determineFalsy(0)).toBe(true)
})


// Negatives
// Testing for a number not to be falsy
test('Expect a number not toBe falsy ', () => {
    expect(determineFalsy(5)).not.toBe(true)
})

// Testing for a non empty string not to be falsy
test('Expect a non empty string not toBe falsy', () => {
    expect(determineFalsy('Nakityo Joanita')).not.toBe(true)
})

// Testing for an object not to be falsy
test('Expect an object not toBe falsy ', () => {
    expect(determineFalsy(
        [
            1,2, 
            {
                'Davie':'Basketball', 
                'Charles':'Football', 
                'Abudi':'B-Boy'
            }
        ]
        )).not.toBe(true)
})
