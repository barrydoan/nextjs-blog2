const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'nhat',
        mongodb_password: 'nhat',
      }
    };
  }

  // set the value for production
  return {
    env: {
      mongodb_username: 'nhat',
      mongodb_password: 'nhat',
    }
  };
};