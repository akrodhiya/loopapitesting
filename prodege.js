const request = require('request');
const CryptoJS = require('crypto-js');

function getSignIn(req) {
    return new Promise(function (resolve, reject) {
      let params = '';
      const apik = 'FARYBmDpWEXHztw';
      const secret_key = 'F3ieO7lgjRImskL';
      params = req.form;
      let records = JSON.parse(JSON.stringify(params));
      let keys = Object.keys(records);
      let values = Object.values(records);
      let arr = [];
      for (let index in keys) {
        if (keys[index] != 'signature')
          arr.push(keys[index] + '=' + values[index]);
      }
      //arr.filter(x=>!x.includes('signature'))
      let stringToSign = secret_key + ':' + arr.sort().join(':');
      let sign = CryptoJS.SHA256(stringToSign)
        .toString(CryptoJS.enc.Base64)
        .split('+')
        .join('-')
        .split('/')
        .join('_')
        .split('=')
        .join('');
      req.form.signature = sign;
      resolve(req);
    });
}
async function getProject(req,res) {
    const ress = res;
    var date = new Date();
    var time = date.getTime();
    var options = {
        method: 'POST',
        url: 'http://www.swagbucks.com/prodegemr/project-get-info',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        },
        form: {
        prodege_project_id: req.query.id,
        apik: 'FARYBmDpWEXHztw',
        request_date: time,
        signature: '{signature}',
        },
    };
    options = await getSignIn(options);
    request.post(options, function (e, r, body) {
        let data = {};
        if (e !== null) {
            ress.status(200).json(e)
        } else {
            let dd = JSON.parse(body);
            ress.status(200).json(dd)
        }
    });
    
}
module.exports = { getProject }