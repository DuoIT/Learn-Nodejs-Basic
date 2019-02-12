var classes =[
	{
		id: 1,
		name:'1A',
		teachers:1,
		students: [1,2,3,4]
},
	{
		id:2,
		name:'2A',
		teachers:2
	},
	{
		id:3,
		name:'3A',
		teachers:3
	},
	{
		id:4,
		name:'4A',
		teachers:4
	},
	{
		id:5,
		name:'5A',
		teachers:5
	}
];


var teachers = [
	{
		id: 1,
			name: 'Ngoc',
			age: 26
	},
	{
		id: 2,
			name: 'Ngoc',
			age: 26
	},
	{
		id: 3,
			name: 'Ngoc',
			age: 26
	},
	{
		id: 4,
			name: 'Ngoc',
			age: 26
	},
	{
		id: 5,
			name: 'Ngoc',
			age: 26
	},
];

var students = [
	{
		id: 1,
			name:'Huy',
			height: 160,
			class: 1
		},
		{
			id: 2,
			name:'Huy',
			height: 160,
			class:1
		},
		{
			id: 3,
			name:'Huy',
			height: 160,
			class:1
		},
		{
			id: 4,
			name:'Huy',
			height: 160,
			class:1
		}
];



function getStudentsInClass(className)
{
	var classObject = classes.find(function(x)
	{
		return x.name ===className;
	});


	var getStudentsInClass=students.filter(function(students){
		return students.class === classObject.id;
	});
	return getStudentsInClass;
}

var getStudentsInClass = getStudentsInClass('1A');
console.log(getStudentsInClass);







// var classObject = classes.find(function(x)
// {
// 	return x.name ==='1A';
// });

// console.log(classObject.students.length);