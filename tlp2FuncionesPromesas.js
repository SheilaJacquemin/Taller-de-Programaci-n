// Trabajando con Promesas

//1. Transformar todas las funciones declarativas en funciones flecha.

//2. Iplementar los métodos .then y .catch necesarios para manejar las respuestas exitosas y/o los errores al invocar las funciones.

//3. Simplificar el código de las funciones.

//4. Transformar la función funcionCuatro() en una función asíncrona con la palabra reservada async e implementarla junto con await.

    
// Promesa almacenada en una constante
    const promesa = new Promise((resolve, reject)=>{

        if( 10 === 11){
            resolve('Los valores son iguales');
        } else {
            reject('Los valores son distintos')
        }

    });

    promesa

