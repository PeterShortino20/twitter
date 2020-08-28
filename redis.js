//When downloading redis, make sure to intialize it with command redis-server in your terminal
const fs = require('fs');
const assert = require('assert');
//file path to your txt file generated from pdf-text-extract
const filename = '../pressfield/the-war-of-art.txt';

if (process.env.REDISTOGO_URL) {
    var rtg   = require("url").parse(process.env.REDISTOGO_URL);
    var redis = require("redis").createClient(rtg.port, rtg.hostname);
    redis.auth(rtg.auth.split(":")[1]);
} else {
    var redis = require("redis").createClient();
};

// Read a file from fs, store it in Redis, get it back from Redis, write it back to fs.
fs.readFile(filename, function (err, data) {
    if (err) throw err;
    console.log('Read ' + data.length + ' bytes from filesystem.');

    client.set(filename, data, redis.print); // set entire file
    client.get(filename, function (err, reply) { // get entire file
        if (err) {
            console.log('Get error: ' + err);
        } else {
            assert.strictEqual(data.inspect(), reply.inspect());
            fs.writeFile('duplicate_' + filename, reply, function (err) {
                if (err) {
                    console.log('Error on write: ' + err);
                } else {
                    console.log('File written.');
                }
                client.end();
            });
        }
    });
});