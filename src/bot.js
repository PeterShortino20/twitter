//All imports needed
const Twit = require('twit');
const content = require('./quotes');
require('dotenv').config();

const keys = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
};
let quotes = content.getQuotes();


//Initiate connection to twitter api
const T = new Twit(keys);
//Declare tweet variable for use

//Send a Tweet every 4 hours
statusQuotes();

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