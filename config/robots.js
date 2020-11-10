/*
Create a Use-Ready robot.txt 
More Infos https://www.npmjs.com/package/robotize
*/

const robotize = require('robotize');
const opts = {
    useragent: 'googlebot',
    allow: ['index.html', 'about.html'],
    disallow: ['404.html']
};

robotize(opts, (err, robots) => {
    if (err) {
        throw new Error(err);
    } else {
        console.log(robots);
    }
});