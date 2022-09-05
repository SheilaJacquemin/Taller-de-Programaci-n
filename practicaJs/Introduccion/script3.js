/*EJERCICIO 1
Crear un Programa que pida al usuario que ingrese un numero y le devuelva un mensaje
que indique si el numero es positivo, negativo o si es 0  
EJERCICIO 2
2_Crear un programa que pida al usuario un numero y que le devuelva un mensaje diciendo si el numero es par o numero4
*/

//EJERCICIO 1

console.log("----------------------------------------------EJERCICIO 1-------------------------------")
const tipoNum=(num)=>{
    if (num<0) {
        return "El numero es negativo."
    }else
        if (num==0){
        return "El número es 0."
        } else {
            return "El numero es positivo."
        }
    }

let num=prompt("Ingrese un numero.")
alert(tipoNum(num))
//EJERCICIO 1(FUNCIÓN EXPRESIÓN)
console.log("----------------------------------------------EJERCICIO 1 (Expresión)-------------------------------")
const tipoNume=function (num){
    if (num<0) {
        return console.log("El numero es negativo.")
    }else
        if (num==0){
        return console.log("El número es 0.")
        } else {
            return console.log("El numero es positivo.")
        }
    }

let n=prompt("Ingrese un numero.")
alert(tipoNum(n))


//EJERCICIO 2
console.log("----------------------------------------------EJERCICIO 2-------------------------------")
const numPar=(numero)=>{
    let res=(numero%2)
    if (res===0) {
        return "El numero es par."
    }else{
            return "El numero es impar."
        }
    }

let nume=prompt("Ingrese un numero.")
alert(numPar(nume))

//FUNCION DECLARACIÓN 

console.log("----------------------------------------------EJERCICIO 2(Declaración)-------------------------------")
function numePar(numero){
    let res=(numero%2)
    if (res===0) {
        return "El numero es par."
    }else{
            return "El numero es impar."
        }
    }

let numero=prompt("Ingrese un numero.")
alert(numePar(numero))
