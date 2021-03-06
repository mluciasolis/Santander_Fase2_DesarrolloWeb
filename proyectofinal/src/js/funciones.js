'use strict';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/styles.css';

function getRecetasAleatorias (recetas,url){
    for (let i = 0; i < 20; i++) {
        getImagesFromMeal(url)
            .then(function (data) {
                //console.log(data);
                data = data.meals;
    
                data.forEach(function (data) {
                    const {idMeal,strMeal} = data;
                    const div = document.createElement('div');
                    const button = document.createElement('a');
                    const img = document.createElement('img');
                    const divName = document.createElement('div');
                    const name = document.createElement('p');
    
                    div.className ="card imgReceta";
                    div.style=`width:20rem;`;

                    button.href = `receta.html?i=${idMeal}&nombre=${encodeURIComponent(strMeal)}`;

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
            })
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
    document.location.href = `busqueda.html?i=` + busqueda;
}

function getRecetasBuscador (recetas,url){
        getImagesFromMeal(url)
            .then(function (data) {
                //console.log(data);
                data = data.meals;

                if(data != null){
                    data.forEach(function (data) {
                        const {idMeal,strMeal} = data;
                        const div = document.createElement('div');
                        const button = document.createElement('a');
                        const img = document.createElement('img');
                        const divName = document.createElement('div');
                        const name = document.createElement('p');
        
                        div.className ="card imgReceta";
                        div.style=`width:20rem;`;

                        button.href = `receta.html?i=${idMeal}&nombre=${encodeURIComponent(strMeal)}`;
        
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
                }else{
                    const div = document.createElement('div');

                    div.className = "alert alert-danger";
                    div.role = "alert";

                    div.appendChild(document.createTextNode('No se encontraron resultados de tu b??squeda ???. ??Intenta otra opci??n!'));
                    recetas.appendChild(div);
                }
            }
        )
    return recetas
}

function getReceta(recetas,url){
    getImagesFromMeal(url)
        .then(function (data) {
            console.log(data);
        })
    return recetas
}

export {getRecetasAleatorias,getImagesFromMeal,buscar,getRecetasBuscador,getReceta};
