function Question1(s, t){
    const biggestLen = s.length > t.length ? s.length : t.length
    let count = 0

    for(let i=0; i < biggestLen; i++){
        let replicaS = s.split('')
        let replicaT = t.split('')
        replicaS.splice(i, 1)
        replicaT.splice(i, 1)
        replicaS = replicaS.join('')
        replicaT = replicaT.join('')


        console.log(replicaS, t)
        // console.log(replicaT, t)
        if(!isNaN(s[i]) && replicaS < t) count ++
        else if (!isNaN(t[i]) && s < replicaT) count ++
    }
    return count
}


console.log(Question1('ab12c', 'ab24z'))



// Attempt 1 

// const Question2 = (a) => {
//     for(i=0; i < a.length; i++){
//         const b = a[i]

//         for(j=0; j <b.length ; j++){
//             const currentNum = b[j]
//             if(i != a.length -1 && typeof a[i+1][j-1] != 'undefined'){
//                 const bottomDiagnalNum = a[i+1][j-1]
//                 if (currentNum < bottomDiagnalNum){
//                     b[j] = currentNum
//                     a[i+1][j-1] = bottomDiagnalNum
//                 }
//             }

//             else if (i != 0 && typeof a[i-1][j+1] != 'undefined'){
//                 const topDiagnalNum = a[i-1][j+1]

//                 if (currentNum > topDiagnalNum){
//                     b[j] = topDiagnalNum
//                     a[i - 1][j+1] = currentNum
//                 }
//             }
//         }
//     }

//     return a
// }


const Question2Attempt2 = (matrix) => {

    const Arr = []  
    const result = []

    // retrieves numbers in diagonal fashion and places them in temp array
    for (let k = 0; k <= 2 * (matrix.length - 1); ++k) {

        const yMin = Math.max(0, k - matrix.length + 1);
        const yMax = Math.min(matrix.length - 1, k);
        const temp = []

        for (let y = yMin; y <= yMax; ++y) {
            const x = k - y;
            temp.push(matrix[y][x])
        }

        if(temp.length > 0) Arr.push(temp.sort())
        
    }



    for (let k = 0; k <= matrix.length - 1; k++) {

        let tempResult = [];
        let arr = Arr.filter((a) => a.length > 0);

        for (let i = 0; i <= matrix.length - 1; i++) {
            const length = arr[i].length;
            tempResult.push(arr[i][length - 1]);
            Arr[Arr.indexOf(arr[i])].pop();
        }

        result.push(tempResult)

    }
    return result
}