//All imports needed
const Twit = require('twit');
const keys = require('../config');
const content = require('./quotes');

//Initiate connection to twitter api
const T = new Twit(keys);

const tweet = {
    status: 'Resistance will always exist, make overcoming it a habit'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
    if(err){
        console.log("Something went wrong");
    } else {
        console.log(data);
    }
}