const fs = require('fs');

// Read pdf file into variable book, use book variable to replace end of sentence punctuation with a | for easy identification
//Split the end of every sentence into its own index within the array with all the book text. 
const book = fs.readFileSync('../pressfield/the-war-of-art.txt').toString();
const cleaned = book.replace(/[.]/g,".|").replace(/[!]/g,"!|").replace(/[?]/g,"?|").replace(/[:]/g,"|").replace(/[']/g,"|").replace(/["]/g,"|");

const text = cleaned.split("|");
const amount = text.length;
//Export for use outside this file
module.exports.text = text;
module.exports.amount = amount;