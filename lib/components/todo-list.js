import {
    $, Router, Truta, Http
}
from 'truta-js';

Truta
    .component('TodoListComponent', function (TodoListComponent) {

        let TodoProvider = Truta.getProviderByName('TodoProvider');
        let data = {
            todos: TodoProvider.all()
        };

        TodoListComponent.removeTodo = function (todo) {
            TodoProvider.delete(todo);
        };

        TodoListComponent.editTodo = function (todo) {
            Object.getNotifier(data.todos).performChange('update', function() {
                todo.edit = !todo.edit;
            });
        };

        return {
            data: data,
            element: 'todo-list'
        };
    });
