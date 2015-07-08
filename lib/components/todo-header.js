import {
    $, Router, Truta, Http, Robalo
}
from 'truta-js';

Truta
    .component('TodoHeaderComponent', function (HeaderComponent) {

        let TodoProvider = Truta.getProviderByName('TodoProvider');

        let data = new Robalo();
        data.set({
            newTodo: 'yeyey'
        });

        HeaderComponent.keyDown = function (evt) {
            if (evt.keyCode !== 13) {
                return;
            }

            TodoProvider.add({
                title: data.newTodo,
                completed: false
            });

            data.update({
                newTodo: null
            });
        };

        return {
            data: data,
            element: 'todo-header'
        };
    });
