module.exports = {
  default: {
    require: ['steps/*.js'], // tells Cucumber where to look
    format: ['progress'],
    timeout: 60000,
  },
};
