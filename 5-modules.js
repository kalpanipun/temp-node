//Modules
// CommonJs- every file is module (by default)
//Modules - Encapsulated code(only share minimum)

const names = require("./2-names");
const sayHi = require("./3-ultis");
const data = require("./4-alternative");
console.log(data);
sayHi("susan");
sayHi(names.jhon);
sayHi(names.peter);
