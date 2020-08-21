const fs = require('fs');

// Read pdf file into variable book, use book variable to replace end of sentence punctuation with a | for easy identification
//Split the end of every sentence into its own index within the array with all the book text. 
const book = fs.readFileSync('../pressfield/the-war-of-art.txt').toString();
const period = book.replace(/[.]/g,".|");
const exclamation = period.replace(/[!]/g,"!|");
const question = exclamation.replace(/[?]/g,"?|");
const text = question.split("|");
const amount = text.length


module.exports.amount = amount;