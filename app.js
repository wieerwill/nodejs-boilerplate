/*## Dependencies ##*/
const express       = require('express'),
      app           = express(),
      bodyParser    = require('body-parser'),
      path          = require('path'),
      session       = require('express-session'),
      flash         = require('connect-flash'),
      methodOverride= require('method-override'),
      morgan = require('morgan');

/*## link your route files here ##*/
const indexRoute  = require('./routes/index'), 
      apiRoute = require('./routes/api');

/*## Now your app configuration ##*/
if (app.get('env') === 'development'){
  app.use(morgan('dev')); // log every request to the console for development
}

app.use(express.static(path.join(__dirname, 'public'))); // folder for public serving (images, files, scripts)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var sess = {
  secret: "ChooseSessionString", //change this to your custom string
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 } //how long should cookies been saved
};
if (app.get('env') === 'production') { //secure sessions for production 
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
app.use(session(sess)); //init sessions with above configuration

app.set('views', __dirname + '/views'); //folder with view pages
app.set("view engine", "pug"); //set view engine to pug
app.set('view options', { //set custom view options
  layout: false //set layout to false to use more than one and use pug
});

app.use(flash()); //to use connect-flash in your environment
app.use(methodOverride("_method")); //override with POST having ?_method=CUSTOM

/*## repeated actions for each website call ##*/
app.use(function(req, res, next){
    res.locals.success = req.flash('success'); //save your flash-success-messages locally
    res.locals.error = req.flash('error');  //save your flash-error-messages locally
    res.locals.currentUser = req.user; //save your current user locally for quick l 
    next();
});

/*## Routes ##*/
// note that NodeJS will choose the first option available that matches the pattern
app.use("/api", apiRoute);
app.use("/", indexRoute); 
app.get('*', (req,res)=>{ res.redirect("/"); }); //fallback: redirect all website calls with no matching route to homesite (or 404 page)

/*## init server ##*/
app.listen(process.env.PORT, process.env.IP, function(){ //start your server
   console.log("Server is listening at " + process.env.IP + ":" + process.env.PORT + " with Environment: " + process.env.env);
});
