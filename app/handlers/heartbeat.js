// import Debug from 'debug';

// const debugServer = Debug('scaleChange:heartbeatHanler');

const heartbeat = (req, res) => res({
  timestamp: Date(),
});

module.exports = {
  heartbeat,
};
