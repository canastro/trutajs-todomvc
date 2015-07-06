(function () {
    var importDoc = document.currentScript.ownerDocument; // importee

    // Define and register <shadow-element>
    // that uses Shadow DOM and a template.
    var headerProto = Object.create(HTMLElement.prototype);

    headerProto.createdCallback = function () {
        // get template in import
        var template = importDoc.querySelector('#template');

        // import template into
        var clone = document.importNode(template.content, true);

        var root = this.createShadowRoot();
        root.appendChild(clone);
    };

    document.registerElement('todo-header', {
        prototype: headerProto
    });
})();
