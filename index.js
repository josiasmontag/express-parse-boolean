var parseBool = require('./lib/parse');
var is   = require('type-is');

module.exports = function() {
  return function(req, res, next) {
    req.query = parseBool(req.query);
    if (is(req, 'multipart/form-data')) {
      req.body = parseBool(req.body);
    }
    next();
  };
};
