// Making functions take otehr functions as their argument
//Map: it goes through an array but it does not throu the objects away instate it transform them.

let animals =[
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Caro', species:'dog'},
    {name: 'Hamilton',species:'dog'},
    {name: 'Harold', species: 'fish'},
    {name:'Ursula', species:'cat'},
    {name:'Jimmy', species: 'fish'}
]

// getting the array of all the animals

let names1 = []; for(let i = 0; i < animals.length; i++) {names.push(animals[i].name)}
    
 let names2 = animals.map(function(animal){ return animal.name })
 let names3 = animals.map((animal) =>  animal.name )
 // we can use map to create a completely new object

console.log(names)