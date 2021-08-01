
 function deepEqual(a, b) {
     
   if (a===b)
   {
      return true;
   }
   else if(a!==b)
   { 
     return false;
   }

   else if ((typeof a == "object" && a != null) && (typeof b == "object" && b != null)) {
      if (Object.keys(a).length != Object.keys(b).length)
        return false;
  
      for (var prop in a) {
        if (b.hasOwnProperty(prop))
        {  
          if (!deepEqual(a[prop], b[prop]))
            return false;
        }
        else
          return false;
      }
  
      return true;
    }
    else 
      return false;
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
     