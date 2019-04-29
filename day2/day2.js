const fs = require('fs');

const input = fs.readFileSync('./input2.txt', 'utf-8').split(/\r?\n/)


const first = (input) =>{

  let counts = { '3': 0, '2': 0 };

  input.forEach(element => {
		let mapper = {};
		for (let c of element) {
			mapper[c] = mapper[c] || 0;
			mapper[c]++;
		}
		let twof = false;
		let threef = false;
		Object.keys(mapper).forEach(k => {
			if (!twof && mapper[k] === 2) {
				counts[2] += 1;
				twof = true;
			}
			if (!threef && mapper[k] === 3) {
				counts[3] += 1;
				threef = true;
			}
		});
	});

	return counts['3'] ? counts['3'] * (counts['2'] ? counts['2'] : 1) : counts['2'];
}

const second =(input)=>{
  let candidate = [];

	for (let i = 0; i < input.length; i++) {
		for (let j = i + 1; j < input.length; j++) {
			let can = input[i];
			let t = input[j];
			let diff = 0;
			let index = -1;
			for (let k = 0; k < can.length; k++) {
				if (can[k] !== t[k]) {
					diff++;
					index = k;
					if (diff > 1) break;
				}
			}
			if (diff === 1) {
				candidate.push(can);
				candidate.push(t);
				candidate.push(index);
			}
		}
	}
	let result = candidate[0].split('');
	result.splice(candidate[2], 1);
	return result.join('');
}

console.log(first(input));
console.log(second(input));
