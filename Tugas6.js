const fetch = require('node-fetch');
const api_url = 'https://reqres.in/api/users/4';

let data = {
	id: 4,
	email: 'astrowarden@moba.ml',
	first_name: 'Yve',
	last_name: 'astrowarden',
	avatar: 'https://reqres.in/',
};

async function objectCompare(data1, data2) {
	const res = await fetch(api_url);
	const data_api = await res.json();
	let email_api = data_api.data.email;
	let firstName_api = data_api.data.first_name;
	let lastName_api = data_api.data.last_name;
	let avatar_api = data_api.data.avatar;
	if (email_api != data.email) {
		console.log('false');
	}
}

objectCompare();
