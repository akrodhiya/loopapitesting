const request = require('request');
const axios = require('axios');

function login (req, res){
    return new Promise(async function (resolve, reject) {
        const email = req.body.email;
        const password = req.body.password;
        let xsrfToken = await getCSRF();
        // console.log(xsrfToken)
        xsrfToken = xsrfToken[0].split("=");
        xsrfToken = xsrfToken[1];
        xsrfToken = xsrfToken.replace("; expires","").replace("%3D","=");
        var options = {
            method: 'POST',
            url: 'https://loopapi.logitgroup.com/login',
            headers: {
                'Accept': 'application/json',
                'X-XSRF-TOKEN': xsrfToken
            },
            formData: {
                email: email,
                password: password
            },
        };
        console.log(options)
        request(options, function (e, r, body) {
            let data = {};
            if (e !== null) {
                res.status(200).json(e)
            } else {
                let dd = JSON.parse(body);
                res.status(200).json(dd)
            }
        });
    });
}

function getCSRF(){
    return new Promise(function (resolve, reject) {
        var options = {
            method: 'GET',
            url: 'https://loopapi.logitgroup.com/sanctum/csrf-cookie',
            headers: {
                'Accept': 'application/json',
            }
        };
        
        request(options, function (error, response) {
            if (!error) {
                resolve(response.headers['set-cookie']);
            } else {
                resolve(error);
            }
        });
    });
}
module.exports = { login }