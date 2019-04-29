const fs = require('fs');

const input = fs.readFileSync('./challenge.txt', 'utf-8').split(/\r?\n/).map(l => l.trim()).map(l => parseInt(l));



var currFreq = 0;

const first = () => {
  const sum = input.reduce((prev,curr) => {
    return prev + curr;
  }, 0)
  console.log(sum)
}

const second=(input)=> {
	var keys = [0];
	var frequency = 0;
	while(1) {
		for(i in input) {
			frequency += input[i];
			if (keys.indexOf(frequency) !== -1)
       return(frequency);
			keys.push(frequency);
		};
	}
}


first();
console.log(second(input));
