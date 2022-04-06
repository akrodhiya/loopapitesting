const request = require('request');
const axios = require('axios');

function login (req, res){
    // return new Promise(async function (resolve, reject) {
        var options = {
            'method': 'POST',
            'url': 'https://loopapi.logitgroup.com/login',
            'headers': {
              'Accept': 'application/json',
              'X-XSRF-TOKEN': 'eyJpdiI6IkhFdGUvYjRZd2lVOHpKeGt0MnEvR0E9PSIsInZhbHVlIjoiRmc2MWIyeFNyMmlBRkRMWTVma2EwbDlOQ3BxdzVoL1ZJT2UzWDhFN0tTaVZIZ3JUbzkxMU1jRXVValNKUTU3U1FzcXRkT2h0VDRYSGVZa1ZKMG5KeWdzU1VzVEJPZUdXQWRqelNsckdmVElFVzROS1htaFg5NUFWemQ5UFp2cEUiLCJtYWMiOiI2ZjM5MDZmZWYwYzZkZmQzNWQyNzUwMzdlNzBiODZmZTBhYTM4ZDNjMTczYjFlMTc4NmU4Zjc0MTViNDg3Mjg2IiwidGFnIjoiIn0='
            },
            formData: {
              'email': 'apiaccess1@logitgroup.com',
              'password': 'wap&#4iK0_LDarIFr6X5'
            }
          };
          request(options, function (error, response) {
            if (error){
                res.status(200).json(e)
            } else{
            // let dd = JSON.parse(response);
                res.status(200).json(response)
            }
          });
        // const email = req.body.email;
        // const password = req.body.password;
        // let xsrfToken = "eyJpdiI6Ik4vUmVtK1BreS9WSkxWMkhXb3pXR3c9PSIsInZhbHVlIjoiRFBuRm5lMUxId3plL3hPVVJiZGdzUDNLNFpxR2pnUzN1eHNOcWVwbDNCUmpFTS9GenZ3elVUNHZKTUJIREV2dHkwTnFWVWlwK2ZMSnhsNy9STFJKbmtNMkNJVGRwSDdMQnFhRERHaVdET25OT1BUL2lWQU1MWTNXNDBwdjBXemQiLCJtYWMiOiI5MWE1ZDQ4ZTUyZGU3Y2Q2ZjIxZGJkNjI1MWQ3NDRiMGY4ODhlZDZhMDc5MjM4ODM2MjliMGU5MjY5MjZjODQ5IiwidGFnIjoiIn0=";
        // let xsrfToken = await getCSRF();
        // console.log(xsrfToken)
        // xsrfToken = xsrfToken[0].split("=");
        // xsrfToken = xsrfToken[1];
        // xsrfToken = xsrfToken.replace("; expires","").replace("%3D","=");
        // var options = {
        //     method: 'POST',
        //     url: 'https://loopapi.logitgroup.com/login',
        //     headers: {
        //         'Accept': 'application/json',
        //         'X-XSRF-TOKEN': xsrfToken
        //     },
        //     formData: {
        //         email: email,
        //         password: password
        //     },
        // };
        // console.log(options)
        // request(options, function (e, r, body) {
        //     let data = {};
        //     if (e !== null) {
        //         res.status(200).json(e)
        //     } else {
        //         let dd = JSON.parse(body);
        //         res.status(200).json(dd)
        //     }
        // });
    // });
}

function getCSRF(){
    return new Promise(function (resolve, reject) {
        var options = {
            method: 'GET',
            url: 'https://loopapi.logitgroup.com/sanctum/csrf-cookie'
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