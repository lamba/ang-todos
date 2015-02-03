//behavior (or specification) driven development (BDD)
//syntax similar to RSpec
describe('ang-todos', function() {

  var 
    todoList,
    alltodos;

  beforeEach(function() {
    browser.get('');
    element(by.model('vm.newTodo')).sendKeys('create a suite of protractor tests 020215 0640');
    element(by.id('add-new-todo')).click();
    todoList = element.all(by.repeater('todo in vm.todos'));
    //expect(todoList.get(0).getText()).toEqual('blah');
    element.all(by.repeater('todo in vm.todos')).then(function(todos){
      alltodos = todos;
      //expect(todos[0].element(by.model('todo.description')).getText()).toEqual('create a suite of protractor tests');
      //expect(todos.length.toEqual(1));
    });
   });

  it('should have a well formed url', function() {
    expect(browser.getCurrentUrl()).toContain('#/');
  });
  
  it('should add a todo', function() {
    expect(todoList.count()).toEqual(1);
    expect(alltodos[0].element(by.model('todo.description')).getText()).toEqual('create a suite of protractor tests 020215 0640');
  });
  
  it('should uncheck new todo checkbox', function() {
    expect(!alltodos[0].element(by.model('todo.completed')).isSelected());  
  });
  
  it('should disable remove button for new todo', function() {
    expect(!alltodos[0].element(by.className('close')).isEnabled());  
  });
  
  it('should check completed todo checkbox', function() {
    alltodos[0].element(by.model('todo.completed')).click();
    expect(alltodos[0].element(by.model('todo.completed')).isSelected());    
  });
  
  it('should enable remove button for completed todo', function() {
    alltodos[0].element(by.model('todo.completed')).click();
    expect(alltodos[0].element(by.className('close')).isEnabled());  
  });
  
  it('should remove a completed todo', function() {
    expect(alltodos[0].element(by.className('close')).click());  

  });
});