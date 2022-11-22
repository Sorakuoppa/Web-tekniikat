let button = document.getElementById("show");

let numbers = [3,4,6,2];
numbers.forEach(function(num){
    console.log(num);
});

let newMap = numbers.map(mapping);

function mapping(num){
    if(num>5){
    return "ISO NUMERO"
    } else {
    return "PIENI NUMERO"
    }
}

/* numbers.forEach(num =>console.log(num)); */

button.addEventListener("click", function(event){ /* lambda funktio ()=>{} */
    event.preventDefault();
    console.log("Painettu nappia.");
});