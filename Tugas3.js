function checkPass(pass, level) {
	let randomChar = '';
	let randomNumber = '';
	let length = pass.length;
	let symbol = '!@#$';
	let char = 'abcdefghijklmnopqrstuvwxyz';
	let numbers = '123456789';
	let randomIndexSymbol = Math.floor(Math.random() * symbol.length);
	let randomSymbol = symbol.charAt(randomIndexSymbol);
	let newPass =
		pass.charAt(0).toUpperCase() +
		pass.slice(1, length - 1) +
		pass.charAt(length - 1).toUpperCase();
	for (let i = 1; i <= 6 - pass.length; i++) {
		randomChar += char.charAt(Math.floor(Math.random() * char.length));
	}
	for (let i = 0; i <= pass; i++) {
		newPass += pass.charAt(Math.floor(Math.random())).toUpperCase;
	}
	for (let i = 0; i < 2; i++) {
		randomNumber += numbers.charAt(Math.floor(Math.random() * numbers.length));
	}

	if (level === 'low') {
		if (pass.length < 6) {
			result = pass + randomChar + randomNumber;
			console.log(result);
		} else {
			result = pass + randomNumber;
			console.log(result);
		}
	}
	if (level === 'good') {
		if (pass.length <= 6) {
			let randomCharGood = '';
			for (let i = 1; i <= 6 - pass.length; i++) {
				randomCharGood += char.charAt(Math.floor(Math.random() * char.length));
			}
			randomCharGood = newPass + randomCharGood + randomNumber;
			console.log(randomCharGood);
		} else {
			result = pass + randomNumber;
			console.log(result);
		}
	}

	if (level === 'strong') {
		if (pass.length <= 6) {
			result = newPass + randomSymbol + randomChar + randomNumber;
			console.log(result);
		} else {
			result = newPass + randomSymbol + randomNumber;
			console.log(result);
		}
	}
}

checkPass('abcd', 'strong');
