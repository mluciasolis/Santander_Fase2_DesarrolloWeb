console.log("TERCER ACTIVIDAD");
function frequency( string ) {
    var array_lengths = {}; // objeto

    // calcula la frecuencia de cada valor. Se recorre el string recibido
    for(var i = 0; i < string.length; i++) {
        value = string[i];
        if(value in array_lengths) {
            array_lengths[value]++;  // se van sumando las frecuencias
        } else {
            array_lengths[value] = 1;
        }
    }
    return array_lengths;
}

console.log('Test 1:', frequency('cccbbbaaa'))
// {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}