const fetch = require('node-fetch');
const data_api = 'https://reqres.in/api/users/4';

let data = {
	id: 4,
	email: 'astrowarden@moba.ml',
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
	const a = Object.values(data1);
	//console.log('data soal: ' + [a]);
	const res = await fetch(data2);
	if (res.ok) {
		console.log('fetch success!');
	}
	const data_api = await res.json();
	const b = Object.values(data_api.data);
	//console.log('data api: ' + b);

	if (a.length != b.length) return 'False';
	else {
		for (let i = 0; i < a.length; i++)
			if (a[i] != b[i]) {
				return 'False';
			}
		return 'True';
	}
}

objectCompare(data, data_api)
	.then((message) => {
		console.log(message);
	})
	.catch((error) => {
		console.log('terjadi kesalahan: ' + error.name);
	});
