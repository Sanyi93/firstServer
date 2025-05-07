 // Import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today');

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200); // Set the status code to 200 (OK)
    // Send the response with the current date from the 'today' module

    //getting the dateValue
    let dateValue = today.getDate();

    //Setting the greeting
    let greeting = "No Time To Greet, Just Sleep"
    if(dateValue.getHours() > 6 && dateValue.getHours() <= 12) {
        greeting = "Good morning!";
    } else if(dateValue.getHours() > 12 && dateValue.getHours() <= 18) {
        greeting = "Good afternoon!"
    } else if(dateValue.getHours() > 18 && dateValue.getHours() <= 21) {
        greeting = "Good evening!"
    } else if(dateValue.getHours() > 21 && dateValue.getHours() <= 24 ){
        greeting = "Good night!"
    }

    //Sending the response with greeting
        res.end(`Hello, ${greeting}! The date today is ${today.getDate()}`);
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log('Server listening on port: ' + port);
