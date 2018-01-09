
const bcrypt = require('bcrypt');

module.exports = {

  attributes: {

    user: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },

    toJSON: function() {
        var obj = this.toObject();
        delete obj.password;
        return obj;
      }
  },

  beforeCreate : (values, next) => {
    bcrypt.genSalt(10, (err, salt) => {
      if(err) return next(err);
      bcrypt.hash(values.password, salt, (err, hash) => {
        if(err) return next(err);
        values.encryptedPassword = hash;
        next();
      })
    })
  },

  comparePassword : (password, user, cb) => {
    bcrypt.compare(password, user.password, (err, match) => {

      if(err) cb(err);
      if(match) {
        cb(null, true);
      } else {
        cb(err);
      }
    })
  }
}
