import {
    $, Router, Truta, Http, SeeBass
}
from 'truta-js';

Truta
    .component('TodoHeaderComponent', function (HeaderComponent) {

        let TodoProvider = Truta.getProviderByName('TodoProvider');

        let data = new SeeBass();
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
