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


