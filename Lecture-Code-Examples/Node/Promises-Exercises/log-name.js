
var appendFileSync = require('./api.js');

//to make it error, just remove resolve and replace with 'reject'



function requestName () {
  return new Promise(function (resolve, reject){
    appendFileSync.getName(function (err, name){
      resolve(name);

      // remove resolve(name) and just have 'reject'
    });
  });
}


requestName().then(function (nameStr) {
  console.log(nameStr);
}).catch(function(err) {
  console.log(err);
});
