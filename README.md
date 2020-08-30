# Generate random quotes from any local Pdf, and send tweets. 

PDF to Text

Installation:
- Navigate to https://github.com/nisaacson/pdf-extract#osx to download pdftotext
- Open your terminal and type in the command: brew install poppler

Type the following command into your terminal for CLI for pdftextextract:  npm install -g pdf-text-extract

Popular commands can be found at https://www.xpdfreader.com/pdftotext-man.html
An example command in the terminal would be "pdf-text-extract -f 13 ~/filepath_to_your_pdf". This would get all the text from page 13 to the end of the book/pdf. 

GENERATING RANDOM QUOTES FROM PDF & TWEETING IT

Quote Generation
getQuotes() function will allow for you to grab 2 consecutive quotes in the pdf. Next the function will format your tweet for you based on the character length of the combined 
quotes.

Twitter Set up
You will need to go to http://developer.twitter.com/ and sign up for a developer account. This can take up to two weeks and has been seeing issues during corona.
Once you get your api keys for your accepted developer account, you are ready to configure your bot. 

.ENV and HIDING API KEYS
Make a .env file in the following format: 
CONSUMER_KEY=YOUR_CONSUMER_KEY_HERE
CONSUMER_SECRET=YOUR_CONSUMER_SECRET_HERE
ACCESS_TOKEN=YOUR_ACCESS_TOKEN
ACCESS_TOKEN_SECRET=YOUR_ACCESS_TOKEN_SECRET_HERE

Make sure to add .env to the gitignore file. 

THE TWITTER BOT
We wil use the twit package on github to use as a framework to interact with the Twitter api.
https://github.com/ttezel/twit

USE process.env.CONSUMER_KEY to set your Twitter API keys in the bot file. Do this for all your api keys. 

https://developer.twitter.com/en/docs/api-reference-index will give you all the possible commands that are available via the Twitter api.