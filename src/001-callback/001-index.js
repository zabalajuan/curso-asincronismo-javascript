//Callback
// Una función que recibe otra funcion para ejecutar una funcion segun sea el caso

function sum(num1, num2) {
    return num1 + num2;
}

function calc (num1, num2, callback){
    return callback(num1,num2);
}

console.log(calc(2,5,sum));
//console.log(sum(2,6));


//----setTimeout
setTimeout(function (){
    console.log('Hola JavaScript')
},2000)

//--------Ejemplo 2---------------

function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting,2000,'Oscar')