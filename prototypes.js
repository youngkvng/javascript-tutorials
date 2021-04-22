let originalCar = {
    make: 'bmw',
    model: '7654li',
    year: 2010,
};
let newCar = Object.create(originalCar);
console.log(newCar.make)