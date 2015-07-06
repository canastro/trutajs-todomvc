import {
    $, Router, Truta, Http
}
from 'truta-js';

Truta
    .provider('TodoProvider', function (TodoProvider) {

        var todos = [{
            title: 'teste',
            completd: false
        }];

        TodoProvider.clearCompleted = function () {
            todos = todos.filter(function () {
                return todo.isComplete !== true;
            });
        };

        TodoProvider.delete = function (todo) {
            var index = todos.indexOf(todo);

            if (index > -1) {
                todos.splice(index, 1);
            }
        };

        TodoProvider.add = function (todo) {
            todos.push(todo);
        };

        TodoProvider.all = function () {
            return todos;
        };
    });
