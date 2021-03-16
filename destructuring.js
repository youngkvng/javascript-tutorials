let a, b, c, d, e;

let names = ['eddie', 'micheal', 'sammy', 'francis', 'bob'];

// [a, b, c, d, e] = names;
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)


[a, b, ...others] = names;
console.log(a);
console.log(b);
console.log(others);