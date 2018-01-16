/**
 * Address.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
		area: {
	        type: 'email',
	    },
	    city: {
	        type: 'string',
	    },
	    pin : {
	    	type: 'string',
	    },
	    user: {
	    	type: 'User',
	    }
  },

  getAllAddressesOfUser : function(opts, cb){

  	// req to other server app
  	 Address.find({}).exec(function(err, addresses) {
      	console.log('addresses :',addresses);
          if(err)
              return cb(err);
          else {
              cb(null, addresses);
          }
      });
  }

};

