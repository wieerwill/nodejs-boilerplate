# NodeJS Boilerplate for Express Apps
This repository show you a simple but powerful way to start up your NodeJS Projects with Express.


## Get started
1. Clone/Fork this repository to your computer
2. install all requirements
   1. node
   2. mysql 
2. set the config files
   1. change "mail.js" credentials
   2. change "database.js" credentials
3. start your development server with "npm run dev"
4. feel free to do what you want to do

## Routing

| URL   | Method    | Desc |
| ---   | ---       | ---  |
| /     | GET       | Index Site     |
| /     | POST      | nothing yet, work on it |
| /     | DELETE    | nothing yet, work on it |
| /mail | GET       | view Mail form |
| /mail | SEND      | send mail via nodemailer |
| /api  | GET       | Your API starts here |

## npm Packages
 Name   | Version   | Description
---     |   ---     |  ---
[body-parser](https://www.npmjs.com/package/body-parser) | ^1.19.0 | Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
[connect-flash](https://www.npmjs.com/package/connect-flash) | ^0.1.1 | The flash is a special area of the session used for storing messages
[cookie-parser](https://www.npmjs.com/package/cookie-parser) | ^1.4.5 | Parse Cookie header and populate req.cookies with an object keyed by the cookie names
[env-cmd](https://www.npmjs.com/package/env-cmd) | ^10.1.0 | A simple node program for executing commands using an environment from an env file
[express](https://www.npmjs.com/package/express) | ^4.17.1 | Fast, unopinionated, minimalist web framework for node
[express-session](https://www.npmjs.com/package/express-session) | ^1.17.0 | Create a session middleware
[method-override](https://www.npmjs.com/package/method-override) | ^3.0.0 | Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it 
[morgan](https://www.npmjs.com/package/morgan) | ^1.10.0 | HTTP request logger middleware for node.js
[mysql](https://www.npmjs.com/package/mysql) | ^2.18.1 | This is a node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed.
[nodemailer](https://www.npmjs.com/package/nodemailer) | ^6.4.6 | Send e-mails from Node.js – easy as cake!
[nodemon](https://www.npmjs.com/package/nodemon) | ^2.0.2 | nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
[pug](https://www.npmjs.com/package/pug) | ^2.0.4 | Pug is a high performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers

## Folder Overview
- config: all your apps configuration files for databases, connections and other 
    - .env-cmdrc.json: all environment variables for your servers
    - database.js: your database connections and table overview
    - db-test.js: test your database connection with this js
    - mail.js: your mail connection
    - robots.js: get a robot.txt file with this script
    - sitemap-generator.js: get a sitemap with this script
- public: all files your Guests can access directly
    - css: your css files
        - main.css: a starter .css file
    - img: all your images
    - js: all your JS scripts
- routes: whereever you are routing, keep it simple and structured
    - api.js: here every /api requests goes
    - index.js: here every / reqest goes
    - middlewear.js: use middlewear for repeating actions across multiple routes like authorisation/authentication
- views: here lies what your guests can later see in pug.js
    - index: all files for index routes
        - index.pug: the index routes view
    - layout.pug: make it easy with a standarized layout for all your files
  - app.js: entry file to start everything up
  - gitignore: ignore some files in your git repository that don't matter
  - package.json: overview and scripts for your packages
  - package-lock.json
  - readme.md: log everything to never forget anything