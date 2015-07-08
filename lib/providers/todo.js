import {
    $, Router, Truta, Http, Cardume
}
from 'truta-js';

Truta
    .provider('TodoProvider', function (TodoProvider) {

        var todo = new Cardume();

        todo.add({
            title: 'teste',
            completed: true
        });

        todo.add({
            title: 'two',
            completed: false
        });

        todo.add({
            title: '3',
            completed: false
        });

        // TodoProvider.clearCompleted = function () {
        //     todos = todos.filter(function () {
        //         return todo.isComplete !== true;
        //     });
        // };

        TodoProvider.delete = function (item) {
            todo.remove(item);
        };

        TodoProvider.add = function (item) {
            todo.add(item);
        };

        TodoProvider.all = function () {
            return todo;
        };
    });
