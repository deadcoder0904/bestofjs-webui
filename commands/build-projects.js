const got = require('got');
const fs = require('fs-extra');
const url = 'http://bestofjs-api-v1.divshot.io/projects.json';

console.log('Fetching JSON data from webtask...', url);

got(url)
  .then(response => {
      const writer = fs.createOutputStream('./www/api/projects.js');
      writer.write(`BESTOFJS.githubData = `);
      writer.write(response.body);
      writer.end();
      console.log('JSON file created!');
    })
    .catch(error => {
        console.log('ERROR', error);
        //=> 'Internal server error ...'
    });
