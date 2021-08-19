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

const imgreceta = document.querySelector('.imgrecetita');
const listaIngredientes = document.querySelector('.listaIngredientes');

getImagesFromMeal(urlRecetaBusqueda)
    .then((data) => {
        data = data.meals[0]
        document.querySelector(".tituloReceta").innerHTML = `${data.strMeal}`;
        imgreceta.src = data.strMealThumb;
        document.querySelector(".Instruccion1").innerHTML = ` <svg class="bi bi-check-circle-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F24726" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
            </svg> ${data.strInstructions}`;

        for (const prop in data) {
            if (prop.startsWith('strIngredient') && data[prop] != "") {
                
            const div = document.createElement('div');
            const divImg = document.createElement('div');
            const img = document.createElement('img');
            const i = document.createElement('i');
            const hr = document.createElement('hr');
            const span = document.createElement('span');

            div.className = "col-3";
            divImg.className = "col-md-4 col-lg-8 text-lg-center";
            img.className = "img-fluid mb-5 mb-md-0 bckgn-img-ingredientes img1-ingrediente"
            img.src = pre_url + `${data[prop]}.png`;
            img.alt = data[prop];
            i.className = "titulosall-ingredientes";
            i.appendChild(document.createTextNode(data[prop]));
            span.className = "titulosall-ingredientes";

            div.appendChild(divImg);
            divImg.appendChild(img);
            divImg.appendChild(i);
            divImg.appendChild(hr);
            divImg.appendChild(span);
            listaIngredientes.appendChild(div);
            }
        }
    })

botonBuscar.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputBuscar.value) {
        buscar(inputBuscar.value)
    } else
        console.log("no se buscó nada")
})