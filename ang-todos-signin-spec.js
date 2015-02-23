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
    emailValid = 'testexisting@email.com',
    passwordValid = '123',
    emailInvalid = "testinvalid@email.com",
    passwordInvalid = "123",
    dfd,
    prm;

  beforeEach(function() {
    dfd = protractor.promise.defer();
    prm = dfd.promise;
    browser.get('');
  });

  it('should allow a valid user to signin', function() {
    element(by.linkText('Sign In')).click().then(function(){
      element(by.model('vm.signinUser.email')).sendKeys(emailValid);
      element(by.model('vm.signinUser.password')).sendKeys(passwordValid);
      element(by.tagName('button')).click();
      expect(browser.getCurrentUrl()).toContain('#/home');
    });
  });

  it('should display valid user email as welcome text', function() {
    element(by.linkText('Sign In')).click().then(function(){
      element(by.model('vm.signinUser.email')).sendKeys(emailValid);
      element(by.model('vm.signinUser.password')).sendKeys(passwordValid);
      element(by.tagName('button')).click();
      expect(element(by.className('loggedInUser')).getText()).toEqual(emailValid);
    });
  });

  it('should prevent invalid user from signin', function() {
    element(by.linkText('Sign In')).click().then(function(){
      element(by.model('vm.signinUser.email')).sendKeys(emailInvalid);
      element(by.model('vm.signinUser.password')).sendKeys(passwordInvalid);
      element(by.tagName('button')).click();
      expect(browser.getCurrentUrl()).toContain('#/signin');
    });
  });

});