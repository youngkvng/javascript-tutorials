/* let car = {
    make: 'bmw', model: '7645i', year: 2010
}; */

function car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
let myCar = new car('bmw', '745li', 2010)
console.log(myCar)