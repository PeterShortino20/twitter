const fs = require('fs');
const aws = require('aws-sdk');

const s3 = new aws.S3({ accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY });
const params = {
    Bucket: process.env.S3_BUCKET,
    Key: process.env.S3_KEY
};

s3.getObject(params, function(err,data){
    if (err){
        return data.body;
    } else {
        return data.Body
    }
});
//const book = fs.readFileSync();
//const text = book.replace(/(\r\n|\n|\r|\f)/gm," ").replace(/[.]/g,".|").replace(/[!]/g,"!|").replace(/[?]/g,"?|").replace(/[:|'|"]/gm,"|").split("|");
//const amount = text.length;
//Export modules for outside use
//module.exports.text = text;
//module.exports.amount = amount;