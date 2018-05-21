const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();

app.use(cors);
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('req received')
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.send('The server is live, but this endpoint is not required.');
});
app.get('/products', require('./endpoints/products'));
app.post('/promocode', require('./endpoints/promocode'));
app.post('/checkout', require('./endpoints/checkout'));

app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});

// const http = require("http");
// const dispatcher = require("httpdispatcher");

// const PORT = 9001; // server port

// // deliver information that the server is running
// dispatcher.onGet("/", function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end("The server is running but this endpoint is not required for the Challenge");
// });

// dispatcher.onGet("/products", require("./endpoints/products"));

// // handle a promo code
// // for a valid promo code submission return a message indicating an appropriate percentage discount
// dispatcher.onPost("/promocode", require("./endpoints/promocode"));

// // handle a checkout transaction
// dispatcher.onPost("/checkout", require("./endpoints/checkout"));

// console.log("\n * STARTING Node Server * \n");

// //Create the HTTP server
// var server = http.createServer(function handleRequest(req, res) {
//     try {
//         console.log(req.url);
//         dispatcher.dispatch(req, res);
//     } catch (err) {
//         console.log(err);
//     }
// });

// //start the server
// server.listen(PORT, function () {
//     console.log("Basket Checkout Node Server listening on: http://localhost:" + PORT);
// });
