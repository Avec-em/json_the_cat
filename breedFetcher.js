const request = require('request')


let breed = (process.argv.slice(2))
//console.log("breed", breed)

request('https://api.thecatapi.com/v1/breeds/search?q='+ breed, (error, response, body) => {
  if (error) {
    console.log('this is an error: ', error)
  } else if (body.length === 2) {
    console.log('Error, cat breed not found', error); // Print the error if one occurred
      }
  const data = JSON.parse(body);
  console.log(data[0]['description'])
});



