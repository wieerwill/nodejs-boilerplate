# NodeJS Boilerplate for Express Apps
This repository show you a simple but powerful way to start up your NodeJS Projects with Express.


## Get started
1. Clone/Fork this repository
2. install all requirements
   1. node
   2. npm, yarn, pnpm (recommended)
   3. mysql 
3. set the config files
   1. change `config/mail.js` credentials
   2. change `config/database.js` credentials
4. start your development server with `npm run dev`
5. feel free to do what you want to do

## Routing

| URL   | Method | Desc                     |
| ----- | ------ | ------------------------ |
| /     | GET    | Index Site               |
| /     | POST   | nothing yet, work on it  |
| /     | DELETE | nothing yet, work on it  |
| /mail | GET    | view Mail form           |
| /mail | SEND   | send mail via nodemailer |
| /api  | GET    | Your API starts here     |

## npm Packages
 | Name                                                             | Description                                                                                                                                                       |
 | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | [body-parser](https://www.npmjs.com/package/body-parser)         | Parse incoming request bodies in a middleware before your handlers, available under the req.body property.                                                        |
 | [connect-flash](https://www.npmjs.com/package/connect-flash)     | The flash is a special area of the session used for storing messages                                                                                              |
 | [cookie-parser](https://www.npmjs.com/package/cookie-parser)     | Parse Cookie header and populate req.cookies with an object keyed by the cookie names                                                                             |
 | [env-cmd](https://www.npmjs.com/package/env-cmd)                 | A simple node program for executing commands using an environment from an env file                                                                                |
 | [express](https://www.npmjs.com/package/express)                 | Fast, unopinionated, minimalist web framework for node                                                                                                            |
 | [express-session](https://www.npmjs.com/package/express-session) | Create a session middleware                                                                                                                                       |
 | [method-override](https://www.npmjs.com/package/method-override) | Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it                                                                       |
 | [morgan](https://www.npmjs.com/package/morgan)                   | HTTP request logger middleware for node.js                                                                                                                        |
 | [mysql](https://www.npmjs.com/package/mysql)                     | This is a node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed.                                            |
 | [nodemailer](https://www.npmjs.com/package/nodemailer)           | Send e-mails from Node.js � easy as cake!                                                                                                                         |
 | [nodemon](https://www.npmjs.com/package/nodemon)                 | nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. |
 | [pug](https://www.npmjs.com/package/pug)                         | Pug is a high performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers                                     |

## Directory Overview
```
config: all your apps configuration files for databases, connections and other 
    - .env-cmdrc.json: all environment variables for your servers
    - database.js: your database connections and table configuration
    - db-test.js: test your database connection with this
    - mail.js: your mail configuration
    - robots.js: creates a custom robot.txt file
    - sitemap-generator.js: creates a custom sitemap
public: all files your Guests can access directly
    - css: your css files
        - main.css: a starter .css file
    - img: all your images
    - js: all your JS scripts
routes: wherever you are routing, keep it simple and structured
    - api.js: here goes every "/api" request
    - index.js: here goes every "/" request 
    - middlewear.js: use middlewear for repeating actions across multiple routes like authorisation/authentication
views: contains all template files for clients view
    - index: all files for index routes
        - index.pug: the index routes view
    - layout.pug: make it easy with a standarized layout for all your files
app.js: entry file to start everything up
.gitignore: ignore some files in your repository that don't matter or don't need to be copied everytime
package.json: overview and scripts for your packages
readme.md: log everything to never forget anything
```