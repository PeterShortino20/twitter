const fs = require('fs');
const woa = '/the-war-of-art.txt';
// Read pdf file into variable book, use book variable to replace end of sentence punctuation with a | for easy identification
//Split the end of every sentence into its own index within the array with all the book text. 
//const book = fs.readFileSync('the-war-of-art.txt').toString();
const text = woa.replace(/(\r\n|\n|\r|\f)/gm," ").replace(/[.]/g,".|").replace(/[!]/g,"!|").replace(/[?]/g,"?|").replace(/[:|'|"]/gm,"|").split("|");
const amount = text.length;
//Export modules for outside use
module.exports.text = text;
module.exports.amount = amount;