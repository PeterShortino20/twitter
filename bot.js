import Twit from 'twit';
import  keys from './config.js';
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

//T.get('search/tweets', { q: 'rainbow', count:10}, function(err, data, response){
//    console.log(data)
//});

//function gotData(err, data, response) { 
//    console.log(gotData);
//};
//console.log(gotData);