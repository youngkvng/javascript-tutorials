function sayHello(name) {
    return function() {
        console.log('howdy ' + name);
    };
};
let hello = sayHello('francis');
hello();