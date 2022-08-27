// Question 1 - Add

const theJourneyBegins = {}

theJourneyBegins.Question1 = function (param1, param2) {
    return param1 + param2
}

// console.log(Question1(1, 3))


// Question 2 - centuryFromYear

theJourneyBegins.Question2 = function (year) {
    const cent = year / 100

    // checks if there's a remainder in centuary 
    console.log(cent % 1 != 0)

    // ~~ operator removes the dedcimal and keeps the original number
    return cent % 1 != 0 ? ~~cent + 1 : cent
}

// console.log(Question2(1905))



// Question 3 - checkPalindrome

theJourneyBegins.Question3 = function (inputString) {
    const reverse = inputString.split('').reverse().join('')
    return inputString.toLowerCase() === reverse.toLowerCase()
}

console.log(theJourneyBegins.Question3('Step on no pets'))

console.log(theJourneyBegins)

module.exports = theJourneyBegins