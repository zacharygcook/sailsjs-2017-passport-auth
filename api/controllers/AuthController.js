/**
 * AuthController
 *
 * @description :: Server-side logic for managing authentication 
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var passport = require('passport');

module.exports = {

	login: function (req, res) {
		passport.authenticate('local', function (err, user, info) {
			if ((err) || (!user)) {
				// If error or user object not passed back
				return res.status(401).send({
					message: info.message,
					user: user
				});
			}

			// req.login() is a passport method available within request handlers
			req.logIn(user, function (err) {
				if (err) {
					res.status(401).send({
						message: info.message,
						user: user
					});
				}
			});

			console.log("Got down here to the end of function 'login' at AuthController");

			res.redirect('/post');

		})(req, res); // Called an Immediately-Invoked Function Expression - executes immediately after creation
		// https://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript
		// TODO: Rewrite in an easier to understand way

	},

	logout: function (req, res) {
		req.logout();
		res.redirect();
	}
	
};