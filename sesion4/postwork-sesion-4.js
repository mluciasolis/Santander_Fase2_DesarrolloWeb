//---------- Deep Equal ----------

function deepEqual(a, b) {
    // console.log('a:' + a + '=>' + typeof (a))
    // console.log('b:' + b + '=>' + typeof (b))

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

const john = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log('---------- Deep Equal ----------')
console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false


//---------- Chunk ----------

function chunk(array, size) {
    let newArray = [];

    for (let i = 0; i < array.length; i += size) {
        const sliceArray = array.slice(i, i + size);
        newArray.push(sliceArray)
    }
    return newArray
}

const data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('---------- Chunk ----------')
console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]


//---------- Frequency ----------

function frequency(string) {
    let resultado = {}; //Objeto que guarda la frecuencia de caracteres desordenado
    let orderCharacter = {};//Objeto que guarda la frecuencia de caracteres ordenado
    let keys = []; //Guarda las propiedades del objeto resultado

    for (let i = 0; i < string.length; i++) {
        //console.log(resultado)
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

console.log('---------- Frequency ----------')
console.log('Test 1:', frequency('cccbbbaaa'))
// {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))
//{.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
