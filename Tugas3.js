let randomChar = '';
let randomCharLow = '';
let randomNumber = '';
let symbol = '!@#$';
let char = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '123456789';
let randomIndexSymbol = Math.floor(Math.random() * symbol.length);
let randomSymbol = symbol.charAt(randomIndexSymbol);

function checkPass(pass, level) {
	let length = pass.length;
	let newPass =
		pass.charAt(0).toUpperCase() +
		pass.slice(1, length - 1) +
		pass.charAt(length - 1).toUpperCase();
	for (let i = 1; i <= 6 - pass.length; i++) {
		randomChar += char.charAt(Math.floor(Math.random() * char.length));
	}
	for (let i = 1; i <= 4 - pass.length; i++) {
		randomCharLow += char.charAt(Math.floor(Math.random() * char.length));
	}
	for (let i = 0; i < 2; i++) {
		randomNumber += numbers.charAt(Math.floor(Math.random() * numbers.length));
	}

	if (level === 'low') {
		if (length < 6) {
			result = pass + randomCharLow + randomNumber;
			console.log(result);
		} else {
			result = pass + randomNumber;
			console.log(result);
		}
	}
	if (level === 'good') {
		if (length < 6) {
			randomCharGood = newPass + randomChar + randomNumber;
			console.log(randomCharGood);
		} else {
			result = pass + randomNumber;
			console.log(result);
		}
	}

	if (level === 'strong') {
		if (pass.length < 6) {
			result = newPass + randomSymbol + randomChar + randomNumber;
			console.log(result);
		} else {
			result = newPass + randomSymbol + randomNumber;
			console.log(result);
		}
	}
}

checkPass('abcdef', 'low');
