import Twit from 'twit';
import  keys from './config.js';
const T = new Twit(keys);




T.get('search/tweets', { q: 'rainbow', count:10}, function(err, data, response){
    console.log(data)
});

function gotData(err, data, response) { 
    console.log(gotData);
};
console.log(gotData);