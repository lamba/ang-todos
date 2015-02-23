//behavior (or specification) driven development (BDD)
//syntax similar to RSpec
//assertion counts are accurate only when 
//  there's one assertion (expect) per test (it should...)
//  all of the buildup/teardown code is in the beforeEach/afterEach calls
//In case of the following error, restart processes/machines
//Error: Timed out waiting for Protractor to synchronize with the page after 11 seconds.
describe('ang-todos', function() {

  var 
    todoList,
    testCount = 0,
    alltodos;

  beforeEach(function() {
    browser.get('');
    element(by.model('vm.newTodo')).sendKeys('create a suite of protractor tests 020215 08:04p');
    element(by.id('add-new-todo')).click();
    todoList = element.all(by.repeater('todo in vm.todos'));
    //expect(todoList.get(0).getText()).toEqual('blah');
    element.all(by.repeater('todo in vm.todos')).then(function(todos){
      alltodos = todos;
      //expect(todos[0].element(by.model('todo.description')).getText()).toEqual('create a suite of protractor tests');
      //expect(todos.length.toEqual(1));
    });
    //console.log('\ntestCount=' + ++testCount);
   });

  it('should have a well formed url', function() {
    expect(browser.getCurrentUrl()).toContain('#/');
  });
  
  it('should add a todo and append to list', function() {
    expect(todoList.count()).toEqual(1);
  });
  
  it('should add a todo and match description', function() {
    expect(alltodos[0].element(by.model('todo.description')).getText()).toEqual('create a suite of protractor tests 020215 08:04p');
  });
  
  it('should uncheck new todo checkbox', function() {
    expect(alltodos[0].element(by.model('todo.completed')).isSelected()).toBe(false);  
  });
  
  // it('should disable remove button for new todo', function() {
  //   expect(alltodos[0].element(by.className('close')).isEnabled()).toBe(false);  
  // });
  
});