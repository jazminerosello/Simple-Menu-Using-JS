import express from 'express';
import bodyParser from 'body-parser';

// instantiate the server
const app = express();
// app.use(bodyParser.json());
app.use(express.static('static_files'))

// this tells our server to listen to the port 3000
// we can also pass an optional callback function to execute after the server starts
app.listen(3000, () => { console.log('Server started at port 3000')} );