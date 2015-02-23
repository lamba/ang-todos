//behavior (or specification) driven development (BDD)
//syntax similar to RSpec
//assertion counts are accurate only when 
//  there's one assertion (expect) per test (it should...)
//  all of the buildup/teardown code is in the beforeEach/afterEach calls
describe('ang-todos', function() {

  var 
    todoList,
    testCount = 0,
    alltodos,
    emailNew = 'testnew@email.com',
    passwordNew = '123',
    emailExisting = "testexisting@email.com",
    passwordExisting = "123",
    dfd,
    prm;

  beforeEach(function() {
    dfd = protractor.promise.defer();
    prm = dfd.promise;
    browser.get('');
  });

  it('should allow a new user to signup', function() {
    element(by.linkText('Sign Up')).click().then(function(){
      element(by.model('vm.signupUser.email')).sendKeys(emailNew);
      element(by.model('vm.signupUser.password')).sendKeys(passwordNew);
      element(by.tagName('button')).click();
      expect(browser.getCurrentUrl()).toContain('#/home');
    });
  });

  it('should prevent existing user from signup', function() {
    element(by.linkText('Sign Up')).click().then(function(){
      element(by.model('vm.signupUser.email')).sendKeys(emailExisting);
      element(by.model('vm.signupUser.password')).sendKeys(passwordExisting);
      element(by.tagName('button')).click();
      expect(browser.getCurrentUrl()).toContain('#/signup');
    });
  });

});