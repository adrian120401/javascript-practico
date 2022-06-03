//helpers
function averageCalculate(lista){
 
    const sumaLista=lista.reduce( function(acumulateValue = 0, newElement){
        return acumulateValue + newElement
    } )

    const promedioLista= sumaLista / lista.length
    return promedioLista
}

function esPar(number){
    return number%2==0
}

// Median calculate
function medianSalaries(lista){
    const mitad=parseInt(lista.length/2)
    if(esPar(lista.length)){
        const element=lista[mitad-1]
        const elementTwo=lista[mitad]
        median=averageCalculate([element,elementTwo])
    }
    else{
        median=lista[mitad]
    }
    return median
}

//General median
const salariesUru = uruguay.map(
    function(persona){
        return persona.salary
    }
)

const salariesUruSorted=salariesUru.sort(
    function(a,b){
        return a-b
    }
)
const medianSalariesGeneral=medianSalaries(salariesUruSorted)

//Top 10% median
const spliceStart=(salariesUruSorted.length * 90)/100
const spliceCount=salariesUruSorted.length-spliceStart
const salariesTop10=salariesUruSorted.splice(spliceStart,spliceCount)

const medianTopSalaries=medianSalaries(salariesTop10)

console.log({
    medianSalariesGeneral,
    medianTopSalaries
})