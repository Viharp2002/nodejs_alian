// function add(a,b){
//     return a+b;
// }
//module.exports = add;

//Export a perticular string
/*const name = "Vihar";
module.exports = name;*/

//If we want to export 2 functions from same file
/* function add(a,b){
     return a+b;
 }

 function sub(a,b){
     return a-b;
 }

 module.exports.add = add;
 module.exports.sub = sub;*/

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a*b;
}
function div(a, b) {
  return a / b;
}


module.exports.add = add;
module.exports.sub = sub;
module.exports.mul = mul;
module.exports.div = div;
//uper ni 4 line na alter ma aam lakhay
// module.exports = {add,sub,mul,div};