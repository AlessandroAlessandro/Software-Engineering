'use strict';
/*
 Import modules/files you may need to correctly run the script.
 Make sure to save your DB's uri in the config file, then import it with a require statement!
*/
var fs = require('fs'),
   mongoose = require('mongoose'),
   Schema = mongoose.Schema,
   Listing = require('./ListingSchema.js'),
   config = require('./config'),
   list = require('./listings.json'),
   data = list.entries;

/* Connect to your database */

var connection = mongoose.connect(config.db.uri, { useMongoClient: true });
/*
 Instantiate a mongoose model for each listing object in the JSON file,
 and then save it to your Mongo database
*/


var listings = require('./listings.json');
for (var i = 0; i < listings.entries.length; i++) {
    var temp = new Listing({
        code: list.entries[i].code,
        name: list.entries[i].name,
        "coordinates": list.entries[i].coordinates,
        address: list.entries[i].address
    });
    temp.save(function (err) {
        if (err) throw err;
    });
};

/*
 Once you've written + run the script, check out your MongoLab database to ensure that
 it saved everything correctly.
*/