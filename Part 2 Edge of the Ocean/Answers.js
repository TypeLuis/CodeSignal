

const edgeOfTheOcean = {}

// Question1 - adjacentElementsProduct

edgeOfTheOcean.Question1 = function (Arr) {
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

edgeOfTheOcean.Question1Diff = function (Arr) {
    // Slices the first number of Arr then maps the sliced arr to multiply x with the index of the original arr
    return Math.max(...Arr.slice(1).map((x, i) => [x * Arr[i]]))
}

// console.log(Question1Diff([-23, 4, -3, 8, -12]))
// console.log(Question1([-23, 4, -3, 8, -12]))


// Question2 - ShapeArea

edgeOfTheOcean.Question2 = function (n) {
    return n * n + (n - 1) * (n - 1);
}

// console.log(Question2(10))



// Question3 - Make Array Consecutive 2

edgeOfTheOcean.Question3 = function (sequence) {
    console.log(Math.max(...sequence))
    return Math.max(...sequence)-Math.min(...sequence)+1-sequence.length
}

// console.log(Question3([100, 1, 15, 33]))



// Question4 - almostIncreasingSequence

edgeOfTheOcean.Question4 = function (sequence) {
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


// console.log(Question4([1, 2, 5, 3, 5]))



// Question5 - matrixElementsSum

// Add up all values that don't appear below a 0


// function checks top to bottom 
edgeOfTheOcean.Question5 = function (matrix){
    for(var r=0,j=0;j<matrix[0].length;j++){

      for(var i=0;i<matrix.length;i++){
        
        if(matrix[i][j]===0) break
        else r+=matrix[i][j]
      }
  }
  return r
}

const randomMatrix = Array.from({length: 10}, () => Array.from({length: 5}, () => Math.floor(Math.random() * 5)))

// console.log(randomMatrix)
console.log(edgeOfTheOcean.Question5([ 
  [ 2, 1, 2, 2, 2 ],
  [ 2, 0, 3, 3, 2 ],
  [ 3, 4, 3, 3, 4 ],
  [ 1, 4, 4, 1, 4 ],
  [ 4, 1, 1, 4, 0 ],
  [ 0, 4, 3, 2, 1 ],
  [ 2, 0, 2, 2, 0 ],
  [ 4, 1, 1, 4, 3 ],
  [ 2, 1, 2, 4, 1 ],
  [ 0, 0, 0, 1, 0 ]
]))


module.exports = edgeOfTheOcean