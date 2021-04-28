var config = require('../../config/config').config();
const jwt = require('jsonwebtoken');

function genAccessToken(user) {
  const tokenPayload = user;
  const accessToken = jwt.sign(tokenPayload, config.jwtSecretKey);
  return accessToken;
}


function verifyJwt(token) {
  return jwt.verify(token, config.jwtSecretKey);
}
module.exports = { genAccessToken, verifyJwt };