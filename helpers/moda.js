function modaCalculate(lista){
    const listaCount={}

    lista.map(  function(element){
        if(listaCount[element]){
            listaCount[element]+=1
        }else{
            listaCount[element]=1
        }
    })
    const listArray=Object.entries(listaCount).sort(
        function(a, b) {
            return a[1] - b[1];
        })
    const moda=listArray[listArray.length-1]
    return moda
}

function calculateModa(){
    const input=document.getElementById("modaText")
    const value= input.value

    let arr = value.split(',')

    for (let index = 0; index < arr.length; index++) {
        arr[index] = parseInt(arr[index]);
        
    }

    const moda=modaCalculate(arr)

    const newText=document.getElementById("modaNewText")
    newText.innerText="La moda es: " + moda+" veces"
}
