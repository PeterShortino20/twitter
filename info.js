const fs = require('fs');

const array = fs.readFileSync('../pressfield/the-war-of-art.txt').toString();
const period = array.replace(/[.]/g,".|");
const exclamation = period.replace(/[!]/g,"!|");
const question = exclamation.replace(/[?]/g,"?|");
const clean = question.replace(/[|]/g,"\n");
const cut = clean.split("\n");

console.log(cut);