// /// <reference path="./OptionElement.ts" />

namespace Library.Elements {
    export class SelectElement extends Element {
        private _containerElement: any;
        _name = "select";

        constructor(containerElement: any) {
            super();
            this._containerElement = containerElement;
        }

        /**
         * Add option elements in this select element
         * @param {OptionElement} optionItem is OptionElement instance.
         */
        Add(optionItem: OptionElement): void {
            this._childs.push(optionItem);
        }

        RenderToHtml(): void {
            var select = document.createElement(this._name);
            this._containerElement.appendChild(select);
        }
    }
}
