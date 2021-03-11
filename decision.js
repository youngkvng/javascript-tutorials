var count = 3;
if(count == 4) {
    console.log('count is 4');
} else if (count > 4) {
    console.log('count is greater than 4');
} else if (count < 4) {
    console.log('count less than 4');
}
 else { 
    console.log('count is not 4');
}


let hero = 'superman';
switch(hero) {
    case 'superman': 
        console.log('super strength');
        console.log('x-ray vision');
        break;
    case 'batman':
        console.log('intelligence');
        console.log('fighting skills');
        break;
    default:
        console.log('members of JLA');
}


//ternary operator
let a = 2;
let b = '2';
let result = ('a===b') ? 'equal' : 'inequal'
console.log(result);