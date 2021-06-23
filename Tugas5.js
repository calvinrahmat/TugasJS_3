const fetch = require('node-fetch');
const api_url = 'https://jsonplaceholder.typicode.com/users';

async function dataPerson() {
	const res = await fetch(api_url);
	if (res.ok) {
		console.log('fetch success!');
	} else {
		console.log('fetch failed!');
	}
	const data = await res.json();
	let result = data.map((d) => d.name);
	console.log(result);
}

dataPerson();
