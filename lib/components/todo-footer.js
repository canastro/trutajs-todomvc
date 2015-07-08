import {
    $, Router, Truta, Http, Robalo
}
from 'truta-js';

Truta
    .component('TodoFooterComponent', function (FooterComponent) {

        let TodoProvider = Truta.getProviderByName('TodoProvider');
        let todosList = TodoProvider.all();
        let data = new Robalo();

        data.set({
            remainingCount: todosList.length
        });

        TodoProvider.all().addFisherman(function () {
            data.update({
                remainingCount : todosList.length
            });
        });

        return {
            data: data,
            element: 'todo-footer'
        };
    });
