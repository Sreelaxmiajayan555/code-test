
const read = require('readline-sync') 
const fs = require('fs') 
let flightfare = read.question('Flight fare: '); 
let flightfare2=parseInt(flightfare); 
let bookingtime=read.question('Booking time (24 hr format) : '); 
if(bookingtime>=6 && bookingtime<9){ 
flightfare2=flightfare2+((flightfare2*10)/100) 
console.log("Final amount(10%) = "+flightfare2) 
} 
if(bookingtime>=9 && bookingtime<17){ 
flightfare2=flightfare2+((flightfare2*20)/100) 
console.log("Final amount(20%) = "+flightfare2) 
} 
if(bookingtime>=17 && bookingtime<23){ 
 flightfare2=flightfare2+((flightfare2*7)/100) 
console.log("Final amount(7%) = "+flightfare2) 
} 
if(bookingtime>=23 && bookingtime<6){ 
 flightfare2=flightfare2+((flightfare2*5)/100) 
console.log("Final amount(5%) = "+flightfare2) 
}

