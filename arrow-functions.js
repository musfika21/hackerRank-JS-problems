// Arrow function solution
const modifyArray = (arr) => {
    return arr.map(n => n % 2 === 0 ? n * 2 : n * 3);
};