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


const Question2 = (a) => {
    for(i=0; i < a.length; i++){
        const b = a[i]

        for(j=0; j <b.length ; j++){
            const currentNum = b[j]
            if(i != a.length -1 && typeof a[i+1][j-1] != 'undefined'){
                const bottomDiagnalNum = a[i+1][j-1]
                if (currentNum < bottomDiagnalNum){
                    b[j] = currentNum
                    a[i+1][j-1] = bottomDiagnalNum
                }
            }

            else if (i != 0 && typeof a[i-1][j+1] != 'undefined'){
                const topDiagnalNum = a[i-1][j+1]

                if (currentNum > topDiagnalNum){
                    b[j] = topDiagnalNum
                    a[i - 1][j+1] = currentNum
                }
            }
        }
    }

    return a
}