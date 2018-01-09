const create = (req, res) => {
  User.create(req.body).exec((err, user) => {
    if (err) {
      return res.json(err.status, {err: err});
    }
    // If user created successfuly, return user and token as response
    if (user) {
      // id as payload
      res.json(200, {user: user, token: jwtToken.issue({id: user.id})});
    }
  });
}

module.exports = {
  create
};
