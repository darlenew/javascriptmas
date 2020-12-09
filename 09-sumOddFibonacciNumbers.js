function sumOddFibonacciNumbers(num) {
    let prev = 0;
    let curr = 1;
    let sum = 0;
    let tmp = undefined;
    
    if (num < 1) {
        return undefined
    }
    
    while (curr <= num) {
        if (curr % 2) {
            sum += curr;
        }
        tmp = prev + curr
        prev = curr
        curr = tmp
    }
    
    return sum;
}

console.log(sumOddFibonacciNumbers(0))
console.log(sumOddFibonacciNumbers(1))
console.log(sumOddFibonacciNumbers(10))
console.log(sumOddFibonacciNumbers(1000))
console.log(sumOddFibonacciNumbers(4000000))