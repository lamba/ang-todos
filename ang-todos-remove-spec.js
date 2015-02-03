//behavior (or specification) driven development (BDD)
//syntax similar to RSpec
//assertion counts are accurate only when 
//  there's one assertion (expect) per test (it should...)
//  all of the buildup/teardown code is in the beforeEach/afterEach calls
describe('ang-todos', function() {

  var 
    todoList,
    testCount = 0,
    alltodos;

  beforeEach(function() {
    browser.get('');
    element(by.model('vm.newTodo')).sendKeys('create a suite of protractor tests 020215 08:04p');
    element(by.id('add-new-todo')).click().then(function(){
      //expect(todoList.get(0).getText()).toEqual('blah');
      element.all(by.repeater('todo in vm.todos')).then(function(todos){
        alltodos = todos;
        //expect(todos[0].element(by.model('todo.description')).getText()).toEqual('create a suite of protractor tests');
        //expect(todos.length.toEqual(1));
        alltodos[0].element(by.model('todo.completed')).click();
        alltodos[0].element(by.className('close')).click().then(function(){
          todoList = element.all(by.repeater('todo in vm.todos'));
        });  
      });      
    });
    //console.log('\ntestCount=' + ++testCount);
  });

  it('should remove a completed todo', function() {
    expect(todoList.count()).toEqual(0);
    // element.all(by.repeater('todo in vm.todos')).then(function(todos){
    //   //alltodos = todos;
    //   //expect(todos[0].element(by.model('todo.description')).getText()).toEqual('create a suite of protractor tests');
    //   expect(todos.length).toEqual(0);
    // });
  });
});