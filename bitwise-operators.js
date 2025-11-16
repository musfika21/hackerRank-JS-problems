function maxBitwiseAnd(n, k) {
    // The key insight: check if (K-1) & K < K and both are in range
    // If K and K-1 are both <= N, then we can get K-1 as result
    // Because (K-1) & K will give us something, and we want max value < K
    
    // The maximum possible value < K is K-1
    // Can we achieve K-1? Yes, if both K-1 and K are in [1, N]
    const candidate = k - 1;
    
    if (candidate >= 1 && k <= n && candidate <= n) {
        // We can form K-1 using numbers K-1 and K
        // Check: does (K-1) & K give us exactly K-1? No, but that's not needed
        // We need ANY pair that gives K-1
        // If K is in range, then (K-1) & K = K & (K-1) will be < K
        // And the maximum value we can get that's < K is K-1
        return candidate;
    }
    
    // If K > N, then maximum is (N-1) & N
    return (n - 1) & n;
}
