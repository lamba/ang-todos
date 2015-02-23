//protractor configuration file

//var jQuery = require('node_modules/jquery/jquery.js');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'ang-todos-signup-spec.js',
    'ang-todos-signin-spec.js',
    'ang-todos-add-spec.js',
    'ang-todos-complete-spec.js',
    'ang-todos-remove-spec.js',
    'ang-todos-edit-spec.js'
  ],
  // seleniumArgs: {
  //   'browserName':'chrome',
  //   'browserName':'firefox'
  // },
  multiCapabilities: [
  {
    'browserName':'chrome',
  },
  // {
  //   'browserName':'firefox' //known issue: doesn't work on ff35
  // },
  // {
  //   'browserName':'internet explorer', //fails with ERROR - Unable to start a WebDriver session.
  //   'platform': 'ANY',
  //   'version': '11'
  // }
  ],
  baseUrl: 'http://localhost:800'
};
