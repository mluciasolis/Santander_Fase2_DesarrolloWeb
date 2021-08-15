import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '../css/styles.css';

const recetas = document.querySelector('.listaRecetas');

for (let i = 0; i < 20; i++) {
    getImagesFromMeal()
        .then(function (data) {
            console.log(data);
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

function getImagesFromMeal() {
    return fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(function (response) {
            return response.json();
        })
}

export default getImagesFromMeal;
