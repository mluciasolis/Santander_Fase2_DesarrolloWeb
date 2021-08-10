# Fase 2 | Desarrollo Web Full Stack JavaScript | Equipo 16

En este repositorio encontrarán los postworks y proyecto final realizados en la **Fase 2** del curso de **Desarrollo Web Full Stack JavaScript**:computer:.

## Integrantes
- Ruth Aguirre Doria :woman:
- José Ramón Carreño García :man:
- Zaire Tanahi Díaz Lopez :woman:
- Magda Lucia Hernández Solis :woman:
- Jim Antonio Loza Orozco :man:


## Contenido :clipboard:

- [Postwork S4](#postwork-s4)
    - Deep Equal
    - Chunk
    - Frequency
- [Postwork S8](#postwork-s8)
	- Mockups
	- Configuración del proyecto

## Postwork S4
Como entregable de este postwork se desarrollaron tres funciones de JavaScript que se explicarán a continuación:

### Deep Equal
Se creó una función llamada *deepEqual* que recibe dos argumentos, retorna `true`  si son el mismo valor o si son objetos con las mismas propiedades, en este último caso los valores de las propiedades son comparados con una llamada recursiva de  *deepEqual*.

```javascript
function deepEqual(a, b) {
    if (a === b) {
        return true
    } else if (typeof (a) === 'object' && typeof (b) === 'object') {
        const propsA = Object.keys(a).sort();
        const propsB = Object.keys(b).sort();

        if (propsA.length !== propsB.length) {
            return false;
        }
        if (propsA.join('') !== propsB.join('')) {
            return false;
        }
        for (let i = 0; i < propsA.length; i++) {
            if (!deepEqual(a[propsA[i]], b[propsA[i]])) {
                return false;
            }
        }
        return true
    } else {
        return false
    }
}
```

Con el operador  `typeof`  se determina si ambas variables son objetos, de ser así se llama nuevamente *deepEqual* para comparar las propiedades de dichos objetos, en caso contrario solo es necesario revisar si ambas variables son estrictamente iguales.

La función  `Object.keys()`  obtiene las propiedades de los objetos.

### Chunk
Se definió la función *chunk* que recibe dos argumentos: un arreglo y un número entero (size). La función divide el arreglo en múltiples arreglos del tamaño determinado por size; esto se logra haciendo uso de la función de alto orden `Array.prototype.slice()`.

```javascript
function chunk(array, size) {
    let newArray = [];

    for (let i = 0; i < array.length; i += size) {
        const sliceArray = array.slice(i, i + size);
        newArray.push(sliceArray)
    }
    return newArray
}
```

### Frequency
Se creó la función *frequency* que recibe un string como argumento. Esta función cuenta la frecuencia o el número de veces que se repite cada caracter.

```javascript
function frequency(string) {
    let resultado = {}; //Objeto que guarda la frecuencia de caracteres desordenado
    let orderCharacter = {};//Objeto que guarda la frecuencia de caracteres ordenado
    let keys = []; //Guarda las propiedades del objeto resultado

    for (let i = 0; i < string.length; i++) {
        let character = string.charAt(i);//Devuelve el caracter en la posicion i
        if (resultado[character]) {
            resultado[character]++;
        } else {
            resultado[character] = 1;
        }
    }

    keys = Object.keys(resultado);
    keys.sort();//Ordena los elementos por orden alfabético

    for (let i = 0, size = keys.length; i < size; i++) {
        let key = keys[i];//Accede a la propiedad en i
        let value = resultado[key]; //Guarda el valor de la propiedad
        orderCharacter[key] = value;//Asigna el valor de esa propiedad al nuevo objeto
    }
    return orderCharacter;
}
```

Como resultado se obtiene un objeto donde sus propiedades son los caracteres ordenados de manera ascendente, y los valores son la frecuencia de los mismos.

## Postwork S8
En este postwork se desarrolló la primer parte del proyecto final, la cual consistió en la creación de mockups y en la configuración del proyecto haciendo uso de Webpack, Babel y webpack Dev Server.
Para obtener información más detallada [ingrese aquí](./proyectofinal/README.md).

