const request = require('request');
const axios = require('axios');
const decode = require('decode-html');

async function login (req, res){
    return new Promise(async function (resolve, reject) {
        // let xsrfToken = await getCSRF();
        // xsrfToken = xsrfToken[1].split("=");
        // xsrfToken = xsrfToken[1];
        // xsrfToken = xsrfToken.replace("; expires","");
        // xsrfToken = xsrfToken.replace("%3D","=");
        xsrfToken = decodeURIComponent("eyJpdiI6IlRkek02QnZ2VHBib2pFdDVtU1RUZUE9PSIsInZhbHVlIjoiTDhzcjIxdFNmTGltdnJIRGpidmV4aG1mYjVIU0lUNGpZZFpxK3NiNHk1cml4bnAxSzk2bDRKTnVzV0RBK2Ztc0IvcU41bmVuUGtHVnEwNnR5eFpiZzBlSzk5Qmx4WnZFQ3pFYlBGMWhmU0xCelJQSjhTK2tPNVUrYnMxR05vTVMiLCJtYWMiOiI4OWI1YmUxZTE0NzE4Yjk4NmNjYjZmNWQ0MTM5OWFiYjUwOTFiODI1ZmQ5NWUyOGIxZjg5MjY2NWRhNDhkOGM1IiwidGFnIjoiIn0%3D")
        console.log(xsrfToken)
        var options = {
            'method': 'POST',
            'url': 'https://loopapi.logitgroup.com/login',
            'headers': {
              'Accept': 'application/json',
              'X-XSRF-TOKEN': xsrfToken
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
    });
}

function getCSRF(){
    return new Promise(function (resolve, reject) {
        var options = {
            method: 'GET',
            url: 'https://loopapi.logitgroup.com/sanctum/csrf-cookie'
        };
        
        request(options, function (error, response) {
            console.log(response)
            if (!error) {
                resolve(response.headers['set-cookie']);
            } else {
                resolve(error);
            }
        });
    });
}

async function getLoopProjects (req, res){
        var options = {
            'method': 'GET',
            'url': 'https://loopapi.logitgroup.com/api/v1/projects/',
            'headers': {
              'Accept': 'application/json',
              'Authorization': "Bearer 60|ff0uZ1qXDWd1RDu6UaEcbNxE5MLlGMLVQUNjx28q"
            }
          };
          request(options, function (error, response) {
            if (error){
                res.status(200).json(e)
            } else{
                let dd = JSON.parse(response.body);
                res.status(200).json(dd)
            }
          });
}
module.exports = { 
    login : login, 
    getLoopProjects: getLoopProjects
}