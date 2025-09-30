function simpleArraySum(ar) {
    return ar.reduce((sum, num) => sum + num, 0);
}

// Read input (for online judges like HackerRank)
function processData(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0]);
    const ar = lines[1].split(' ').map(Number);
    
    const result = simpleArraySum(ar);
    console.log(result);
}

// For local testing
if (process.stdin) {
    let input = '';
    process.stdin.on('data', chunk => input += chunk);
    process.stdin.on('end', () => processData(input));
}

// Example for local testing:
// Uncomment the line below to test without stdin
// processData('6\n1 2 3 4 10 11');