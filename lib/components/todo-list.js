import {
    $, Router, Truta, Http, SeeBass
}
from 'truta-js';

Truta
    .component('TodoListComponent', function (TodoListComponent) {

        let TodoProvider = Truta.getProviderByName('TodoProvider');
        let data = new SeeBass();
        data.set({
            todos: TodoProvider.all()
        });

        TodoListComponent.removeTodo = function (todo) {
            TodoProvider.delete(todo);
        };

        TodoListComponent.editTodo = function (todo) {
            todo.update({
                edit: !todo.edit
            });
        };

        return {
            data: data,
            element: 'todo-list'
        };
    });
