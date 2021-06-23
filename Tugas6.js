const fetch = require('node-fetch');
const api_url = 'https://reqres.in/api/users/4';

let data = {
	id: 4,
	email: 'eve.holt@reqres.in',
	first_name: 'Yve',
	last_name: 'astrowarden',
	avatar: 'https://reqres.in/',
};

async function api() {
	const res = await fetch(api_url);
	const data_api = await res.json();
	return data_api;
}

let data2 = api();

async function objectCompare(data1, data2) {
	let originalData = Object.entries(data1);

	let apiData = Object.entries(data2);

	for (let i = 0; i < originalData.length; i++) {
		let array1 = originalData[i];
		let array2 = apiData[i];
		if (array1 != array2) {
			result = 'false';
		} else {
			result = 'true';
		}
	}
	console.log(result);
}

objectCompare(data, data2);
