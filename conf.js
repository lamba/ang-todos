exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'todo-spec.js',
    'ang-todos-spec.js'
  ],
  seleniumArgs: {
    'broswerName':'firefox',
    'broswerName':'chrome'
  },
  baseUrl: 'http://localhost:800'
};
