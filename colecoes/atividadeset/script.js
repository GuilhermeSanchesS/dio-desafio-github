// SET
/*function getAdmins(map){
	let admins = [];
	for([kew, value] of map){
		if(value ==='Admin'){
			admins.push(key);
		}
	}
	return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));*/

// Array

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]
function valoresUnicos(arr){
	const mySet = new Set(arr);

	//return mySet;  => Set(6) { 30, 40, 5, 223, 2049, 3034 }
	return [...mySet]; // => [30, 30, 40, 5, 223, 2049, 3034, 5]
}

console.log(valoresUnicos(meuArray));