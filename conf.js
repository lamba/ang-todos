exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'ang-todos-add-spec.js',
    'ang-todos-complete-spec.js',
    'ang-todos-remove-spec.js'
  ],
  seleniumArgs: {
    'broswerName':'chrome'
  },
  baseUrl: 'http://localhost:800'
};
