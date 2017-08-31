/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req, res) {
		console.log("Got hit to create a new user!");

		User.create(req.body).then(function (err, user) {
			if (err) {
				console.log("Got an error making that new user: ", err);
				res.send(err);
			}

			res.send(user);
		});
	},

	all: function (req, res) {
		User.find().then(function (users) {
			res.send(users);			
		});
	}
};