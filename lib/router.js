import {
    Router
    }
    from 'truta-js';

Router
    .state('', {
        header: {
            component: 'TodoHeaderComponent'
        },
        content: {
            component: 'TodoListComponent'
        },
        footer: {
            component: 'TodoFooterComponent'
        }
    });
