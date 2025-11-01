function simpleArraySum(ar) {
    return ar.reduce((sum, num) => sum + num, 0);
}

function processData(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0]);
    const ar = lines[1].split(' ').map(Number);
    
    const result = simpleArraySum(ar);
    console.log(result);
}

if (process.stdin) {
    let input = '';
    process.stdin.on('data', chunk => input += chunk);
    process.stdin.on('end', () => processData(input));
}