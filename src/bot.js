//All imports needed
const Twit = require('twit');
const keys = require('../config');
const content = require('./quotes');

//Initiate connection to twitter api
const T = new Twit(keys);
//Declare tweet variable for use

//Send a Tweet every 4 hours
updateStatus();
setInterval(updateStatus, 14400000);

function updateStatus(){
    let tweet = {
        status: content.getQuotes()
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