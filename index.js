const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// app.use(function (req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });
// const {getProject} = require('./prodege')
const { login } = require('./loopapi')
const { getLoopProjects } = require('./loopapi')

// app.get('/get-project',getProject)
app.post('/api/login',login)
app.get('/api/getLoopProjects',getLoopProjects)

// /get-project?id=1234

app.listen(3000,()=>{
    console.log('App run successfully');
});