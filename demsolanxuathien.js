/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
// Viêt hàm tại đây!
  var result = [];
	var myArr = [];
  for(var i of arr) {
    var check = 0;
    for(var j of myArr) {
      if(j.values === i) {
        j.count++;
        check = 1;
      }
    }
    if(check === 0) {
      var obj = {};
      obj.values = i;
      obj.count = 1;
      myArr.push(obj);
    }
  }

  var max = 0;
  for(var i of myArr)
    if(i.count > max) max = i.count;
  for(var i of myArr) {
    if(i.count === max) result.push(i.values);
  }
  return result.sort(function(a,b) {
    return a - b;
  });
}

console.log(findMostFrequent([ 0, 16, 23, 10, 7, 32, 36, 5, 38, 7, 31, 13, 23, 16, 14, 26, 13, 37, 36, 26 ]));