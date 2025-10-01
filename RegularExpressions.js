function regexVar() {
    let re = /^([aeiou]).*\1$/;
    return re;
}

// Testing
// let re = regexVar();
// console.log(re.test('bcd'));