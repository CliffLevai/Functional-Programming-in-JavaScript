//Functional Programming: Why?
//Less bugs, easier to reason 
// Higher Oder Functions: functions are values 

let triple =function (x){
    return x * 3
}
let waffle = triple
waffle(30)
// Higher order functions are good for composition. Allows us to compose small functions into bigger functions.

// the use of filter
let animals =[
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Caro', species:'dog'},
    {name: 'Hamilton',species:'dog'},
    {name: 'Harold', species: 'fish'},
    {name:'Ursula', species:'cat'},
    {name:'Jimmy', species: 'fish'}
]

// let dogs = []
// for(let i = 0; i < animales.length; i++){
//     if(animales[i].species === 'dog')
//         dogs.push(animales[i])
// }

let isDog = (function(animal){
    return animal.species === 'dog'
})

let dogs = animals.filter(isDog)
let otherAnimales = animals.reject(isDog)

