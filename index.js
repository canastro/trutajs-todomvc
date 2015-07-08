import {
    $, Router, Truta, Http, Robalo
}
from 'truta-js';

import './lib/components/todo-header';
import './lib/components/todo-list';
import './lib/components/todo-footer';
import './lib/providers/todo';
import './lib/router';

Truta.bootstrap([
    '/components/todo-list/index.html',
    '/components/todo-header/index.html',
    '/components/todo-footer/index.html'
]).then(function () {
    Router.start();
});


// debugger;
//
// let robalo = new Robalo();
// robalo.set({
//     teste: 'a',
//     list: []
// });
// robalo.add('list', { hello: 'world'});
//
// robalo.list[0].set({
//     'yeh': 'wololo'
// });
//
// console.log(robalo);
