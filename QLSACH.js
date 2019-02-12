//QUAN LY SACH TRONG THU VIEN 
var book =[
	{
		idbook: 'b01', name: 'Hoa vang tren co xanh', price: 100
	},
	{
		idbook: 'b02', name: 'Cong chua lo lem', price: 110
	},
	{
		idbook: 'b03', name: 'Nang tien nho', price: 120
	},
	{
		idbook: 'b04', name: 'Nang tien ca', price: 130
	},
	{
		idbook: 'b05', name: 'To thich cau', price: 140
	}

];

var read =[
	{
		idread:'r01',name:'Hoang Thi Phuong Thao',age:24
	},
	{
		idread:'r02',name:'Trinh Trang Duong',age:20
	},
	{
		idread:'r03',name:'Nguyen Ngoc Anh Thu',age:29
	}
];

var borow =[
	{
		idbook:'b01',
		idread:'r01',
		borowday:'12/8/2018',
		returnday:'22/8/2019'
	},
	{
		idbook:'b02',
		idread:'r02',
		borowday:'10/8/2018',
		returnday:'21/8/2019'
	},
	{
		idbook:'b03',
		idread:'r03',
		borowday:'3/9/2018',
		returnday:'1/9/2018'
	}
];

function findRead(idread)
{
	var findRead = read.find(function(x)
	{
		return x.idread===idread;
	});
	return findRead;
}

function findBook(idbook)
{
	var findBook = book.find(function(x)
	{
		return x.idbook === idbook;
	});
	return findBook;

}

function listBorowBook(borow)
{
	borow.map(function(x)
	{
		var nameBook = findBook(x.idbook);
		var nameRead = findRead(x.idread);
		console.log(nameBook.name + ' Name Borow: '+nameRead.name +' BorowDay: '+x.borowday +' ReturnDay: '+x.returnday)
	});
}
//console.log(findBook());
console.log(listBorowBook(borow));


function showBorowLate(borow,idread)
{
	var bookBorow = [];
	bookBorow = borow.filter(function(x)
	{
		return x.idread === idread;
	});
	var now =new Date();
	var lateDay = 0;
	bookBorow.map(function(x)
	{
		var lateDayOff = 0;
		if(now.getTime() >(new Date(x.returnday)).getTime())
		{
			lateDayOff += Math.floor((now.getTime()-new Date(x.returnday))/1000/60/60/24);
			lateDay += lateDayOff;
			console.log(x.idbook, 'Late Day', lateDayOff, ' Day');
		}
	});
	if(lateDay === 0)
	{
		console.log(idread,' Not found book late day');
		return;
	}
	console.log('Sum LateDay: ',lateDay);
}

showBorowLate(borow,'r01');

var library = [

];