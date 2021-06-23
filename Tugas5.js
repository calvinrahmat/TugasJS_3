const fetch = require('node-fetch');
const api_url = 'https://jsonplaceholder.typicode.com/users';

async function dataPerson() {
	const res = await fetch(api_url);
	const data = await res.json();
	console.log(data);
	let result = data.map((d) => d.name);
	console.log(result);
}

dataPerson();
