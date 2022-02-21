import {resolve, dirname} from 'path';
import {fileURLToPath} from 'url';
import {readFileSync} from 'fs';

import compareGuess from './compare-guess.js';

const wordsPath = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'data', 'possible_words.txt');
const words = readFileSync(wordsPath, 'utf8').split('\n');

export default words;
