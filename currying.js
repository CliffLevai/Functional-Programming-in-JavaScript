// What is currying?
// its when a function doesnt take its args upfront, but instead takes them one at a time and
//  returns a new function that takes the next argument. This continues until all arguments
//  have been provided, at which point the original function is executed with all of the coll
// ected arguments.

// let dragon = (name, size, element) => {
//     return name + ' is a ' + size + ' dragon that breathes ' + element + '!'
// }
// console.log(dragon('Puff', 'tiny', 'fire')) // Puff is a tiny dragon that breathes fire!

import _ from 'lodash'
let dragon =
    name =>
        size =>
            element =>
                name + ' is a ' + size + ' dragon that breathes ' + element + '!'


    dragon = _.curry(dragon)
    let dragon2 = dragon('Puff')('tiny')('fire')
    console.log(dragon2) // Puff is a tiny dragon that breathes fire!

    // the use of lodash's curry function can make this even easier to read and write.
    //  It takes a function and returns a curried version of it.