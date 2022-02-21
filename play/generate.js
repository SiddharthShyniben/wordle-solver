import {sort} from './smart-sort.js';

export default function* wordle(length, words) {
	const guesses = [];
	let matches = words;

	const word = yield null;
	const colors = yield null;

	guesses.push({word, colors});
	matches = sort(findMatchingWords(word, colors, matches));

	yield matches;
}
