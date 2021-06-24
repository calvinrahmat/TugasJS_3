const getmonth = (callback) => {
	setTimeout(() => {
		let error = false;
		let month = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		if (!error) {
			callback(null, month);
		} else {
			callback(new Error('Sorry data not found', []));
		}
	}, 4000);
};

const displayMonth = (error, month) => {
	try {
		num = 10;
		let convert = month.map((y) => y.toUpperCase());

		for (let i = 0; i <= num - 1; i++) {
			console.log(convert[i]);
		}
	} catch {
		{
			console.log(error);
		}
	}
};

getmonth(displayMonth);
