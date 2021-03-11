let value = one;
function one() {
    return 'one';
}
console.log(value)



function two() {
    return function two() {
        console.log('two')
    }
}
let myFunction = two();
myFunction()



