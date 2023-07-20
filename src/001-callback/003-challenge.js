//es necesario instalar un recurso en la terminal
// en el navegador, no se necesitaría, en este caso, si
// npm i xmlhttprequest

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest();

    //le damos el tipo
    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange =  function (event){
        /*
            states
            0 > No se ha inicializado
            1 > Loading - no se ha ejecutado
            2 > loaded - ya se ejecutó
            3 > Procesamiento si hay alguna descarga - interactuando
            4 > completado
         */
        if(xhttp.readyState === 4){
            //200 respuesta de proceso correcto
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error' + urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

//parte dos
//le damos la url y una funcion anonima
fetchData(`${API}/products`, function (error1, data1){
    if (error1) return console.error(error1); //se para la ejecución si hay un error
    //si no hay errorres, tenemos la siguiente lógica
    fetchData(`${API}/products/${data1[0].id}`,function(error2, data2){
        if (error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3){
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});

//como ejecutarlo desde la consola
//comando: node src/001-callback/003-challenge.js
//option 2 - modifying the package.json
// haciendo esto simplemente podemos usar el comando:
//npm run callback