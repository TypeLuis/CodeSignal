// Question1 - adjacentElementsProduct

function Question1(Arr) {
    // the first two multipied is maxNum
    let maxNumber = Arr[0] * Arr[1]

    for (let i = 0; Arr.length > i; i++) {
        const num = Arr[i] * Arr[i + 1]
        if (num > maxNumber) {
            maxNumber = num
        }
    }
    return maxNumber
}

function Question1Diff(Arr) {
    // Slices the first number of Arr then maps the sliced arr to multiply x with the index of the original arr
    return Math.max(...Arr.slice(1).map((x, i) => [x * Arr[i]]))
}

// console.log(Question1Diff([-23, 4, -3, 8, -12]))
// console.log(Question1([-23, 4, -3, 8, -12]))


// Question2 - ShapeArea

function Question2(n) {
    return n * n + (n - 1) * (n - 1);
}

// console.log(Question2(10))



// Question3 - Make Array Consecutive 2

function Question3(sequence) {
    console.log(Math.max(...sequence))
    return Math.max(...sequence)-Math.min(...sequence)+1-sequence.length
}

// console.log(Question3([100, 1, 15, 33]))



// Question4 - almostIncreasingSequence

function Question4(sequence) {
    let chance = 1
    // console.log('sequence', sequence)
    sequence.slice(1).map((x, i) => {
        const currentIndex = sequence[i]
        const NextIndex = x
        // console.log(currentIndex, NextIndex)

        // currentIndex >= NextIndex ? chance-- && sequence.splice(NextIndex, 1) : 
        if(currentIndex >= NextIndex){
            chance--
            if(currentIndex >= sequence[i+2] && NextIndex <= sequence[i-1]){
                chance --
            }
        }

    })
    console.log(sequence, chance)
    if(chance >= 0) return true
    else return false
}

console.log(Question4([1, 2, 5, 3, 5]))