// temp, get unbug when im online
const debug = (...messages) => {
	if (process.env.DEBUG) console.debug('\u001b[31m debug \u001b[0m', ...messages);
}

export default function compareGuess(guess, color, answer) {
	debug('compareGuess', guess, color, answer)

	const matched = [];
	const len = guess.length;

	for (let i = 0; i < len; i++) {
		debug('loop')
		debug('guess [i]', guess[i])
		debug('color [i]', color[i])
		debug('answer[i]', answer[i])

		if (answer[i] === guess[i]) {
			debug('answer and guess are equal')

			if (color[i] !== 'g') {
				debug('color is not green, fail')
				return false;
			}

			matched.push(i);
		} else {
			debug('answer and guess are not equal')
			if (color[i] === 'g') {
				debug('color is green, fail')
				return false;
			}

			if (color[i] === 'y') {
				debug('color is yellow')
				const indexes = getAllIndexes(answer, guess[i])
				const filtered = indexes.filter(index => !matched.includes(index))

				if (filtered.length === 0) {
					debug('no match, fail')
					return false;
				}

				const first = filtered[0];
				matched.push(first);
			}

			if (color[i] === 'k' /* printers */ || color[i] === 'b') {
				debug('color is black')
				const allOccurances = getAllIndexes(answer, guess[i]);
				const filtered = allOccurances.filter(index => !matched.includes(index));

				if (filtered.length > 0) {
					if (!(guess[filtered[0]] === answer[filtered[0]])) {
						debug('Black but the char is there fail')
						return false;
					}
				}
			}
		}
	}

	return true;
}

function getAllIndexes(arr, val) {
	arr = [...arr]
	const indexes = [];
	for(let i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
	return indexes;
}
