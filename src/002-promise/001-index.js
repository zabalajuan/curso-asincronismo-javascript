//una promesa tiene 3 estados (Pendiente, cumplido, rechazado)
//regresa una funcion con dos funciones dentro (resolve, reject)

const promesa = new Promise(function(resolve, reject){
    resolve('hey');
})

const cows = 11;

const countCows = new Promise(function(resolve, reject){
    if(cows > 10){
        resolve( `We have ${cows} cows on the farm`);
    } else {
        reject('There are no enough cows on the farm')
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(()=> console.log('Finally'))