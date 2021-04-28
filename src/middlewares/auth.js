const errorFactory = require('../helper/errorFactory');
const jwtHelper = require('../helper/jsonWebToken');
var userdb = require('../database/dbservice/userdb');

const authValidator = function (req, res, next) {
  const url = /** @type {String} */ (req.url);
  if (url.match(/login/) || url.match(/register/) || url.match(/items/)) {
    return next();
  }
  const authorization = req.get('authorization');
  let authToken = ''
  if (authorization) {
    authToken = req.get('authorization').split(' ')[1];
  }
  if (authToken) {
    try {
      const token = jwtHelper.verifyJwt(authToken);
      const userId = token.userId;
      if (userId) {
        const user = userdb.getUser(userId);
        if (!user) {
          return res.status(401).send({ message: errorFactory.unauthorizedRequest })
        }
        res.locals['userId'] = userId;
        return next();
      }
    } catch (ex) {
      return res.status(403).send({ message: errorFactory.unauthorizedRequest });
    }
  }
  res.status(401).send({ message: errorFactory.unauthorizedRequest });
}

module.exports = { authValidator }