import {
    $, Router, Truta, Http, Shoal
}
from 'truta-js';

Truta
    .provider('TodoProvider', function (TodoProvider) {

        var todo = new Shoal();

        todo.add({
            title: 'teste',
            completed: true,
            isVisible: true
        });

        todo.add({
            title: 'two',
            completed: false,
            isVisible: true
        });

        todo.add({
            title: '3',
            completed: false,
            isVisible: true
        });

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
