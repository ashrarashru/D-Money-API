const newman = require('newman');
require('dotenv').config();

newman.run({
    collection: `https://api.postman.com/collections/27163024-279352ab-e9f0-469f-b4f0-6d92751dc1b6?access_key=${process.env.secretKey}`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/ in the current working directory.
        } 
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
    