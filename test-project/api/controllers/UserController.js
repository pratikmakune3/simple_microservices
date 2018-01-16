/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getAllUsers : function(req, res){
		console.log('UserController');
		User.getAllUsers(req.body, function(err,users){
			console.log('controller req.body', req.body);
			if (err)
				return res.negotiate(err);
			res.json(users);
		});
	}
};

