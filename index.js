var readlineSync = require('readline-sync');

var fs=require('fs');

var phonedata =[];


function loadData() {
	var read = fs.readFileSync('data.json','utf-8');
	return phonedata = JSON.parse(read);
}

function change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    str = str.replace(/ + /g," ");
    str = str.trim(); 
    return str;
}

function showMenu() {
	console.log('  Menu Contacts');
	console.log('0. Show Contacts')
	console.log('1. Add Contacts');
	console.log('2. Search Contacts');
	console.log('3. Edit Contacts');
	console.log('4. Delete Contacts ');
}
loadData();
function main() {
	
	showMenu();
	var option = readlineSync.question('Choose: ');
	switch(option)
	{
		case '0':
		showAll();
		break;
		case '1':
		showAdd();
		break;
		case '2':
		showSearch();
		break;
		case '3':
		showEdit();
		break;
		case '4':
		showDelete();
		break;
		default:
		console.log('WRONG!');
		break;
	}
}
//hien thi ra menu
function showAll() {
	for(var content of phonedata)
	{
		console.log(content.name, content.phone);
	}
	showMenu();
}
//them lien he moi
function showAdd(){
	var name =readlineSync.question('Name: ');
	var phone =readlineSync.question('Phone: ');
	var contacts= {};
	contacts.name = name;
	contacts.phone = phone;

	phonedata.push(contacts);
	var stringArr = JSON.stringify(phonedata);
	console.log(stringArr);
	// fs.writeFileSync('./data.json', stringArr);
	// fs.writeFiLeSync('./data.json', stringArr);
	fs.writeFileSync('./data.json', stringArr);
	showMenu();
}

function getIdContact() {
	loadData();
  for (var i = 0; i < phonedata.length; i++) {
    phonedata[i];
  }
  return i;
}
//xoa lien he
function showDelete(){

}
//chinh sua lien he
function showEdit(){
	showAll(phonedata);
	console.log('Enter contact to edit');
  var ans = readLine.question(">");
  ans = Number(ans);
  var obj =phonedata[ans-1];
  var newPhone = read.question('Enter a new phone('+obj.phone+'):');
  var newName = read.question('Enter a new name('+obj.name+'):');
  phonedata[ans-1].phone = newPhone;
  phonedata[ans-1].name = newName;
  fs.writeFile("data.json",JSON.stringify(phonedata),(err)=>{
    if(!err){
   return "Sửa liên hệ thành công";
   show_menu();
    }else{
      console.log("Có lỗi xảy ra. Vui lòng thử lại");
      showEdit();
    }
  });
}
//tim kiem lien he
function showSearch(){
	var checkSearch = 0;
	var input = change_alias(readlineSync.question('Enter the information you want to search!   '));
	for(var i of phonedata){
		for(var j in i){
			if(change_alias(i[j]).toLowerCase() === input.toLowerCase())
			{
				console.log(i.name, i.phone);
				checkSearch = 1;
			}
		}
	}
	if(checkSearch === 0) console.log('Not Found!');
	}


main();