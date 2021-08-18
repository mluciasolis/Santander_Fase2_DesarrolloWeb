'use strict';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/styles.css';
import {getImagesFromMeal} from './funciones.js';
import { buscar } from './funciones.js';

// const carousel = document.querySelector('.carousel');
// const sectionRecetas = document.querySelector('.recetas');
const recetas = document.querySelector('.listaRecetas');
const botonBuscar = document.querySelector('.buscar');
const inputBuscar = document.querySelector('.inputBuscar');



//Para rellenar los html a travéss de querySelector
const imgreceta = document.querySelector('.imgrecetita')

//const receta = document.querySelector("#")

let urlRecetaBusqueda = "";

//Accedes a los parametros del URL
const valores = window.location.search;
//Creamos la instancia
const urlParams = new URLSearchParams(valores);
//Accedemos a los valores
const busqueda = urlParams.get('i');
const nombre = urlParams.get('nombre');

document.querySelector(".tituloReceta").innerHTML = `${nombre}`;

urlRecetaBusqueda = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=` + busqueda

///Muestra las recetas en la página de búsqueda
//getRecetasBuscador(recetas, urlRecetasBusqueda)
/*getReceta(recetas,urlRecetaBusqueda)*/


getImagesFromMeal(urlRecetaBusqueda)
        .then((data) => {
            data = data.meals[0]
            imgreceta.src = data.strMealThumb;
            document.querySelector(".Instruccion1").innerHTML = ` <svg class="bi bi-check-circle-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F24726" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
          </svg> ${data.strInstructions}`;        
            document.querySelector(".Ingrediente1").innerHTML = `${data.strIngredient1}`;
            document.querySelector(".Ingrediente2").innerHTML = `${data.strIngredient2}`;
            document.querySelector(".Ingrediente3").innerHTML = `${data.strIngredient3}`;
            document.querySelector(".Ingrediente4").innerHTML = `${data.strIngredient4}`;

            console.log(data)
        })

botonBuscar.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputBuscar.value) {
        buscar(inputBuscar.value)
    } else
        console.log("no se buscó nada")
})



