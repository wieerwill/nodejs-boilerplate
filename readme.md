# NodeJS Boilerplate for Express Apps

## Routing

| URL   | Method    | Desc |
| ---   | ---       | ---  |
| /     | GET       | Index Site     |
| /api  | GET       | Your API starts here |

## Requirements
 - 

#### npm Packages
- express
- ejs
- [nodemailer](https://www.npmjs.com/package/advanced-sitemap-generator)
- mysql
- body-parser
- 

## Folder Overview
- config: all your apps configuration files for databases, connections and other 
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
  - .env-cmdrc.json: all environment variables for your servers
  - app.js: entry file to start everything up
  - gitignore: ignore some files in your git repository that don't matter
  - package.json: overview and scripts for your packages
  - package-lock.json
  - readme.md: log everything to never forget anything