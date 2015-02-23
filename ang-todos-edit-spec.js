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
    todoText = 'create a suite of protractor tests 021215 03:46p',
    todoEdit = ' - edit',
    dfd,
    prm;

  beforeEach(function() {
    dfd = protractor.promise.defer();
    prm = dfd.promise;
    browser.get('');
    element(by.model('vm.newTodo')).sendKeys(todoText);
    element(by.id('add-new-todo')).click().then(function(){
      element.all(by.repeater('todo in vm.todos')).then(function(todos){
        alltodos = todos;
        alltodos[0].element(by.model('todo.description')).click();
        alltodos[0].element(by.model('todo.description')).sendKeys(protractor.Key.END).then(function(){
          alltodos[0].element(by.model('todo.description')).sendKeys(todoEdit);
          alltodos[0].element(by.model('todo.description')).sendKeys(protractor.Key.ENTER);          
          dfd.fulfill();
        });
      });      
    });
  });

  it('should allow for editing a todo', function() {
    prm.then(function(){
      expect(alltodos[0].element(by.model('todo.description')).getText()).toEqual(todoText + todoEdit);
    });
  });

  //example of how to use sleep (in this case promise is a better approach; is sleep ever a better approach?)
  it('should allow for editing a todo', function() {
    browser.sleep(1000); //allow time for beforeEach to complete
    expect(alltodos[0].element(by.model('todo.description')).getText()).toEqual(todoText + todoEdit);
  });

});