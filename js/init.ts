/// <reference path="../node_modules/@types/requirejs/index.d.ts" />

(() => {
    function initElement(element: HTMLElement) {
        const moduleName = element.dataset['init'];
        require([moduleName], (module: {'default': (element: HTMLElement) => void}) => {
            module.default(element);
        });
    }

    function initAll(container: Element) {
        const initElements = <NodeListOf<HTMLElement>>container.querySelectorAll('[data-init]');
        for (let i = 0; i < initElements.length; i++) {
            initElement(initElements[i]);
        }
    }

    initAll(document.body);
})();
