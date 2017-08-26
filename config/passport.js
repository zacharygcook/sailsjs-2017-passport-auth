var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

passport.serializeUser(function (user, cb) {
	cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
	User.findOne({id: id}, function (err, user) {
		cb(err, user);
	});
});

passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, function (email, password, cb) {

	User.findOne({ email: email }, function (err, user) {
		if (err) return cb(err);
		if (!user) {
			return cb(null, false, { message: 'User with that email not found' });
		}

		bcrypt.compare(password, user.password, function (err, res) {
			if (!res) {
				return cb(null, false, { message: 'Invalid password' });
			}
			var returnUser = {
				email: user.email,
				createdAt: user.createdAt,
				id: user.id
			}

			console.log("User was logged in effectively.");
			return cb(null, returnUser, { message: 'Logged in successfully' });
		});

	});

}));