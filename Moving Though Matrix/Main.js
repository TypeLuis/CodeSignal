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
                const test = matrix[b][d - i]
                const test2 = matrix[d][b + i]
                console.log(test2,d,b+i)
                // console.log( d , d - i)
                // if (test != undefined) console.log(test, b, d - i)
                
            } catch (error) {
            }
        }
    }
}

// console.log(dict.diagnal(Arr))


// Found https://stackoverflow.com/questions/21346343/traverse-an-array-diagonally
dict.diagnalOverFlow = (matrix) => {
    console.log(matrix)
    const Arr = []
    const result = []
    for (let k = 0; k <= 2 * (matrix.length - 1); ++k) {
        const yMin = Math.max(0, k - matrix.length + 1);
        const yMax = Math.min(matrix.length - 1, k);
        const temp = []
        for (let y = yMin; y <= yMax; ++y) {
            const x = k - y;
            temp.push(matrix[y][x])
        }
        // console.log(temp.sort())

        if(temp.length > 0) Arr.push(temp.sort())

        // console.log(dict[0])
        
    }

    for (let k = 0; k <= matrix.length - 1; k++) {
        let tempResult = [];
        let arr = Arr.filter((a) => a.length > 0);
        console.log(arr, Arr);
        for (let i = 0; i <= matrix.length - 1; i++) {
            const length = arr[i].length;
            tempResult.push(arr[i][length - 1]);
            Arr[Arr.indexOf(arr[i])].pop();
        }
        result.push(tempResult)
        // console.log(tempResult)
        // console.log(Arr)
    }
    return result
}

console.log(dict.diagnalOverFlow(Arr))


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

