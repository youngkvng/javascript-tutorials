let a = 'first';
let c = 'fourth'
function scopeText() {
    console.log(a);
    if (a!='') {
        console.log(a);
        console.log(c)
    }
  
}
scopeText();