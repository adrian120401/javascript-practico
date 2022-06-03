function esPar(lista){
    if(lista.length%2==0){
        return true
    }
    else{
        return false
    }
}


function medianCalculate(lista){

    lista=lista.sort(function(a, b) {
        return a - b;
    });
    console.log(lista)
    if(esPar(lista)){
        const element=lista[parseInt((lista.length-1)/2)]
        const elementTwo=lista[(lista.length)/2]
        median=(element+elementTwo)/2
    }
    else{
        median=lista[parseInt(lista.length/2)]
    }
    return median
}

//for html
function calculateMedian(){
    const input=document.getElementById("medianText")
    const value= input.value

    let arr = value.split(',')

    for (let index = 0; index < arr.length; index++) {
        arr[index] = parseInt(arr[index]);
        
    }

    const median=medianCalculate(arr)

    const newText=document.getElementById("medianNewText")
    newText.innerText="La mediana es: " + median
}

