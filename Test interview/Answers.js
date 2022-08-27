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