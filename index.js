const express = require('express')
const connectDB = require('./src/config/connectDb')
const app = express()
const router = require('./src/resources/router/index')
require('dotenv').config()
app.set('port', process.env.PORT || 4000);
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
// để sử dụng được req.body
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get('/', function (req, res) {
    res.send('Hello World')
})
// route
router(app)
connectDB()
app.listen(process.env.PORT || 3001, '0.0.0.0', () => {
    console.log("Server is running.");
});