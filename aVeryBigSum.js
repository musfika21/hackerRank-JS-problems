
function aVeryBigSum(ar) {
    // JavaScript numbers can handle integers up to 2^53 - 1 safely
    // For this problem, regular Number type is sufficient
    return ar.reduce((sum, num) => sum + num, 0);
}