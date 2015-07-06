(function () {
    var importDoc = document.currentScript.ownerDocument; // importee

    // Define and register <shadow-element>
    // that uses Shadow DOM and a template.
    var todoListProto = Object.create(HTMLElement.prototype);

    todoListProto.createdCallback = function () {
        // get template in import
        var template = importDoc.querySelector('#template');

        // import template into
        var clone = document.importNode(template.content, true);

        var root = this.createShadowRoot();
        root.appendChild(clone);
    };

    document.registerElement('todo-list', {
        prototype: todoListProto
    });
})();
