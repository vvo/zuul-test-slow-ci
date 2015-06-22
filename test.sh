#!/usr/bin/env bash

set -e # exit when error

npm install zuul-ngrok
npm install tape
npm install lodash
npm install defunctzombie/zuul.git#517bf08559670ef77684104b8db4f388e5369017

echo "Testing without the modification"
time ./node_modules/.bin/zuul test.js > /dev/null

npm install vvo/zuul.git#9b93edd79222008db331b098c4771150872ba9ce
echo "Testing with the modification"
time ./node_modules/.bin/zuul test.js > /dev/null
