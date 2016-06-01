#! /usr/bin/env node
'use strict';

let express = require('express');

let app = express();
app
    .use(express.static('public'))
    .listen(3000, () => {
        console.log('Listening on localhost:3000')
    });