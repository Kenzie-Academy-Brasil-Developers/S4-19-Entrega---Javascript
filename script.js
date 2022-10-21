function snapCrackle(maxValue){

    let crackleArray = [] 

    for(let i = 1; i<=maxValue; i++){
        if(i%5===0 && i%2===1){
            crackleArray.push(" SnapCrackle")
        } 
        else if(i%5===0){
            crackleArray.push(" Crackle")
        } 
        else if(i%2===0){
            crackleArray.push(` ${i} `)
        }
        else if(i%2===1){
            crackleArray.push(" Snap")
        } 
    } 
    return `${crackleArray}`
}

console.log(snapCrackle(12))

// Se o número for ímpar, no lugar dele, concatenar "Snap" no final da string.

// Se o número for múltiplo de 5, no lugar dele, concatenar "Crackle" no final da string.

// Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, concatenar "SnapCrackle" no final da string.

// Se número não for nem ímpar e nem múltiplo de 5, concatenar o próprio número no final da string.

