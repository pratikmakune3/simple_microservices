/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var request = require('request');

module.exports = {

  attributes: {
		email: {
	        type: 'email',
	    },
	    name: {
	        type: 'string',
	        // required: true
	    },
	    age : {
	    	type: 'string',
	    }
	},
    
    getAllUsers: function(opts, cb) {

        console.log('opts.userId', opts.userId);

        // request('http://www.google.com', function (error, response, body) {
        //   console.log('error:', error); // Print the error if one occurred
        //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //   console.log('body:', body); // Print the HTML for the Google homepage.
        // });

        // var results = request.post("http://localhost:2337/user/addresses", {form: opts}, function(err, result) {
        //     if (err) {
        //         sails.log.debug('web error in pay u service=', err);
        //         cb(err);
        //     } else {
        //         console.log('*******************');
        //         console.log(result);
        //         cb(null, result);
        //     }
        // });

        request.post({
                url: 'http://localhost:2337/user/addresses',
                form: opts
            },
            function (err, httpResponse, addressArray) {
                console.log('**********');
                // console.log(addressArray);
                User.findOne({ id: opts.userId}).exec(function(err, users) {
                	console.log('users :',users);
                    users.addresses = JSON.parse(addressArray)
                    if(err)
                        return cb(err);
                    else {
                        cb(null, users);
                    }
                });
            }
        );

        // console.log('outer results', results);

    },
  
};

