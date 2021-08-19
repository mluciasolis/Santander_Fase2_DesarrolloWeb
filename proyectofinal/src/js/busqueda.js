'use strict';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/styles.css';
import { getRecetasBuscador } from './funciones.js';
import { buscar } from './funciones.js';

const recetas = document.querySelector('.listaRecetas');
const botonBuscar = document.querySelector('.buscar');
const inputBuscar = document.querySelector('.inputBuscar');

let urlRecetasBusqueda = "";

//Accedes a los parametros del URL
const valores = window.location.search;
//Creamos la instancia
const urlParams = new URLSearchParams(valores);
//Accedemos a los valores
const busqueda = urlParams.get('i');
//console.log(busqueda)

document.querySelector(".tituloResultados").innerHTML = `Resultados de: ${busqueda}`;

urlRecetasBusqueda = `https://www.themealdb.com/api/json/v1/1/filter.php?i=` + busqueda

///Muestra las recetas en la página de búsqueda
getRecetasBuscador(recetas, urlRecetasBusqueda)

botonBuscar.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputBuscar.value) {
        buscar(inputBuscar.value)
    } else
        console.log("no se buscó nada")
})



