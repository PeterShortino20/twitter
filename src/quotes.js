const book = require('./book');

//Generating random number based on the length of the Array of text. This number will be used as the index to
//pull information from. We will also need the next index following the one chosen. 
const num1 = Math.floor(Math.random() * book.amount);
const num2 = num1 + 1;

//Put the two quotes from the book into thier own objects quote1 and quote2
const quote1 = book.text[num1];
const quote2 = book.text[num2];

//Combine into one large quote for a future tweet
const twitquote = String(quote1 + quote2)

//Export the quote for later twitter use in bot.js
module.exports.twitquote = twitquote;