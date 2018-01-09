
const jwt = require('jsonwebtoken')
const tokenSecret = "dobyisfreeelf";


issue = (payload) => {
  return jwt.sign(
    payload,
    tokenSecret
  );
};

// Verifies token on a request
verify = (token, callback) => {
  return jwt.verify(
    token,
    tokenSecret,
    {},
    callback
  );
}

module.exports = {
  issue,
  verify
}
