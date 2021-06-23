const fetch = require('node-fetch');
const data_api = 'https://reqres.in/api/users/4';

let data = {
	id: 4,
	email: 'astrowarden@moba.ml',
	first_name: 'Yve',
	last_name: 'astrowarden',
	avatar: 'https://reqres.in/',
};

async function objectCompare(data1, data2) {
	const value = Object.values(data1);
	const res = await fetch(data2);
	const data_api = await res.json();
	const value_api = Object.values(data_api.data);

	for (let i = 0; i < value.length - 1; i++) {
		let array1 = value[i];
		let array2 = value_api[i];
		if (array1 != array2) {
			result = 'false';
		} else {
			result = 'true';
		}
	}
	console.log(result);
}

objectCompare(data, data_api);
