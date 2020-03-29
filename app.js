/*## Dependencies ##*/
const express       = require('express'),
      app           = express(),
      bodyParser    = require('body-parser'),
      cookieParser  = require('cookie-parser'),
      path          = require('path'),
      session       = require('express-session'),
      flash         = require('connect-flash'),
      favicon       = require('serve-favicon'),
      methodOverride= require('method-override'),
      morgan = require('morgan');

//link your route files here
const indexRoute  = require('./routes/index'), 
      apiRoute = require('./routes/api');

//Now your app configuration
if (app.get('env') === 'development'){
  app.use(morgan('dev')); // log every request to the console for development
}

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname,'public','favicon.png')));
app.use(cookieParser('ChooseAStringForYourCookies'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var sess = {
  secret: "ChooseASessionString",
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 } //how long should cookies been saved
};
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
app.use(session(sess));

app.set('views', __dirname + '/views');
app.set("view engine", "pug");
app.set('view options', {
  layout: false
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(flash());
app.use(methodOverride("_method")); //use ?_YourMethod for your method changes

app.use(function(req, res, next){
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
});

//Routes
app.use("/", indexRoute);
app.use("/api", apiRoute);
app.get('*', (req,res)=>{ res.redirect("/"); });

/*## PORT ##*/
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is listening at " + process.env.IP + ":" + process.env.PORT + " with Environment: " + process.env.env);
});
