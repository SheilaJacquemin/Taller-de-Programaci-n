//EJERCITACIÓN

//1) Vamos a simular una carrera entre 3 personas, Juan, Mario y Martín. El orden de largada SERA SIEMPRE el siguiente:

// console.log("Juan");
// console.log("Mario");
// console.log("Martín");

//El orden de llegada se determina conforme el nombre de cada uno vaya apareciendo en la consola, de modo que el ganador será aquel cuyo nombre sea el primero en aparecer.

//ACTIVIDAD: Utilizando solamente setTimeout y sin alterar el orden de largada, escribir el codigo necesario para obtener los siguientes resultados:

//VUELTA 1
//Mario
//Martin
//Juan

//solución propuesta
// setTimeout(() => {
//   console.log("Juan");
// }, 10);
// console.log("Mario");
// console.log("Martín");

//VUELTA 2
//Juan
//Martin
//Mario

//VUELTA 3
//Martin
//Juan
//Mario

// setTimeout(() => {
//   console.log("Juan");
//   console.log("Mario");
// }, 0);
// console.log("Martín");

//VUELTA 4
//Mario
//Juan
//Martin

// setTimeout(() => {
//   console.log("Juan");
// }, 0);
// console.log("Mario");
// setTimeout(() => {
//   console.log("Martín");
// }, 0);

//2)Utilizando la API de GITHUB (https://api.github.com) realizar las siguientes tareas:

//A)-Obtener una lista de los repositorios públicos (documentación de la API: https://api.github.com/repositories

// const listRepo = async () => {
//   const repo = await fetch("https://api.github.com/repositories");
//   const jsonRespuesta = repo.json();
//   return jsonRespuesta;
// };
// listRepo()
//   .then((respuesta) => console.log(respuesta))
//   .catch((error) => console.log(`error es${error}`));

//B)-Generar una funcion que a partir de la respuesta del punto anterior, retorne un array de los nombres de usuario de los owners de los repositorios listados.

// const nombresArray = async () => {
//   const respuesta = await listRepo();
//   const newArray = respuesta.map((nombre) => nombre.owner.login);

//   return newArray;
// };

// console.log(
//   nombresArray()
//     .then((respuesta) => console.log(respuesta))
//     .catch((error) => console.log(`error es${error}`))
// );
