function zipList(list1, list2) {
  const returnList = [];
  for (let i = 0; i < list1.length; i++) {
    returnList.push(list1[i]);
    returnList.push(list2[i]);
  }
  return returnList;
}

function zipListTheSimpleWay(list1, list2) {
  return _.reduce(_.zip(list1, list2), function (a, b) {
    return a.concat(b);
  });
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));

// Attempt 1 - 9:43.56
