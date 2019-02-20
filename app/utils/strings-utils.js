const capitalize = (word = '') => {
	return word.charAt(0).toUpperCase() + word.slice(1);
};

const concatWords = (words = []) => {
	return words.split(' ').reduce((prevWord, word) => {
		return prevWord + word;
	});
};

const camelCaseIt = (phrase = '') => {
	return phrase.toLowerCase().split(' ').reduce((camel, Case) => {
		return camel + capitalize(Case);
	});
};

const removeExtension = (str = '', extension = '') => {
	return str.replace(extension, '');
};

module.exports = {
	capitalize,
	concatWords,
	camelCaseIt,
	removeExtension
};