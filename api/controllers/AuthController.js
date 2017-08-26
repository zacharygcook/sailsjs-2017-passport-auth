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
				return res.send({
					message: info.message,
					user: user
				});
			}

			// req.login() is a passport method available within request handlers
			req.logIn(user, function (err) {
				if (err) {
					res.send({
						message: info.message,
						user: user
					});
				}
			});

			console.log("Got down here to the end of function 'login' at AuthController");

			res.redirect('/post');

		})(req, res); // Posted stackoverflow question about this (req, res) at the end: 
		// https://stackoverflow.com/questions/45899685/what-does-the-last-parenthetical-on-something-like-functionreq-res-me
		// TODO: Rewrite in an easier to understand way

	},

	logout: function (req, res) {
		req.logout();
		res.redirect();
	}
	
};