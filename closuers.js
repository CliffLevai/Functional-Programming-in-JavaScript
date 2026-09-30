// In Javascript functions are also closures. A closure is a function that has access to its 
// own scope, the outer function's scope, and the global scope. This means that a closure can
//  remember and access variables from its outer function even after the outer function has
//  finished executing.

let me = "Cliff Levai"
function greetMe(){
    console.log("Hello " + me + '!')
}
greetMe() // Hello Cliff Levai