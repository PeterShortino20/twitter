const fs = require('fs');

const book = fs.readFileSync('../pressfield/the-war-of-art.txt').toString();
const period = book.replace(/[.]/g,".|");
const exclamation = period.replace(/[!]/g,"!|");
const question = exclamation.replace(/[?]/g,"?|");
const clean = question.split("|")
console.log(clean);

module.exports.clean = clean;