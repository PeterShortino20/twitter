const fs = require('fs');

//Input Local file path to txt file generated from your command line pdftextextract command from ReadMe
const book = fs.readFileSync('~/pressfield/the-war-of-art.txt').toString();
//Makes the text into one long string. Adds additional "|" to punctuation. We then make a sub array of every sentence in the book roughly.
const text = book.replace(/(\r\n|\n|\r|\f)/gm," ").replace(/[.]/g,".|").replace(/[!]/g,"!|").replace(/[?]/g,"?|").replace(/[:|'|"]/gm,"|").split("|");
const amount = text.length;
//Export modules for outside use
module.exports.text = text;
module.exports.amount = amount;