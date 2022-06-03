function mediaGeometrica(lista){
    const multLista=lista.reduce( function(acumulateValue = 1, newElement){
        return acumulateValue * newElement
    } )
    media=multLista**(1/lista.length)
    return media
}
//for html
function calculateMedia(){
    const input=document.getElementById("mediaText")
    const value= input.value

    let arr = value.split(',')

    for (let index = 0; index < arr.length; index++) {
        arr[index] = parseInt(arr[index]);
        
    }

    const media=mediaGeometrica(arr)

    const newText=document.getElementById("mediaNewText")
    newText.innerText="La media geometrica es: " + media
}