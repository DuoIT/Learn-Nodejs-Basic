var fs = require('fs');
var axios = require('axios');

function readFilePromise(path){
  return new Promise(function(resolve, reject){
    axios.get(path)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error.data);
      });
  })
}

Promise.all([
  readFilePromise('https://jsonplaceholder.typicode.com/todos/1'),
  readFilePromise('https://jsonplaceholder.typicode.com/todos/2'),
  readFilePromise('https://jsonplaceholder.typicode.com/todos/3')
]).then(function(values){
  console.log(values);
}).catch(function(error)
{
  console.log(error);
});


function show(path) {

}