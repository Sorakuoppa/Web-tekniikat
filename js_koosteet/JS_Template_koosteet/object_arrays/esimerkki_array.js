let person = {
    fname: "Timo",
    lname: "Hyttinen",
    age: 28
}
console.log(person.fname); /* piste-muuttujalla voi kutsua muuttujan sisäisiä muuttujia */

/* person.age = 29; */
let persons = [];
persons.push(person);

/* person[0].age; */

/* for (p of persons) {
    console.log(p.age);
}
 */
let car = {
    plateN: "OOP-001",
    currentSpeed: 120
}
console.log(car);

let car2 = {
    plateN: "KUR-597",
    currentSpeed: 30
}
console.log(car2);
car2.currentSpeed = 90;
console.log(car2);