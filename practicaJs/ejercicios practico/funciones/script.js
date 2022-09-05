//EJERCICIO
//Crear una funcion para aplicar descuentos dl 15% y del 30% a productos varios.
/*
const producto1={
    nombre:"remera", 
    precio:3000
}
const producto2={
    nombre:"jeans", 
    precio:5000
}
*/
/* Funcion Declaración
function Obtprecios(producto) {
    const precioSinDto= producto.precio;
    const precioConDto= producto.precio*0.85;
    const prConSupDto= producto.precio*0.7;
        RETURN TIPO DE OBJETO 
    return {precioSinDto, precioConDto, prConSupDto}
        RETURN TIPO ARRAY 
    return [precioSinDto, precioConDto, prConSupDto]
}
console.log(Obtprecios(producto1))
console.log(Obtprecios(producto2))
*/
/*FUNCION EXPRESIÓN
const ObtenerPrecios=function (producto) {
    const precioSinDto= producto.precio;
    const precioConDto= producto.precio*0.85;
    const prConSupDto= producto.precio*0.7; 
    return {precioSinDto, precioConDto, prConSupDto}
    // return [precioSinDto, precioConDto, prConSupDto]
}
console.log(ObtenerPrecios(producto1))
// console.log(Obtprecios(producto2))

*/

/*FUNCION FLECHA 
const ObtenerPrecios=(producto)=> { 
    const precioSinDto= producto.precio;
    const precioConDto= producto.precio*0.85;
    const prConSupDto= producto.precio*0.7; 
    return {precioSinDto, precioConDto, prConSupDto}
    // return [precioSinDto, precioConDto, prConSupDto]
}
console.log(ObtenerPrecios(producto1))
// console.log(Obtprecios(producto2))
*/

/*FUNCIÓN FLECHA IMPLICITA CON ARRAY 
const ObtenerPrecios=producto=>[ producto.precio, producto.precio*0.85,producto.precio*0.7]
console.log(ObtenerPrecios(producto1))
*/
/*FUNCIÓN FLECHA IMPLICITA CON OBJETOS
const ObtenerPrecios=producto=>{
    return {prodSinDto:producto.precio, prodConDto: producto.precio*0.85,prodConSupDec:producto.precio*0.7}
}
console.log(ObtenerPrecios(producto1))
*/
