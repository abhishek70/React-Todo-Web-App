/**
 *
 * TodoAPI Test Class
 */
 var expect    = require('expect');
 var TodoAPI   = require('TodoAPI');

 describe('TodoAPI', () => {

   beforeEach (() => {
     localStorage.removeItem('todoList');
   })

   it('should exist', () => {
     expect(TodoAPI).toExist();
   });

 });
