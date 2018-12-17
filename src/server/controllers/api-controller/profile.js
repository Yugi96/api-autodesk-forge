const request = require('request')

exports.getProfile = (token, callback) => {
  let options = {
    method: 'GET',
    url: 'https://developer.api.autodesk.com/userprofile/v1/users/@me',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`
    }
  }

  request(options, (error, response, body) => {
    callback(error, body)
  })
}
