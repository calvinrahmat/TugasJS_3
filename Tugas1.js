const cekHariKerja = (day) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
			let cek = dataDay.find((item) => {
				return item === day;
			});
			if (cek) {
				resolve(cek);
			} else {
				reject(new Error('Hari ini bukan hari kerja'));
			}
		}, 3000);
	});
};

/*cekHariKerja('senin')
	.then((message) => {
		console.log('hari kerja');
	})
	.catch((error) => {
		console.log('error: ' + error.message);
	});*/

try {
	cekHariKerja('senin');
} catch (error) {
	console.log('error: ' + error.message);
}
