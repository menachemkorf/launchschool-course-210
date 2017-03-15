var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(rectangles) {
  var areas = rectangles.map(function(rectangle) {
    return rectangle[0] * rectangle[1];
  });

  return areas.reduce(function(sum, area) {
    return sum + area;
  });
}

function totalSquareArea(rectangles) {
  return totalArea(rectangles.filter(function(rectangle) {
    return rectangle[0] === rectangle[1];
  }));
}

console.log(totalArea(rectangles)); // 141
console.log(totalSquareArea(rectangles)); // 121