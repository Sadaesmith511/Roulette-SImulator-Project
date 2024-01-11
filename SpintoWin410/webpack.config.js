const path = require('path');

module.exports = {
  entry: './app.js', // Replace 'app.js' with the name of your entry file
  output: {
    filename: 'bundle.js', // Replace 'bundle.js' with the name of the output file
    path: path.resolve(__dirname, 'dist')
  }
};
