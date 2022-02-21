import words, {findMatchingWords} from './src/words.js';
import compareGuess from './src/compare-guess.js';
import fs from 'fs';

const wordCount = words.length;

const s = 'byg';
const p = [];

console.log('gen perms');
for (let i = 0; i < 3; i++) {
	for (let j = 0; j < 3; j++) {
		for (let k = 0; k < 3; k++) {
			for (let l = 0; l < 3; l++) {
				for (let m = 0; m < 3; m++) {
					p.push(s[i] + s[j] + s[k] + s[l] + s[m]);
				}
			}
		}
	}
}
console.log('done');

const pickup = fs.readFileSync('best-words.txt', 'utf8').split('\n')[0]?.split(':')[0];

let i = 0;

if (pickup) {
	i = words.indexOf(pickup)
	console.log('Picking up from', words[i]);
} else console.log('Starting from scratch');

for (i; i < words.length; i++) {
	const word = words[i];
	const permutations = p.map(p => ({prob: findMatchingWords(word, p).length / wordCount}))

	const score = permutations.map(x => x.prob * Math.log2(1 / x.prob)).map(x => x != x ? 0 : x).reduce((a, b) => a + b);

	console.log(word + ':', score);
	fs.appendFileSync('best-words.txt', word + ': ' + score + '\n');
}

stream.end()
