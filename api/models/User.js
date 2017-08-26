/**
 * User.js
 *
 * @description :: Model representing our application's Users
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
  	email: { type: 'email', required: true, unique: true },
  	password: { type: 'string', minLength: 6, required: true },
  },

  beforeCreate: function (user, cb) {
  	bcrypt.genSalt(10, function (err, salt) {
  		bcrypt.hash(user.password, salt, function(err, hash) {
  			if (err) {
  				console.log("Error hashing password: ", err);
  				cb(err);
  			} else {
  				user.password = hash;
  				cb();
  			}
  		});
  	});
  }
};