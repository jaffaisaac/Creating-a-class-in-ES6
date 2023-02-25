class car{
    constructor(brand){
        this.brand =brand;
        this.color ='red'
        this.speed = '200Km/Hr';
    }
    
}
const myTesla = new car('BMW');

console.log(myTesla) //car { brand: 'BMW' }

// the method hasOwnProperty() => Determines whether an object has a property with the specified name
//this return a boolean value for the value passed 
console.log( myTesla.hasOwnProperty('brand')); 
console.log(typeof car) // function 

console.log(car) //[class car]

console.log(constructor) // [Function :Object]

console.log(myTesla.color ,myTesla.speed)


//NB this exapme can be represented as:
class country{
    constructor(district){

    }
} 
const mycountry = new country('Mbale')
//the above from line 26 to 31 can also be written as from line 34 to 36

const country ={
    district: 'Mbale'
}