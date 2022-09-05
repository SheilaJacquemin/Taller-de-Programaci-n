//------------------------------------SEGUNDA CLASE----------------------
//______________________________________________________FUNCIONES_____________________________________
//JS:Es un lenguaje sincronico, no bloqueante, hilo simple...
//JS: es no bloqueante con las funciones no propias del programa
//-----Ejemplo de sincronismo------


// console.log("Me despierto")
// console.log("Me lavo los dientes")
// console.log("Me preparo cocido")
// for(let tiempo=120;tiempo>0;tiempo--){
//     console.log(tiempo)
//     if(tiempo===1){
//         console.log("El desayuno está listo!")
//     }
// }
// setTimeout(()=>{
//     console.log(`El café está listo`,0)
//     console.log("Desayuno")
// })
// console.log("Me ducho")
// console.log("Voy al IPF")

//El uso de Set timeOut

//----Segundo Ejemplo----

// console.log("Hugo")
// console.log("Teresa")
// console.log("Rodrigo")
// //Caso b

// setTimeout(()=>{
//     console.log("Teresa")
// },5000)
// console.log("Hugo")
// console.log("Rodrigo")

//Caso C

// console.log("Hugo")
// console.log("Teresa")
// console.log("Rodrigo")
// //Caso b

// setTimeout(()=>{
//     console.log("Teresa")
// },5000)

// for(let index=0; index<=300; index++){
//     console.log(index)
//     if(index===300) console.log("Rodrigo")
// }

// console.log("Hugo")
// console.log("Rodrigo")

//-------------Tercer Ejercicio--------
//Definir una funcion
// function primero(){
    
//     setTimeout(()=>{
//         console.log(`Primero`),2000

//     })
// }

// function segundo(){
//     console.log(`segundo`),

// }

// primero()
// segundo()











//----------------------EJERCICIO FOREACH---------------------------

/*
const miArray=["Hugo","Lucas","Fernando"]

miArray.forEach((nombre,indice)=>{
    console.log(nombre,": ", indice)
})




//______________________________________________________OBJETOS_____________________________________


const objetoEj= new Object()

const objetoEj2={ nombre: "Teresa",
                    edad:25,
                  domicilios:{
                    real:"dom",
                    legal:"dom2",
                    "tercer domicilio":"dom3"
                  }

                }

objetoEj2.apellido="Gonzalez"
console.log(objetoEj2["domicilios"].legal)
console.log(objetoEj2.domicilios.["tecer domicilio"])
objetoEj2.apellido="Diaz"
console.log(objetoEj2)

delete objetoEj2.edad
console.log(objetoEj2)


*/
/*_______________EJERCICIO DE PRÁCTICA_______________

Crea un objeto user vacio.
Agrega la propiedad name con el valor Jhon
Agrega la propiedad surname con el valor Smith
Cambia el valor de name a Peter
Remueve la propiedad name del objeto
*/

