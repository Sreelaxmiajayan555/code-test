
var pass=[]
var input = require('readline-sync')
var newPass = []
var temp = "" 


for (let i = 0; i < 10; i++) {
    var name = input.question("Enter the passenger name: ")
    pass.push(name)
}




for (let i = 0; i < pass.length; i++) {
    for (let j = 0; j < pass.length-i-1; j++) {
        if (pass[j]>pass[j+1]) {
            temp = pass[j+1]
            pass[j+1] = pass[j]
            pass[j] = temp

        }
        
    }
    
}
console.log(pass)

for (let i = 0; i < pass.length; i++) {
    for (let j = 0; j < pass.length-i-1; j++) {
        if (pass[j]<pass[j+1]) {
            temp = pass[j+1]
            pass[j+1] = pass[j]
            pass[j] = temp

        }
        
    }
    
}
console.log(pass)


// Search 

console.log()
var flag = 0
var searchItem = input.question("Enter name to search: ")
for (let i = 0; i < pass.length; i++) {
    
    if (pass[i] == searchItem) {
    
        console.log(`Element found at position ${i+1}`)
        flag = 1;
        break

        
    }

    
}
if (flag == 0) {
    console.log("The name not found! ")
}


//Length of elements
console.log("\t Printing names length")
pass.forEach((item)=>{
    process.stdout.write(`${item} => ${item.length}`)

    console.log()
})

// splitting names
console.log("e.Splitting names")
pass.forEach((i)=> {
    var newPass = i.split(' ')
    newPass.forEach((item)=> {
        process.stdout.write(`${item}, `)
    })
})

//Code to print duplicate elements

for (let i = 0; i < pass.length; i++) {
    for (let j = i; j < pass.length; j++) {
        if (pass[j] == pass[j+1] ) {
            if(!(pass[j] in newPass)){
                newPass.push(pass[j])
            }

        }
        
    }
    
}

console.log("\n Duplicate elements are: ")
console.log(newPass)