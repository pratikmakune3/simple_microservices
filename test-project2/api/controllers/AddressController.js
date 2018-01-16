/**
 * AddressController
 *
 * @description :: Server-side logic for managing addresses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getAllAddressesOfUser : function(req, res){
		Address.getAllAddressesOfUser(req.body, function(err,addresses){
			if (err)
				return res.negotiate(err);
			res.json(addresses);
		});
	}
};

