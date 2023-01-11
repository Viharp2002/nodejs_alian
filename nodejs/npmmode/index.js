const chalk = require("chalk");
const validator = require('validator');


//console.log(chalk.blue("Hello"))
//console.log(chalk.blue.italic("Hello"))
//console.log(chalk.blue.underline("Hello"))
// console.log(chalk.blue.inverse("Hello")) //background color avse
// console.log(chalk.green.inverse("Success"))
// console.log(chalk.red.inverse("Danger"))

// const res = validator.isEmail("vihar@vihar.com"); //true
// console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

const res = validator.isEmail("vihar@ vihar.com"); //false
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));