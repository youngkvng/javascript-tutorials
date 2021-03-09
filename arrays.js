let a =  [4, 5, 8, 1, 9, 7, 6];
let b = [ 'eddie', 'francis', 'micheal', 'mirian', 'frank', 'simon'];
console.log(a[0])
console.log(a[1])
console.log(a)

console.log(b)
console.log(b[3])

let c = ['francis is' + ' ' + 18 + ' ' + 'years old'];
console.log(c);

let d = ['francis is 18 years old']
console.log(d);

a[0] = 7;
console.log(a)
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
//Arrays whether numbers or strings are regarded as object datatype

console.log(a.length);

//push to add a number to the last
a.push(77)
console.log(a);
console.log(a.length);

//pop to remove numbers
a.pop();
a.pop();
a.pop();
a.pop();
console.log(a);
console.log(a.length);