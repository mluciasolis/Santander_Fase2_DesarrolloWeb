'use strict';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/styles.css';
import { getRecetasBuscador,getReceta } from './funciones.js';
import { buscar } from './funciones.js';

// const carousel = document.querySelector('.carousel');
// const sectionRecetas = document.querySelector('.recetas');
const recetas = document.querySelector('.listaRecetas');
const botonBuscar = document.querySelector('.buscar');
const inputBuscar = document.querySelector('.inputBuscar');
//const receta = document.querySelector("#")

let urlRecetaBusqueda = "";

//Accedes a los parametros del URL
const valores = window.location.search;
//Creamos la instancia
const urlParams = new URLSearchParams(valores);
//Accedemos a los valores
const busqueda = urlParams.get('i');
const nombre = urlParams.get('nombre');

document.querySelector(".tituloResultados").innerHTML = `Resultados de: ${nombre}`;

urlRecetaBusqueda = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=` + busqueda

///Muestra las recetas en la página de búsqueda
//getRecetasBuscador(recetas, urlRecetasBusqueda)
getReceta(recetas,urlRecetaBusqueda)

botonBuscar.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputBuscar.value) {
        buscar(inputBuscar.value)
    } else
        console.log("no se buscó nada")
})