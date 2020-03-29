const express   = require('express'),
      router    = express(),
      bodyParser= require('body-parser'),
      session   = require('express-session'),
      flash     = require('connect-flash');

module.exports = {
// check if a user is logged in
	isLoggedIn: function (req, res, next){
		if (req.isAuthenticated()){
			return next();
		}
		res.redirect('/login');
	},

//check if a user is authorised for admin action
	isAdmin: function (req, res, next){
		if(req.user.role == admin){
			return next();
		}
		req.flash('error', 'not authorised');
		res.redirect("/login");
	}
}