const pi = 3.14;
let area = 0;
function circleArea(radius) {
    const area = radius * pi;
    return area;
}
// comment
area = circleArea(3),
console.log('area1', area)
area = circleArea(4);
console.log('area2:', area)