console.log("¡Bienvenido!")
//Ejercicio
//1. Pedir al usuario que ingrese su nombre. Guardar ese nombre en una variable
// y utilizarlo para saludar al usuario. (Ej: "Hola, Sandra!")

//2.Pedir al usaurio que ingrese 2 numeros y devolver las operaciones básicas(Suma, resta, mult y div)



// let nombre = prompt("Ingrese su nombre...")
// alert("Bienvenido, "+ nombre + "!")

// let num1= parseInt( prompt("Ingrese el primer número:"))
// let num2= parseInt( prompt("Ingrese el segundo número:"))
// let Suma= parseInt( num1 + num2)
// let resta= parseInt( num1 - num2)
//alert("Resultado de la suma de ambos números: "+ resta)
// let mult= parseInt( num1 * num2)
// //alert("Resultado de la suma de ambos números: "+ mult)
// let div= parseInt( num1 / num2)
// //alert("Resultado de la suma de ambos números: "+ Suma)
// //alert("Resultado de la suma de ambos números: "+ div)



// alert(` Bienvebida, ${nombre}! .La suma es: ${Suma}.La resta es: ${resta}.La suma es: ${mult}. La división es: ${div}`)


// let string= "1234"
// console.log(typeof(+string))

//Pedirle al usuario que ingrese el apellido y devolver el apellido en mayúsculas.

// let apellido= prompt("Ingrese su apellido")
// alert (`Su apellido es: ${apellido.toUpperCase()}`)

//ARRAYS

// const miArray= [21, "nombre", "pera","kiwi", 1,2,3]

// console.log(miArray)

// //MANIPULACIÓN DE ARRAYS
// //Obtener un elemento
// console.log(miArray[3])

// //contar elementos
// console.log(miArray.length)
// console.log(miArray[2])

// //Modificar un elemento
// miArray[2]="manzana"
// console.log(miArray[2])
// console.log(miArray)

// //Obtener un elemento del array
// let elemento=miArray[1]
// console.log(elemento)

// //Acceder al último elemento del array
// let ultUlemento=miArray.length-1
// console.log(miArray[ultUlemento])

// //Encontrar un elemento(IndexOff)
// const nombres=["Susana", "Lautaro","Ruth", "Lautaro"]
// console.log(nombres)
// let nombre1="Lautaro"
// let indice=nombres.indexOf(nombre1)
// console.log(indice)

// //Cambiar el valor de un elemento sin saber su indice 
// let indice2=nombres.indexOf("Lautaro")
// nombres[indice2]="Rubén"
// console.log(nombres)

// //Agregar un nuevo elemento al final con el metodo push  
// let nombreNuevo= "Santiago"
// nombres.push(nombreNuevo)
// console.log(nombres)
// //Eliminar un elemento al final con el metodo pop   
// nombres.pop()
// console.log(nombres)

// //Agregar un elemento al principio con unshift
// nombres.unshift("Santiago")
// console.log(nombres)

// //Eliminar el primer elemento con shift
//  nombres.shift()
//  console.log(nombres)



// //Splice
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]


// 3. Hacer una funcion que pida el valor a agregar y el indice en donde agregarlo

// const arregloNum=[1,2,3,4,5,5,6]
// console.log(arregloNum)
// function numeros(numero,indice){
//     let num=numero
//     let indi=indice

//     arregloNum.splice(indice,0,numero)

//     console.log(arregloNum)
// }

// const numeros(numero, indice)=>arregloNum.splice(indice,0,numero)
// console.log(arregloNum)

// let numero=parseInt(prompt("Ingrese el numero a agregar: "))
// let indice=prompt("Posición: ")
// numeros(numero, indice)




