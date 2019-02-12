// Viết hàm đảo ngược chuỗimocha.setup('bdd');
var expect = chai.expect;


function reverse(str) {
	var a = '';
  for(var i=str.length -1; i >= 0; i--)
  	a += str[i];
    return a;
}

describe('reverse', function() {
  it('Reverse reverses a string', function() {
    expect(reverse('abcd')).to.equal('dcba');
  });

  it('Reverse reverses a string', function() {
    expect(reverse('  abcd')).to.equal('dcba  ');
  });

  it('Reverse reverses a string', function() {
    expect(reverse('#$#@fhbsk123')).to.equal('321ksbhf@#$#');
  });

  it('Reverse reverses a string', function() {
    expect(reverse('#$  #@ fh  bsk123   @#@!cvcxhb')).to.equal('bhxcvc!@#@   321ksb  hf @#  $#');
  });

  it('Reverse reverses a string', function() {
    expect(reverse('')).to.equal('');
  });

  it('Reverse reverses a string', function() {
    expect(reverse(' ')).to.equal(' ');
  });
});

mocha.run();



// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu

mocha.setup('bdd');
var expect = chai.expect;


function capitalize(str) {
	return str.toLowerCase().replace(/(^|\s)\S/g, function(l) {
    return l.toUpperCase();
  });

}

describe('capitalize', function() {
  it('capitalizes the first letter of every word in a sentence', function() {
    expect(capitalize('hi there, how is it going?')).to.equal('Hi There, How Is It Going?');
  });

  it('capitalizes the first letter of every word in a sentence', function() {
    expect(capitalize('i love breakfast at bill miller bbq')).to.equal('I Love Breakfast At Bill Miller Bbq');
  });

  it('capitalizes the first letter of every word in a sentence', function() {
    expect(capitalize('xin chào')).to.equal('Xin Chào');
  });

  it('capitalizes the first letter of every word in a sentence', function() {
    expect(capitalize('look, it is working!')).to.equal('Look, It Is Working!');
  });
});

mocha.run();

//Viết hàm lấy extension của một file

mocha.setup('bdd');
var expect = chai.expect;


function getExtensionFilename(filename) {
		return filename.split('.').pop();
}


describe('getExtensionFilename', function() {
  it('Get extionsion of file', function() {
    expect(getExtensionFilename('JavHD.mp4')).to.equal('mp4');
  });

  it('Get extionsion of file', function() {
    expect(getExtensionFilename('tài-liệu-quan-trọng.doc')).to.equal('doc');
  });

  it('Get extionsion of file', function() {
    expect(getExtensionFilename('C:\Users\NamHandsome\Desktop\index.html')).to.equal('html');
  });
});

mocha.run();


//viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào

mocha.setup('bdd');
var expect = chai.expect;


function findMax(a,b,c){
var max;
 max = a;
 if(max < b)
 max = b;
 if(max < c)
 max = c;
 return max;
}

describe('findMax', function () {
   it('return higest of number findMax(-6,5,4)', function () {
   		 expect(findMax(-6, 5, 4)).to.eql(5);
   });
});
mocha.run();






mocha.setup('bdd');
var expect = chai.expect;

// viết hàm Kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 
function startWith(str){
	if(str.slice(0, 4) === "Java")
  return true;
	
}

describe('startWith', function () {
   it('return higest of number startWith("Java")', function () {
   		 expect(startWith('Java')).to.eql(true);
   });
});
mocha.run();


mocha.setup('bdd');
var expect = chai.expect

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




mocha.setup('bdd');
var expect = chai.expect

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
if(str1.length !== str2.length)
	return false;
  var arr1 = str1.split('');
  var arr2 = str2.split('');
  var count = 0;
  for(var i of arr1){
  for( var j of arr2)
  {
  		if(i === j){
      count ++;
      break;
      }
      }
     }
      if( count === str1.length)
      return true;
      return false;
}
