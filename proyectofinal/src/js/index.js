'use strict';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/styles.css';
import { getRecetasAleatorias,buscar,getLogo } from './funciones.js';

let URLactual = window.location.pathname;
//console.log(URLactual);

const carousel = document.querySelector('.carousel');
const sectionRecetas = document.querySelector('.recetas');
const recetas = document.querySelector('.listaRecetas');
const botonBuscar = document.querySelector('.buscar');
const inputBuscar = document.querySelector('#buscarReceta');
const divLogo = document.querySelector('.logoMenu');

let urlRecetasAleatorias = 'https://www.themealdb.com/api/json/v1/1/random.php';
//getLogo(divLogo)

//Muestra las recetas en la página de inicio
getRecetasAleatorias(recetas, urlRecetasAleatorias)

botonBuscar.addEventListener("click", (e) => {
    e.preventDefault();
    sectionRecetas.removeChild(recetas);
    if (inputBuscar.value) {
        buscar(inputBuscar.value)
    } else
        console.log("no se buscó nada")
})


