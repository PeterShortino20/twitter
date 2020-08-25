const book = require('./book');

//Generating random number based on the length of the Array of text. This number will be used as the index to
//pull information from. We will also need the next index following the one chosen.
function getQuotes(){
    const num1 = Math.floor(Math.random() * book.amount);
    const num2 = num1 + 1;

//Put the two quotes from the book into thier own objects quote1 and quote2
    const quote1 = book.text[num1];
    const quote2 = book.text[num2];
    const combined = String(quote1 + quote2).length;

//Combine into one large quote for a future tweet. The if statement takes into account the formatting
// of text on the actual tweet.
    if (combined < 38){
        let twitquote = String(quote1 + quote2 + '\n' + '#Resistance #WarofArt');
        return twitquote
    } else if (combined < 60) {
        let twitquote = String(quote1 + quote2 + '\n' + '#Resistance');
        return twitquote
    } else if (combined > 118 && combined < 182) {
        let twitquote = String(quote1 + '\n\n' + quote2);
        return twitquote
    } else if (combined > 239) {
        let twitquote = String(quote1 + '\n\n'+ quote2);
        return twitquote
    } else {
        let twitquote = String(quote1 + '\n\n' + quote2 + ' #Resistance');
        return twitquote
    }
};
module.exports = {
    getQuotes
};
