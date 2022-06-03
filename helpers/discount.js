/*function priceDiscount(originalPrice,discount){
    const porcentajePrecioDescuento=100-discount
    const precioConDescuento=(originalPrice*porcentajePrecioDescuento)/100
    return precioConDescuento
}*/

function priceDiscount(originalPrice,discount){
    const cupon=[10,15,20,25]
    switch(discount){
        case "bronce":
            cuponValue=cupon[0]
            break;
        case "plata":
            cuponValue=cupon[1]
            break;
        case "oro":
            cuponValue=cupon[2]
            break;
        case "diamante":
            cuponValue=cupon[3]
            break;
        default:
            return "El cupon no esta disponible"
    }
    const porcentajePrecioDescuento=100-cuponValue
    const precioConDescuento=(originalPrice*porcentajePrecioDescuento)/100
    return precioConDescuento
}

//For html
function calculatePrice(){
    const input=document.getElementById("InputPrice")
    const value= input.value

    const inputDos=document.getElementById("InputDiscount")
    const valueDos= inputDos.value

    const newPrice=priceDiscount(value,valueDos)

    const newPriceText=document.getElementById("newPriceText")
    newPriceText.innerText="El precio del producto con descuento es: $" + newPrice
}
