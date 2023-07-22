//es necesario instalar primero fecth
//npm i node-fetch
import fetch from  'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI){
    return fetch(urlAPI);
};

/* fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
    })
    .then(()=>{
        console.log('hola!!');
    })
    .catch(error => console.log(error));
//hay que agregar en el package.json "type": "module" */

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log('------------')
        console.log(product);
        console.log('------------')
        console.log(product.title)
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(error => console.log(error))
    .finally(()=> console.log( 'Finally...'))


