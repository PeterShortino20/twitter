const fs = require('fs');

// Read pdf file into variable book, use book variable to replace end of sentence punctuation with a | for easy identification
//Split the end of every sentence into its own index within the array with all the book text. 
const book = fs.readFileSync('../pressfield/the-war-of-art.txt').toString();
const text = book.replace(/[.]/g,".|").replace(/[!]/g,"!|").replace(/[?]/g,"?|").replace(/[:]/g,"|").replace(/[']/g,"|").replace(/["]/g,"|").split("|");
const amount = text.length;

//Export modules for outside use
module.exports.text = text;
module.exports.amount = amount;