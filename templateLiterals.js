let name = 'francis';
console.log(`hi ${name}`)

function getReasonCount() {
    return 1;
}
let interpolation = `Give me ${(getReasonCount() == 2) ? 
    'one good reason' : 'a few reasons' } to try this `;
    console.log(interpolation)