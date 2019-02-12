//Date
//moment.js
 var moment  = require('moment');
var now = new Date();
var myBirthDay = new Date(1998, 3, 18);

console.log(now.getDate());
console.log(myBirthDay.getDate());


console.log(now.getTime());
console.log(myBirthDay.getTime());

var now = moment('2018-07-10 00:14');
console.log(now.format('DD/MM/YYYY'));



//Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), ngược lại trả về false
 
function isWeekend(dateString) {
  var now = new Date(dateString);
  if(now.getDay() === 0 || now.getDay() === 6)
  {
  	return true;
  }
  	return false;
  }


console.log(isWeekend('2018/09/08'));
console.log(isWeekend('2018/09/07'));

/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
function diff(fromDate, toDate) {
  var result = Math.abs((toDate.getTime() - fromDate.getTime())/1000/60/60/24);
  console.log(result);
}

var start = new Date('2018/05/17');
var end = new Date('2018/11/19');

console.log(diff(start, end));


/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ cách ngày được truyền vào n ngày
 */
function subtractDays(date, n) {

  var results = date.setDate(date.getDate() - n);
  return new Date(results);
}

subtractDays(new Date(), 5);


/**
 * Tính số ms chênh lệch giữa 2 date object bất kì
 */
function diffMs(a, b) {
  return Math.abs(a.setMilliseconds(a.getMinutes()) - b.setMilliseconds(b.getMinutes()));
}
// viết ví dụ để kiểm tra
var date1 = new Date('March 13, 08 04:20');
var date2 = new Date('March 14, 08 05:22');
console.log(diffMs(date1,date2));