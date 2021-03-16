var car = {
    make: 'bmv', model:'7685i', year:2010,
    getPrice: function(){
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model)
    }
}
car.getPrice;
car.printDescription();
