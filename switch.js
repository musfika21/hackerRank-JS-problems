function getLetter(s) {
    const firstChar = s[0];
    
    switch(true) {
        case 'aeiou'.includes(firstChar):
            return 'A';
        case 'bcdfg'.includes(firstChar):
            return 'B';
        case 'hjklm'.includes(firstChar):
            return 'C';
        default:
            return 'D';
    }
}
