function sayHello(name) {
    console.log('.............');
    console.log('Hello ' + name);
    console.log('.................')
}

sayHello('francis');

// let a = sayHello;
// a('john');
// a('francis');

function calculateTax(total) {
    let result = total + total + total
    return result;
}
let tax = calculateTax(10);
console.log(tax);
