const read = require('readline-sync') 
const fs = require('fs') 
let passengername = read.question('Passenger Name: ');
let milestravelled = read.question('Miles Travelled: ');

if(milestravelled>10000 && milestravelled<20000){ 
   
    console.log("10") 
    } 
    if(milestravelled>20000 && milestravelled<50000){ 
    
    console.log("20") 
    } 
    if(milestravelled>50000 && milestravelled<100000){
        console.log("30")
    }
    if(milestravelled>100000){
        console.log("50")
    }