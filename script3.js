// //FUNCIONES

// //1 FUNCION DECLARACIÓN
// function suma(num1, num2, num3=20) {
//     return num1+num2+num3
// }

// suma(5,3,6)

// //2 FUNCION EXPRESIÓN
// const suma = function (num1,num2){
// return num1+num2
// }

// //3 FUNCION FLECHA (ARROW FUNCTION)

// const resta = (num1, num2)=>{
//     return num1-num2
// }

// //RETURN IMPLICITO SOLO CON LA FUNCION FLECHA
// const Suma = (num1,num2)=> num1+num2

//EJERCICIO

//CREAR UNA FUNCION PARA APLICAR DESCUENTOS DEL 15% Y DEL 30%
//A PRODUCTOS VARIOS.

const producto1 = {
    nombre:"Remera",
    precio: 3000
}

const producto2 = {
    nombre: "Jeans",
    precio: 5000
}

// //1 FUNCION DECLARACIÓN
// function obtenerPrecios(producto){
//     const precioSinDto = producto.precio;
//     const precioConDto = producto.precio * 0.85;
//     const precioSuperDto = producto.precio *0.7;
        //RETURN TIPO OBJETO
//     return {precioSinDto, precioConDto, precioSuperDto}
        //RETURN TIPO ARRAY
//     return [precioSinDto, precioConDto, precioSuperDto]
// }

// console.log(obtenerPrecios(producto1));
// console.log(obtenerPrecios(producto2));


//2 FUNCION EXPRESION
// const obtenerPrecios = function(producto){
//     const precioSinDto = producto.precio;
//     const precioConDto = producto.precio * 0.85;
//     const precioSuperDto = producto.precio *0.7;
//     //return tipo objeto
//     return {precioSinDto, precioConDto, precioSuperDto}
//     //return tipo array
//     return [precioSinDto, precioConDto, precioSuperDto]
// }

// console.log(obtenerPrecios(producto1));
// //console.log(obtenerPrecios(producto2));


//3 FUNCION FLECHA
const obtenerPrecios = producto => {
    return{ precioSinDto: producto.precio, 
    precioConDto: producto.precio*0.85,
    precioSuperDto:producto.precio *0.7}}

    


console.log(obtenerPrecios(producto1));
//console.log(obtenerPrecios(producto2));