//Reto 1
function deepEqual(a, b) {
    if (typeof(a) === "object" && typeof(b)==="object"){
        var aKeys = Object.keys(a).sort();
        var bKeys = Object.keys(b).sort();
        if(!deepEqual(aKeys.length, bKeys.length)) {
            return false;
        }
        for(let i = 0; i < aKeys.length; i++) {
            if(!deepEqual(aKeys[i], bKeys[i])) {
                return false;
            }
            if(!deepEqual(a[aKeys[i]], b[aKeys[i]])) {
                return false;
            }
        }
        return true;
    }else if (a === b){
        return true
    }else{
        return false
    }
    }
   
   const john = {
    firstName: 'John',
    lastName: 'Doe'
   }
   
  console.log('Test 1:', deepEqual(1, 1)) // true
   console.log('Test 2:', deepEqual(1, '1')) // false
   console.log('Test 3:', deepEqual(john, john)) // true
   console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
   console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false

   //Reto 2
   
function chunk(array,size){
    const nuevoArreglo= []; // Aquí almacenamos los nuevos arreglos
    const tamañoPieza = size; // Partir en arreglo de tamaño "size"
    for (let i = 0; i < array.length; i += tamañoPieza) {
	let pedazo = array.slice(i, i + tamañoPieza);
	nuevoArreglo.push(pedazo);
    }
    return nuevoArreglo;
}
const data = [1, 2, 3, 4, 5, 6, 7, 8];

  console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
  console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
  console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]] 

  //Reto 3
  function frequency(string) {
    let frecuencia = {};
    let orderCharacter = {}
    let keys =[];
    
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (frecuencia[character]) {
           frecuencia[character]++;
        } else {
           frecuencia[character] = 1;
        }
    }
    keys = Object.keys(frecuencia);
    keys.sort();//Ordena los elementos por orden alfabético

    for (let i = 0, size = keys.length; i < size; i++) {
        let key = keys[i];//Accede a la propiedad en i
        let value = frecuencia[key]; //Guarda el valor de la propiedad
        orderCharacter[key] = value;//Asigna el valor de esa propiedad al nuevo objeto
    }
    return orderCharacter;
};
   
  console.log('Test 1:', frequency('cccbbbaaa'))
   // {a: 3, b: 3, c: 3}
   console.log('Test 2:', frequency('www.bedu.org'))
   // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
   console.log('Test 3:', frequency('john.doe@domain.com'))
   // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}