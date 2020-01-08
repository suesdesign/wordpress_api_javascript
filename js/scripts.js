/**
 * Create a function to display the data
 */

function outputApi(data) {
  let output = "";
  data.forEach(element => {
    // Add the title of the post
    output += `<h1>${element.title.rendered}</h1>`;
    // Add the HTML content of the post
    output += element.content.rendered;
  });
  // Output the data on the page
  return document.getElementById('output').innerHTML = output;
}

/**
 * Get the JSON data from a URL and output the data or log an error
 */

fetch("http://localhost/starter/wp-json/wp/v2/posts?per_page=5")
  // Get the data
  .then(res => {
    return res.json()
  })
  // Output the data 
  .then(data => {
    outputApi(data);
  })
  // Or log the error
  .catch(err => {
    console.log(`The error is ${err}`);
  });
