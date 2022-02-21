import {resolve, dirname} from 'path';
import {fileURLToPath} from 'url';
import {readFileSync} from 'fs';

import possibleWords from './possible-words.js';
import compareGuess from './compare-guess.js';

const wordsPath = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'data', 'freq_map.json');
const frequencyMap = JSON.parse(readFileSync(wordsPath));

export default frequencyMap;

export function sort(list) {
	return list.sort((a, b) => frequencyMap[b] - frequencyMap[a]).sort((a, b) => possibleWords[a] ? -1 : possibleWords[b] ? 1 : 0);
}
