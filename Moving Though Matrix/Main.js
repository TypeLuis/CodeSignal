const dict = {}

const Arr = [
  [ 2, 1, 2, 2, 2 ],
  [ 2, 0, 3, 3, 2 ],
  [ 3, 4, 3, 3, 4 ],
  [ 1, 4, 4, 1, 4 ],
  [ 4, 1, 1, 4, 0 ],
]

/*

[
  [ 2, 1, 2, 2, 2 ],
  [ 2, 0, 3, 3, 2 ],
  [ 3, 4, 3, 3, 4 ],
  [ 1, 4, 4, 1, 4 ],
  [ 4, 1, 1, 4, 0 ],
]

*/

dict.diagnal = (matrix) => {

    for(let i=0, j=matrix.length -1; i < matrix.length; i++, j--){
        // console.log(matrix[i][j], matrix[j][i])
        
        for (let b = 0, d=matrix.length -1; b <matrix.length; b++, d--){
            try {
                const test = matrix[i +b ][i +b - 1]
                console.log(test, i + b , i+b-1)
                // if (test != undefined) console.log(test)
                
            } catch (error) {
            }
        }
    }
}

console.log(dict.diagnal(Arr))


// top To Bottom Left To Right
dict.topToBottomLeftToRight = (matrix) => {
    // console.log(matrix[0][0])
    for(let i = 0; i < matrix[0].length;i++){

        for(let j = 0; j < matrix.length; j++){
            console.log(matrix[j][i])
        }
    }
}

// console.log(dict.topToBottomLeftToRight(Arr))




// bottom To Top Left To Right
dict.bottomToTopLeftToRight = (matrix) => {
    // console.log(matrix[0][0])
    for(let i = 0; i < matrix[0].length;i++){

        for(let j = matrix.length -1; j >= 0; j--){
            console.log(matrix[j][i])
        }
    }
}

// console.log(dict.bottomToTopLeftToRight(Arr))





// top To Bottom Right To Left
dict.topToBottomRightToLeft= (matrix) => {
    for(let i = matrix[0].length - 1; i >= 0; i--){

        for(let j = 0; j < matrix.length; j++){
            console.log(matrix[j][i])
        }
    }
}

// console.log(dict.topToBottomRightToLeft(Arr))

