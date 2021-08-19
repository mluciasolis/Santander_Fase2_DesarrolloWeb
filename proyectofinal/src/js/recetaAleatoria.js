'use strict';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/styles.css';
import { getImagesFromMeal } from './funciones.js';
import { buscar } from './funciones.js';

const botonBuscar = document.querySelector('.buscar');
const inputBuscar = document.querySelector('.inputBuscar');

let urlRecetaBusqueda = "https://www.themealdb.com/api/json/v1/1/random.php";

//se instancia el url que se concatenará al nombre del ingrediente obtenido.
const pre_url = `https://www.themealdb.com/images/ingredients/`

//Para rellenar los html a travéss de querySelector
const imgreceta = document.querySelector('.imgrecetita')
const img_ing1 = document.querySelector('.img1-ingrediente')
const img_ing2 = document.querySelector('.img2-ingrediente')
const img_ing3 = document.querySelector('.img3-ingrediente')
const img_ing4 = document.querySelector('.img4-ingrediente')

let img_ingrediente1 = "";
let img_ingrediente2 = "";
let img_ingrediente3 = "";
let img_ingrediente4 = "";

getImagesFromMeal(urlRecetaBusqueda)
    .then((data) => {
        data = data.meals[0]
        document.querySelector(".tituloReceta").innerHTML = `${data.strMeal}`;
        imgreceta.src = data.strMealThumb;
        document.querySelector(".Instruccion1").innerHTML = ` <svg class="bi bi-check-circle-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F24726" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
            </svg> ${data.strInstructions}`;


        img_ing1.src = pre_url + `${data.strIngredient1}.png`;
        img_ing2.src = pre_url + `${data.strIngredient2}.png`;
        img_ing3.src = pre_url + `${data.strIngredient3}.png`;
        img_ing4.src = pre_url + `${data.strIngredient4}.png`;

        document.querySelector(".Ingrediente1").innerHTML = `${data.strIngredient1}`;
        document.querySelector(".Ingrediente2").innerHTML = `${data.strIngredient2}`;
        document.querySelector(".Ingrediente3").innerHTML = `${data.strIngredient3}`;
        document.querySelector(".Ingrediente4").innerHTML = `${data.strIngredient4}`;

        document.querySelector(".medidas-ingrediente1").innerHTML = `${data.strMeasure1}`;
        document.querySelector(".medidas-ingrediente2").innerHTML = `${data.strMeasure2}`;
        document.querySelector(".medidas-ingrediente3").innerHTML = `${data.strMeasure3}`;
        document.querySelector(".medidas-ingrediente4").innerHTML = `${data.strMeasure4}`;

        //console.log(data)
    })

botonBuscar.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputBuscar.value) {
        buscar(inputBuscar.value)
    } else
        console.log("no se buscó nada")
})