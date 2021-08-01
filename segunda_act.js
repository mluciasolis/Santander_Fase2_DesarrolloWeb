console.log("SEGUNDA ACTIVIDAD");
function chunk(array, size) {
    const GuardArreglos = []; //Para guardar los arreglos separados
    console.log("Arreglo original:", array); //Para mostrar el arreglo original
  
  // For para partir el arreglo en función de size*/
  for (let i = 0; i < array.length; i += size) {
      const separacion = array.slice(i, i + size); //Acá se divide el arreglo. 
      GuardArreglos.push(separacion); // Se guardan los arrays divididos
  }
  return GuardArreglos;
  };

const data = [1, 2, 3, 4, 5, 6, 7, 8]; 

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]