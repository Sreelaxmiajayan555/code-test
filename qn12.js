var pass=[]
var pass2=[]
var input = require('readline-sync')
for (let i = 0; i < 2; i++) {
    var name = input.question("Enter the passenger name: ")
    pass.push(name)
}
for (let i = 0; i < 2; i++) {
    var name2 = input.question("Enter the passenger destination: ")
    pass2.push(name2)
}
const combined=pass.concat(pass2);
console.log(combined);