const theJourneyBegins = require('./Answers')

// test('Properly adds two numbers', () => { 
//     expect(
//         theJourneyBegins.Question1(1,4)
//     ).toBe(5)

//     expect(
//         theJourneyBegins.Question1(292,50234)
//     ).toBe(50526)


//     expect(
//         theJourneyBegins.Question1(132784,31774663)
//     ).toBe(31907447)
// })

const testForQuestion1 = (a, b, answer) => {
    test(`properly adds ${a} and ${b} to ${answer}`, () => {
        expect(
        theJourneyBegins.Question1(a,b)
    ).toBe(answer)
    })
}

describe('Properly adds two numbers', () => {
    testForQuestion1(1,4,5);
    testForQuestion1(292,50234,50526);
    testForQuestion1(132784,31774663,31907447);
})




const testForQuestion2 = (year, century) => {
    test(`determines the year ${year} to be in ${century} century`, () => {
        expect(
        theJourneyBegins.Question2(year)
    ).toBe(century)
    })
}

describe('Given a year, determine what century is it in \n Example 1: year = 1905 should give the answer 20 \n Example 2: year = 1700 should give the answer 17', () => {
    testForQuestion2(1905,20)
    testForQuestion2(1700,17)
    testForQuestion2(1601,17)
    testForQuestion2(2022,21)
})




const testForQuestion3 = (word, answer) => {
    test(`checking if ${word} is ${answer}`, () => {
        expect(
        theJourneyBegins.Question3(word)
    ).toBe(answer)
    })
}


describe('Checks for Palindrome', () => {
    testForQuestion3('rotator',true)
    testForQuestion3("dictionary", false)
    testForQuestion3("onomatopoeia", false)
    testForQuestion3("step on no pets", true)
})