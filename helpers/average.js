function averageCalculate(lista){
 
    const sumaLista=lista.reduce( function(acumulateValue = 0, newElement){
        return acumulateValue + newElement
    } )

    const promedioLista= sumaLista / lista.length
    return promedioLista
}

//for html
function calculateAverage(){
    const input=document.getElementById("averageText")
    const value= input.value

    let arr = value.split(',')

    for (let index = 0; index < arr.length; index++) {
        arr[index] = parseInt(arr[index]);
        
    }

    const average=averageCalculate(arr)

    const newText=document.getElementById("avergeNewText")
    newText.innerText="El promedio es: " + average
}