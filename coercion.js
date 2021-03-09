let a = 7;
let b = '6';
let c = a + b
console.log(c);
// here the answer is 76 because it is treating both as a string value

let d = 7;
let e = 6;
let f = d + e;
console.log(f);
// here the answer is 13 because the both are numeric values

let g = 7;
let h = 6;
let i = '5'
let j = g + h + i;
console.log(j);
/*
here the answer is 135. what it does is that it adds the 1st 
two numbers because the a number values and the joins the last 
as a string because it is a string value(written inside quotes)

now if the string value is between(middle)js will treat the three
as a string because no the string seperates the other two numeric
values.

what if the string value comes first, it will add the last two 
and joins them with the string value(not add)
*/


let q = 9;
let r = '6';
r = parseInt(r, 10)
let s = q + r;
console.log(s);

let t = parseInt('bob', 10);
console.log(t);

