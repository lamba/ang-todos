//protractor configuration file

//var jQuery = require('node_modules/jquery/jquery.js');

exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',

  directconnect: true,

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
  
  framework: 'jasmine',

  baseUrl: 'http://localhost:7000',

  params: {
    restUrl: 'http://localhost:8080'
  },

  onPrepare: function() {
    browser.driver.get(browser.baseUrl);
    browser.manage().window().setSize(1600, 1000);
  }

};
