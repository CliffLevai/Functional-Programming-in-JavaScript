// map, filter, find, and reject are all list transformation
// Reduce: is the multi tool of list transformation, its the super list transformation
let orders = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325}
]
// summarize the amount


/*let totalAmount = 0
for(let i = 0; i <orders.length; i++){
    totalAmount += orders[i].amount
}*/

let totalAmount = orders.reduce(function(sum, order){
    console.log("Hey", sum, order)
    return sum + order.amount
}, 0)

console.log(totalAmount)