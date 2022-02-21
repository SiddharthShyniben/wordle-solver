import readline from 'readline';
import {strict as assert} from 'assert';

import words, {findMatchingWords} from './src/words.js';
import {sort} from './src/smart-sort.js';

const cli = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const hl = s => `\u001b[32m${s}\u001b[0m`
const question = question => new Promise(resolve => {
	cli.question(hl(question), resolve);
});

const length = +(await question('Enter the length of the words: '));

if (isNaN(length)) {
	console.error('Length is not valid');
	process.exit(64);
}

const guesses = [];
let matches = words;

console.log(hl('Tip:'), 'salet is a very good starting guess')

const loop = async () => {
	const word = await question('Guess a word: ');
	assert.equal(word.length, length);

	const colors = await question('Enter the colors: ');
	assert.equal(colors.length, length);

	guesses.push({word, colors});

	matches = sort(findMatchingWords(word, colors, matches));

	if (matches.length === 0) {
		console.log(hl('No matches found! Something is wrong.'))
		process.exit(65)
	}

	if (colors === 'ggggg') {
		console.log('yay, you won!');
		cli.close();
		return;
	}

	console.log(`${matches.length} match${matches.length > 1 ? 'es' : ''} found!`);
	console.log(matches.slice(0, 10).map((x, i) => `${hl(i + 1)}. ${x}`).join('\n'));

	loop();
}

loop();
