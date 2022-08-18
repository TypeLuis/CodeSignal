// Question 1 - Add

function Question1(param1, param2) {
    return param1 + param2
}

// console.log(Question1(1, 3))


// Question 2 - centuryFromYear

function Question2(year) {
    const cent = year / 100

    // checks if there's a remainder in centuary 
    console.log(cent % 1 != 0)

    // ~~ operator removes the dedcimal and keeps the original number
    return cent % 1 != 0 ? ~~cent + 1 : cent
}

// console.log(Question2(1905))



// Question 3 - checkPalindrome

function Question3(inputString) {
    const reverse = inputString.split('').reverse().join('')
    return inputString === reverse
}

console.log(Question3('kqlk'))