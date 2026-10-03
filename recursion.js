// Recursions is when a function calls itself until it reaches a base case 
// (a condition where the function stops calling itself).

let countDownFrom = (num) => {
    // Tail call optimization is when a function calls itself as its last action,
    //  allowing the interpreter to optimize the call stack and avoid stack overflow errors.
    if (num == 0) return;
    console.log(num)
    countDownFrom(num - 1)
}

countDownFrom(10)

let categories = [
    {id: 'animals', parent: null},
    {id: 'mammals', parent: 'animals'  },
    {id: 'cats', parent: 'mammals'},
    {id: 'dog', parent: 'mammals'},
    {id: 'birds', parent: 'animals'},
    {id: 'eagles', parent: 'birds'},
    {id: 'sparrows', parent: 'birds'}
]
let makeTree = (categories, parent) =>{
    let node = {}
    categories.filter(c => c.parent === parent).forEach(c => node[c.id] = makeTree(
        categories, c.id))
    
    return node
}
console.log(
    JSON.stringify(
    makeTree(categories, null), null, 2)
)