function main() {
    // 1. Declare constant PI
    const PI = Math.PI;
    
    // 2. Read radius from stdin
    const r = parseFloat(readLine());
    
    // 3. Calculate area and perimeter
    const area = PI * r * r;
    const perimeter = 2 * PI * r;
    
    // 4. Print area and perimeter
    console.log(area);
    console.log(perimeter);
}