// setTimeout(function() { 
//     console.log('i waited 5 seconds') 
// }, 
// 5000 )

let counter = 0;
function timeout() {
    setTimeout(function() {
        console.log('hi '+ counter++);
        timeout();
    }, 2000);
}

timeout();
//ctrl+c

(function() {
    console.log('Immediately Invoked Function Expression(IIfE)' );
})();
