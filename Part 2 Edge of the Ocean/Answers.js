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

function Question3(statues) {

}