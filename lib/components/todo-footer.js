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
            remainingCount: todosList.length
        });

        TodoProvider.all().addFisherman({
            fn: function () {
                data.update({
                    remainingCount : todosList.length
                });
            }
        });

        return {
            data: data,
            element: 'todo-footer'
        };
    });
