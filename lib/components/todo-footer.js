import {
    $, Router, Truta, Http, SeeBass
}
from 'truta-js';

Truta
    .component('TodoFooterComponent', function (FooterComponent) {

        let TodoProvider = Truta.getProviderByName('TodoProvider');
        let todosList = TodoProvider.all();
        let data = new SeeBass();

        data.set({
            remainingCount: todosList.length,
            selectedState: 'ALL'
        });

        TodoProvider.all().addFisherman({
            fn: function () {
                data.update({
                    remainingCount : todosList.length
                });
            }
        });

        FooterComponent.show = function(state) {

            Array.from(TodoProvider.all()).forEach((todo) => {
                let isVisible = (
                    (state === 'COMPLETED' && todo.completed) ||
                    (state === 'ACTIVE' && !todo.completed) ||
                    state === 'ALL'
                );

                data.update({
                    selectedState: state
                });

                todo.update({
                    isVisible : isVisible
                });
            });

        };

        FooterComponent.clearCompleted = function () {
            Array.from(TodoProvider.all()).forEach((todo) => {
                if (todo.completed) {
                    TodoProvider.delete(todo);
                }
            });
        };

        return {
            data: data,
            element: 'todo-footer'
        };
    });
