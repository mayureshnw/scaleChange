import Debug from 'debug';

const debugServer = Debug('scaleChange:loginHandler');

const login = (req, res) => {
  debugServer(`request on port ${process.env.PORT || 3000}`);
  res('Hello, world!');
};


module.exports = {
  login,
};
