/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

function rearrangeChar(str1, str2) {
// Viết hàm tại đây!
	if(str1.length !== str2.length) return false;
	var arr1 = str1.split('');
	var arr2 = str2.split('');
	var count = 0;
 	for(var i of arr1) {
	    for(var j of arr2) {
	    	if(i === j) {
	    		count++;
	    		break;
	    	}
	    }
 	}
	if(count === str1.length) return true;
    return false;
}

console.log(rearrangeChar('afagw','afaw'));