/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.isAuthenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */


module.exports = function(req, res, next) {
   if (req.isAuthenticated()) {
        return next();
    }
    else{
        return res.redirect('/login');
    }
};