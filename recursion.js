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