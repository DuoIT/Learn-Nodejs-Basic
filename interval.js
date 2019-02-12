//setInterval
//clearInterval
//setInterval(fn, ms)

var i = 0;
var result = setInterval(function(){
	++i;
	console.log(i);
	if(i == 5)
	{
		clearInterval(result);
	}
},1000);


//write a function count from 1 to 10
// return a promise
function countFrom(a, b) {
	var i = 0;
	return new Promise(function(resolve,reject){
		var result = setInterval(function()
		{
			++i;
			console.log(i);
			if(i == 10)
			{
				clearInterval(result);
			}
			}, 1000)
			
	});
}


countFrom(1, 10).then(function(){
	console.log('DOne');
});




// /**
//  * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
//  */

function countDown(x) {

  var load = setInterval(function(){
    if(x>=0)
    {
      console.log(x);
      x--;
    }
    else
    {
      console.log('Happy new year');
      clearInterval(load);
    }
  }, 1000);
}

countDown(5);