var pass=[]
var constant=5000;
var temp=[]
var input = require('readline-sync')
for (let i = 0; i < 5; i++) {
    var weight = input.question("Enter the weight: ")
    pass.push(weight)
}
for (let i = 0; i < pass.length; i++) {
    if (pass[i] > 23) {
        constant += ((pass[i]-23)*15)
        console.log(constant)
        constant = 5000
}
    else{
        console.log(constant)
    }}
    for (let i = 0; i < pass.length; i++) {
        for (let j = 0; j < pass.length-i-1; j++) {
            if (pass[j]>pass[j+1]) {
                temp = pass[j+1]
                pass[j+1] = pass[j]
                pass[j] = temp
                console.log(pass)
            }
            
        }
    }
    console.log(pass)