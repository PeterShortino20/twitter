//All imports needed
const Twit = require('twit');
const keys = require('./config');
const content = require('./quotes');
let quotes = content.getQuotes();

//Initiate connection to twitter api
const T = new Twit(keys);
//Declare tweet variable for use

//Send a Tweet every 4 hours
statusQuotes();
setInterval(statusQuotes, 14400000);

function statusQuotes(){
    let tweet = {
        status: quotes
    };
    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response){
        if(err){
            console.log("Something went wrong");
        } else {
            console.log(data);
        }
    };
};
//Build function for tweeting image once every x amount of time. 