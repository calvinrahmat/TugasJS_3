const cars = [
	{
		brand: 'BMW',
		model: 'X6',
		color: 'Silver',
	},
	{
		brand: 'Lamborghini',
		model: 'Aventador',
		color: 'Yellow',
	},
	{
		brand: 'Mercedes',
		model: 'S Class',
		color: 'Black',
	},
	{
		brand: 'Tesla',
		model: 'Model S',
		color: 'White',
	},
	{
		brand: 'Daihatsu',
		model: 'Xenia',
		color: 'Black',
	},
];

const randomCarGenerator = () => {
	console.log('Please wait your car is arrived ....');
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let randomIndex = Math.floor(Math.random() * cars.length);
			let selectedCar = cars[randomIndex];
			let convert = JSON.stringify(selectedCar);
			if (convert) {
				resolve(convert);
			} else {
				reject(new Error('No car available right now please try again'));
			}
		}, 1000);
	});
};

randomCarGenerator()
	.then((message) => {
		console.log(message);
	})
	.catch((error) => {
		console.log(error);
	});

const Person = [
	{
		Name: 'Billy',
		Age: 15,
		Gender: 'male',
	},
	{
		Name: 'Kenji',
		Age: 25,
		Gender: 'male',
	},
	{
		Name: 'Selly',
		Age: 13,
		Gender: 'female',
	},
	{
		Name: 'Bianca',
		Age: 20,
		Gender: 'female',
	},
];

const personFilter = (gender) => {
	console.log('generating data ...');
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (gender == 'female') {
				let filtered = Person.filter((y) => {
					return y.Gender == 'female';
				});
				resolve(filtered);
			} else if (gender == 'male') {
				let filtered = Person.filter((z) => {
					return z.Gender == 'male';
				});
				resolve(filtered);
			} else {
				reject(new Error('No data available'));
			}
		}, 2000);
	});
};

// personFilter('male')
// 	.then((message) => {
// 		console.log(message);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});
