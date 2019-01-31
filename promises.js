function getFruit(fruit){
    const items = ['apple', 'orange', 'banana'];
  
  
    return new Promise(
      function(resolve, reject){
        if(items.includes(fruit)){
          return resolve('fruit is found');
        }
        reject(Error('fruit not found'))
      }
    );
  }
  
  getFruit('apple')
    .then(function(feedback){
      console.log(feedback);
    })
    .catch(function(Error){
      console.log(Error);
    })
  
    