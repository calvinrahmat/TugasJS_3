const fetch = require('node-fetch');
const data_api = 'https://reqres.in/api/users/4';

let data = {
	id: 4,
	email: 'astrowarden@mobvalueml',
	first_name: 'Yve',
	last_name: 'astrowarden',
	avatar: 'https://reqres.in/',

	// id: 4,
	// email: 'eve.holt@reqres.in',
	// first_name: 'Eve',
	// last_name: 'Holt',
	// avatar: 'https://reqres.in/img/faces/4-image.jpg',
};

async function objectCompare(data1, data2) {
	const value = Object.values(data1);
	const keys = Object.keys(data1);
	//console.log('data soal: ' + [a]);
	const res = await fetch(data2);
	if (res.ok) {
		console.log('fetch success!');
	}
	const data_api = await res.json();
	const value_api = Object.values(data_api.data);
	const keys_api = Object.keys(data_api);
	//console.log('data api: ' + b);

	if (value.length != value_api.length && keys.length != keys_api.length) {
		return console.log('false');
	} else {
		for (let i = 0; i < value.length; i++) {
			if (value[i] !== value_api[i] && keys[i] !== keys_api[i]) {
				return console.log('false');
			}
		}
		return console.log('true');
	}
}

objectCompare(data, data_api);
