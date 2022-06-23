import {fetch} from 'node-fetch'

fetch('https://www.reddit.com/r/javascript/hot.json')
  .then(function(res) {
    return res.json();   // Convert the data into JSON
  })
  .then(function(data) {
    console.log(data);   // Logs the data to the console
  })
  .catch(function(err) {
    console.log(err);   // Log error if any
  });
