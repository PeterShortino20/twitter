//All imports needed
const Twit = require('twit');
require('dotenv').config();

const keys = {
    consumer_key: CONSUMERKEY,
    consumer_secret: CONSUMER_SECRET,
    access_token: ACCESS_TOKEN,
    access_token_secret: ACCESS_TOKEN_SECRET
};
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