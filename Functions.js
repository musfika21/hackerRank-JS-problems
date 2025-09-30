
function factorial(num) {
    if (num < 0) return undefined;
    if (num <= 1) return 1;
    
    let count = 1;
    for (let i = 1; i <= num; i++) {
        count = count * i;
    }
    return count;
}

console.log(factorial(4))