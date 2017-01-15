// app/routes.js

// grab the nerd model we just created
var Alert = require('./models/alert');
var Secrets = require('./secrets/secrets.js')
var Wunderground = require('wundergroundnode');
console.log(Secrets.wundergroundKey())
var wunderground = new Wunderground(Secrets.wundergroundKey())

var AWS = require('aws-sdk');

var s3 = new AWS.S3();


var sns = new AWS.SNS();
sns.addPermission(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});


var params = {
  Message: 'STRING_VALUE', /* required */
  MessageAttributes: {
    someKey: {
      DataType: 'STRING_VALUE', /* required */
      BinaryValue: new Buffer('...') || 'STRING_VALUE',
      StringValue: 'STRING_VALUE'
    },
    /* anotherKey: ... */
  },
  MessageStructure: 'STRING_VALUE',
  PhoneNumber: 'STRING_VALUE',
  Subject: 'STRING_VALUE',
  TargetArn: 'STRING_VALUE',
  TopicArn: 'STRING_VALUE'
};
sns.publish(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

module.exports = function(app) {
    // server routes ===========================================================
    // handle things like api calls
    // authentication routes
    app.get('/api/weather/:zip', function(req, res) {
        var zip = req.params.zip;
        wunderground.conditions().request(zip, function(err, weatherResponse) {
            res.send(weatherResponse);
        });
    });

    // sample api route
    app.get('/api/alerts', function(req, res) {
        // use mongoose to get all nerds in the database
        Alert.find(function(err, alerts) {
            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(alerts); // return all nerds in JSON format
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};
