const array = [2,3,4,5,6];//criand array

array.forEach(item =>{//para cada item do array faça (item)
    if (item % 2 === 0){//se for par...
    console.log(`O número ${item} é par`);//... faça isso
    }
    else{//se não for...
        console.log(`O número ${item} é ímpar`);//... faça isso
    }

});