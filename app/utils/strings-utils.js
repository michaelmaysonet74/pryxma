'use strict'; 

const upperFirst = (word = '') => {
	return word.slice(0, 1).toUpperCase() + word.slice(1);
};

const concatWords = (words = []) => {
	return words.split(' ').reduce((prevWord, word) => {
			return prevWord + word;
	});
};

const camelCaseIt = (phrase = '') => {
	return phrase.toLowerCase().split(' ').reduce((camel, Case) => {
		return camel + upperFirst(Case);
	});
};

module.exports = {
	upperFirst,
	concatWords,
	camelCaseIt
};