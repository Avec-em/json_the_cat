const request = require('request');

const breed = (process.argv.slice(2));

request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
  if (error) {
    console.log('ERROR OCCURED: ', error);
  } else if (body.length === 2) {
    console.log('ERROR: cat breed not found');
  } else {
    const data = JSON.parse(body);
    console.log(data[0]['description']);
  }
});


