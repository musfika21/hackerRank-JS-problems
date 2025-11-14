function sides(literals, ...expressions) {
    const area = expressions[0];
    const perimeter = expressions[1];
    
    const halfPerimeter = perimeter / 2;
    const discriminant = Math.sqrt(halfPerimeter * halfPerimeter - 4 * area);
    
    const s1 = (halfPerimeter + discriminant) / 2;
    const s2 = (halfPerimeter - discriminant) / 2;
    return [s1, s2].sort((a, b) => a - b);
}