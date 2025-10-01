function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            console.log(s[i]);
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (!vowels.includes(s[i].toLowerCase())) {
            console.log(s[i])
        }
    }
};