import {
    $, Router, Truta, Http
}
from 'truta-js';

Truta
    .component('TodoFooterComponent', function (FooterComponent) {

        let TodoProvider = Truta.getProviderByName('TodoProvider');
        let todosList = TodoProvider.all();
        let data = {
            remainingCount: todosList.length
        };

        Array.observe(todosList, function () {
            data.remainingCount = todosList.length
        });

        return {
            data: data,
            element: 'todo-footer'
        };
    });
