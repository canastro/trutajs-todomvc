import {
    $, Router, Truta, Http
}
from 'truta-js';

Truta
    .component('TodoHeaderComponent', function (HeaderComponent) {

        let TodoProvider = Truta.getProviderByName('TodoProvider');

        let data = {
            newTodo: null
        };

        HeaderComponent.keyDown = function (evt) {
            if (evt.keyCode !== 13) {
                return;
            }

            TodoProvider.add({
                title: data.newTodo,
                completed: false
            });

            data.newTodo = null;
        };

        return {
            data: data,
            element: 'todo-header'
        };
    });
