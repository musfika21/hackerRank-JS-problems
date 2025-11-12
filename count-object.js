function getCount(objects) {
    // Count objects where x === y
    let count = 0;
    
    for (let i = 0; i < objects.length; i++) {
        if (objects[i].x === objects[i].y) {
            count++;
        }
    }
    
    return count;
}