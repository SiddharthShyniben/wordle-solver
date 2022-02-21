import {findMatchingWords} from './words.js';
import compareGuess from './compare-guess.js';
import fs from 'fs';

const s = 'byg';
const p = [];

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

export default function sort(words) {
/*	let rest = [];

	if (words.length > 100) {
		rest = words.slice(100);
		words = words.slice(0, 100);
	}

	const res = [];

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		const permutations = p.map(p => ({prob: findMatchingWords(word, p, words).length / words.length}))

		const score = permutations.map(x => x.prob * Math.log2(1 / x.prob)).map(x => x != x ? 0 : x).reduce((a, b) => a + b);
		res.push({word, score});
	}

	return res.sort((a, b) => a.score - b.score).map(x => x.word).concat(rest); */
}
