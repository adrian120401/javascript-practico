//Cuadrado

const perimetroCuadrado = (ladoCuadrado) => ladoCuadrado*4
const areaCuadrado=(ladoCuadrado)=>ladoCuadrado**2

//Triangulo

const perimetroTriangulo=(ladoTrianguloUno,ladoTrianguloDos,baseTriangulo) => ladoTrianguloUno+ladoTrianguloDos+baseTriangulo
const areaTriangulo =(baseTriangulo,alturaTriangulo)=>(baseTriangulo*alturaTriangulo)/2

function areaTrianguloIsosceles(ladoUno,ladoDos,ladoBase){
    if(ladoUno==ladoDos && ladoUno != ladoBase){
        let a=ladoUno**2
        let b=(ladoBase**2)/4
        let result=Math.sqrt(a-b)
        return result
    }
    else{
        return "El triangulo no es es isosceles"
    }
}
//Circulo
const PI= Math.PI

const diametroCirculo=(radio)=>radio*2

const perimetroCirculo=(radio)=> diametroCirculo(radio)*PI

const areaCirculo=(radio)=>(radio**2)*PI

//For HTML
//Cuadrado
function calcularPerimetroCuadrado(){
    const input=document.getElementById("inputCuadrado")
    const value= input.value
    
    const perimetro=perimetroCuadrado(value)

    const newTextPerimetro=document.getElementById("newPerimetro")
    newTextPerimetro.innerText="El perimetro del cuadrado es: " +perimetro+"cm"
}

function calcularAreaCuadrado(){
    const input=document.getElementById("inputCuadrado")
    const value= input.value
    
    const area=areaCuadrado(value)
    
    const newTextArea=document.getElementById("newArea")
    newTextArea.innerText="El área del cuadrado es: " +area+"cm"
}
//Triangulo
function calcularPerimetroTriangulo(){
    const input=document.getElementById("inputTrianguloUno")
    const value= parseInt(input.value)

    const inputDos=document.getElementById("inputTrianguloDos")
    const valueDos= parseInt(inputDos.value)

    const inputTres=document.getElementById("inputTrianguloBase")
    const valueTres= parseInt(inputTres.value)

    const perimetro=perimetroTriangulo(value,valueDos,valueTres)
    
    const newTextPerimetro=document.getElementById("newPerimetroTriangulo")
    newTextPerimetro.innerText="El perimetro del triangulo es: " +perimetro+"cm"
    

}

function calcularAreaTriangulo(){
    const inputTres=document.getElementById("inputTrianguloBase")
    const valueTres= parseInt(inputTres.value)

    const inputCuatro=document.getElementById("inputTrianguloAltura")
    const valueCuatro= parseInt(inputCuatro.value)
    const area=areaTriangulo(valueTres,valueCuatro)
  
    const newTextArea=document.getElementById("newAreaTriangulo")
    newTextArea.innerText="El área del triangulo es: " +area+"cm"
}



function calcularAreaTrianguloIsosceles(){
    const input=document.getElementById("inputTrianguloIscoceles")
    const value= parseInt(input.value)

    const inputDos=document.getElementById("inputTrianguloIscocelesDos")
    const valueDos= parseInt(inputDos.value)

    const inputTres=document.getElementById("inputTrianguloIscocelesBase")
    const valueTres= parseInt(inputTres.value)
    
    const result=areaTrianguloIsosceles(value,valueDos,valueTres) 

    const newTextArea=document.getElementById("newAreaTrianguloIsosceles")
    newTextArea.innerText="El área del triangulo es: " +result+"cm"
}

//Circulo
function calcularDiametroCirculo(){
    const input=document.getElementById("inputCicrulo")
    const value= parseInt(input.value)

    const diametro=diametroCirculo(value)

    const newTextArea=document.getElementById("newDiametroCirculo")
    newTextArea.innerText="El diametro del circulo es: " +diametro+"cm"
}
function calcularPerimetroCirculo(){
    const input=document.getElementById("inputCicrulo")
    const value= parseInt(input.value)

    const perimetro=perimetroCirculo(value)

    const newTextArea=document.getElementById("newPerimetroCirculo")
    newTextArea.innerText="El perimetro del circulo es: " +perimetro+"cm"
}
function calcularAreaCirculo(){
    const input=document.getElementById("inputCicrulo")
    const value= parseInt(input.value)

    const area=areaCirculo(value)

    const newTextArea=document.getElementById("newAreaCirculo")
    newTextArea.innerText="El área del circulo es: " +area+"cm"
}