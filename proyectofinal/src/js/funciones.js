'use strict';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/styles.css';
import logo from '../imgs/logo2.png';

function getLogo(divLogo){
    // <div class="logo">
    //     <a class="navbar-brand" href="#">
    //         <img src="logo.png" alt="logo">
    //     </a>
    // </div>
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');

    div.className ="logo";
    a.className = "navbar-brand";
    img.src = logo;
    img.alt = "logo";

    a.appendChild(img);
    div.appendChild(a);
    //divLogo.appendChild(div);
    divLogo.insertBefore(div,divLogo.firstChild);
}

function getRecetasAleatorias (recetas,url){
    for (let i = 0; i < 20; i++) {
        getImagesFromMeal(url)
            .then(function (data) {
                //console.log(data);
                data = data.meals;
    
                data.forEach(function (data) {
                    const {strMeal} = data;
                    const div = document.createElement('div');
                    const button = document.createElement('button');
                    const img = document.createElement('img');
                    const divName = document.createElement('div');
                    const name = document.createElement('p');
    
                    div.className ="card imgReceta";
                    div.style=`width:20rem;`;
    
                    img.src = data.strMealThumb;
                    img.alt = data.caption;
                    img.className = "card-img-top";
    
                    divName.className = "card-body";
    
                    name.className = "card-text";
    
                    name.appendChild(document.createTextNode(strMeal));
                    divName.appendChild(name);
                    button.appendChild(divName);
                    button.insertBefore(img,divName);
                    div.appendChild(button);
                    recetas.appendChild(div);
                })
            }
        )
    }
    return recetas
}

function getImagesFromMeal(urlApi) {
    return fetch(urlApi)
        .then(function (response) {
            return response.json();
        })
}

function buscar(busqueda){
    //let busqueda = document.querySelector('buscarReceta').value;
    document.location.href = `busqueda.html?i=` + busqueda;
}

function getRecetasBuscador (recetas,url){
        getImagesFromMeal(url)
            .then(function (data) {
                //console.log(data);
                data = data.meals;
    
                data.forEach(function (data) {
                    const {strMeal} = data;
                    const div = document.createElement('div');
                    const button = document.createElement('button');
                    const img = document.createElement('img');
                    const divName = document.createElement('div');
                    const name = document.createElement('p');
    
                    div.className ="card imgReceta";
                    div.style=`width:20rem;`;
    
                    img.src = data.strMealThumb;
                    img.alt = data.caption;
                    img.className = "card-img-top";
    
                    divName.className = "card-body";
    
                    name.className = "card-text";
    
                    name.appendChild(document.createTextNode(strMeal));
                    divName.appendChild(name);
                    button.appendChild(divName);
                    button.insertBefore(img,divName);
                    div.appendChild(button);
                    recetas.appendChild(div);
                })
            }
        )
    return recetas
}

export {getRecetasAleatorias,getImagesFromMeal,buscar,getRecetasBuscador,getLogo};
