// (2) let array = ["Lucas", "Matias", "Jose", "Pedro", "Martina", "Marcelo", "Esteban", "Marcela", "Martin"]
// let ultimoElemento = array[array.length-1]
// console.log(ultimoElemento)



let nombres =  ["Lucas", "Matias", "Jose", "Pedro", "Martina", "Marcelo", "Esteban", "Marcela", "Martin"]
console.log(nombres)

let numInv=nombres.length
let ultInd=nombres.length-1


let indice= nombres.indexOf("Marcela")
nombres[indice]="Pedro"


nombres.forEach((nombre,indice)=>{
    console.log(nombre,": ", indice)
}
)



console.log(nombres)
console.log(numInv)
console.log(nombres[ultInd])

